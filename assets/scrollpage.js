const PANEL_MEDIA = '(min-width: 769px)';
const TRANSITION_MS = 700;
const WHEEL_THRESHOLD = 40;
const GESTURE_GAP_MS = 180;
const SWIPE_THRESHOLD = 60;
const PASS_THROUGH = '.preserve-interaction, #modeselection';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function isScrollable(el, dy) {
    if (el.scrollHeight - el.clientHeight < 2) return false;
    const overflow = getComputedStyle(el).overflowY;
    if (overflow !== 'auto' && overflow !== 'scroll') return false;
    return dy > 0
        ? el.scrollTop + el.clientHeight < el.scrollHeight - 1
        : el.scrollTop > 0;
}

function canScrollNatively(start, panel, dy) {
    let el = start && panel.contains(start) ? start : panel;
    for (; el && panel.contains(el); el = el.parentElement) {
        if (isScrollable(el, dy)) return true;
    }
    return false;
}

const stripIndex = path => path.replace(/index\.html$/, '');

class SectionNavigator {
    constructor(sections) {
        this.pages = sections;
        this.index = 0;
        this.enabled = false;
        this.transition = null;
        this.touch = null;
        this.gestureTimer = null;
        this.gestureNative = false;
        this.gestureFlipped = false; // already flipped a panel in this gesture
        this.wheelAccum = 0;

        this.pages.forEach((el, i) => {
            if (!el.id) el.id = `page-${i}`;
            el.tabIndex = -1;

            const inner = document.createElement('div');
            inner.className = 'page-inner';
            while (el.firstChild) inner.appendChild(el.firstChild);
            el.appendChild(inner);
        });

        const startIndex = this.resolveHash();
        this.index = startIndex < 0 ? 0 : startIndex;

        // switchfonts.js is going to use this
        window.pageTransitioner = this;

        this.bindEvents();

        this.media = window.matchMedia(PANEL_MEDIA);
        this.media.addEventListener('change', e => this.setMode(e.matches));
        this.setMode(this.media.matches, { initial: true });
    }

    get currentPageIndex() {
        return this.index;
    }

    get currentPage() {
        return this.pages[this.index];
    }

    // setup

    bindEvents() {
        window.addEventListener('wheel', e => this.onWheel(e), { passive: false });
        window.addEventListener('touchstart', e => this.onTouchStart(e), { passive: true });
        window.addEventListener('touchend', e => this.onTouchEnd(e), { passive: true });
        window.addEventListener('touchcancel', () => { this.touch = null; }, { passive: true });
        window.addEventListener('keydown', e => this.onKeyDown(e));
        window.addEventListener('hashchange', () => this.onHashChange());
        document.addEventListener('click', e => this.onClick(e));
    }

    setMode(panelMode, { initial = false } = {}) {
        this.resetGesture();
        this.cancelTransition();

        if (panelMode) {
            const fromHash = this.resolveHash();
            this.index = fromHash >= 0 ? fromHash : this.indexFromScroll();
        }

        this.enabled = panelMode;
        document.documentElement.classList.toggle('panel-mode', panelMode);

        this.pages.forEach((page, i) => {
            page.classList.toggle('is-active', panelMode && i === this.index);
            page.inert = panelMode && i !== this.index;
        });

        if (!initial) {
            if (panelMode) window.scrollTo(0, 0);
            else this.pages[this.index].scrollIntoView({ block: 'start' });
        }
    }


    resolveHash() {
        const id = decodeURIComponent(window.location.hash.slice(1));
        if (!id) return -1;
        return this.pages.findIndex(p => p.id === id);
    }

    indexFromScroll() {
        const line = window.scrollY + window.innerHeight / 2;
        let idx = 0;
        this.pages.forEach((p, i) => {
            if (p.getBoundingClientRect().top + window.scrollY <= line) idx = i;
        });
        return idx;
    }

    resetGesture() {
        clearTimeout(this.gestureTimer);
        this.gestureTimer = null;
        this.gestureNative = false;
        this.gestureFlipped = false;
        this.wheelAccum = 0;
    }

    step(dir) {
        this.goTo(this.index + dir);
    }


    goTo(next, { updateHash = true } = {}) {
        if (!this.enabled) return;
        if (this.transition) this.finishTransition();
        if (next < 0 || next >= this.pages.length || next === this.index) return;

        const dir = next > this.index ? 1 : -1;
        const from = this.pages[this.index];
        const to = this.pages[next];
        this.index = next;

        if (updateHash) {
            window.history.pushState(null, '', `#${to.id}`);
        }

        to.inert = false;
        to.classList.add('is-active', 'is-entering');
        this.transition = { from, to, anims: [] };

        const duration = reduceMotion.matches ? 0 : TRANSITION_MS;
        if (!duration || typeof to.animate !== 'function') {
            this.finishTransition();
            return;
        }

        const opts = { duration, easing: 'cubic-bezier(0.65, 0, 0.35, 1)' };
        const anims = [
            to.animate(
                [{ transform: `translate3d(0, ${dir * 100}%, 0)` }, { transform: 'translate3d(0, 0, 0)' }],
                opts
            ),
            from.animate(
                [{ transform: 'translate3d(0, 0, 0)' }, { transform: `translate3d(0, ${-dir * 100}%, 0)` }],
                opts
            ),
        ];
        this.transition.anims = anims;
        anims[0].onfinish = () => this.finishTransition();
    }

    cancelTransition() {
        if (this.transition) this.finishTransition();
    }

    finishTransition() {
        const t = this.transition;
        if (!t) return;
        this.transition = null;

        t.anims.forEach(a => a.cancel());
        t.from.classList.remove('is-active');
        t.from.inert = true;
        t.to.classList.remove('is-entering');

        if (t.from.contains(document.activeElement)) {
            t.to.focus({ preventScroll: true });
        }
    }


    onWheel(e) {
        if (!this.enabled || e.ctrlKey) return;
        const dy = e.deltaY;
        if (dy === 0 || Math.abs(dy) < Math.abs(e.deltaX)) return;
        if (e.target.closest && e.target.closest(PASS_THROUGH)) return;

        clearTimeout(this.gestureTimer);
        this.gestureTimer = setTimeout(() => this.resetGesture(), GESTURE_GAP_MS);

        if (this.transition) {
            e.preventDefault();
            return;
        }

        if (this.gestureNative) return;

        if (this.gestureFlipped) {
            e.preventDefault();
            return;
        }

        if (canScrollNatively(e.target, this.currentPage, dy)) {
            this.gestureNative = true;
            return;
        }

        e.preventDefault();
        this.wheelAccum += dy;
        if (Math.abs(this.wheelAccum) < WHEEL_THRESHOLD) return;

        const dir = Math.sign(this.wheelAccum);
        this.wheelAccum = 0;
        this.gestureFlipped = true;
        this.step(dir);
    }


    onTouchStart(e) {
        if (!this.enabled || e.touches.length !== 1) {
            this.touch = null;
            return;
        }
        const t = e.touches[0];
        const panel = this.currentPage;

        this.touch = {
            x: t.clientX,
            y: t.clientY,
            canDown: canScrollNatively(e.target, panel, 1),
            canUp: canScrollNatively(e.target, panel, -1),
        };
    }

    onTouchEnd(e) {
        const start = this.touch;
        this.touch = null;
        if (!start || !this.enabled || this.transition || !e.changedTouches.length) return;

        const t = e.changedTouches[0];
        const dx = t.clientX - start.x;
        const dy = start.y - t.clientY;
        if (Math.abs(dy) < SWIPE_THRESHOLD || Math.abs(dy) < Math.abs(dx)) return;

        if (dy > 0 && !start.canDown) this.step(1);
        else if (dy < 0 && !start.canUp) this.step(-1);
    }

    onKeyDown(e) {
        if (!this.enabled || e.altKey || e.ctrlKey || e.metaKey) return;

        const el = e.target;
        if (el.closest && el.closest('input, textarea, select, [contenteditable="true"]')) return;

        let dir = 0;
        switch (e.key) {
            case 'ArrowDown':
            case 'PageDown':
                dir = 1;
                break;
            case 'ArrowUp':
            case 'PageUp':
                dir = -1;
                break;
            case ' ':
                if (el.closest && el.closest('button, a, [role="button"]')) return;
                dir = e.shiftKey ? -1 : 1;
                break;
            case 'Home':
                e.preventDefault();
                this.goTo(0);
                return;
            case 'End':
                e.preventDefault();
                this.goTo(this.pages.length - 1);
                return;
            default:
                return;
        }

        if (this.transition) {
            e.preventDefault();
            return;
        }
        if (canScrollNatively(el, this.currentPage, dir)) return;

        e.preventDefault();
        this.step(dir);
    }


    onClick(e) {
        if (!this.enabled || e.defaultPrevented || e.button !== 0) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        const link = e.target.closest && e.target.closest('a[href]');
        if (!link || (link.target && link.target !== '_self')) return;

        const url = new URL(link.href, window.location.href);
        if (url.origin !== window.location.origin || !url.hash) return;
        if (stripIndex(url.pathname) !== stripIndex(window.location.pathname)) return;

        const idx = this.pages.findIndex(p => p.id === decodeURIComponent(url.hash.slice(1)));
        if (idx < 0) return;

        e.preventDefault();
        this.goTo(idx);
    }

    onHashChange() {
        if (!this.enabled) return;
        const idx = this.resolveHash();
        if (idx < 0 && window.location.hash) return;
        this.goTo(Math.max(idx, 0), { updateHash: false });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = Array.from(document.querySelectorAll('main.page-section'));
    if (sections.length < 2) return;
    new SectionNavigator(sections);
});
