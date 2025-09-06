class PageTransitions {
    constructor() {
        this.pages = Array.from(document.querySelectorAll('main.page-section'));
        this.currentPageIndex = 0;
        this.isAnimating = false;
        this.scrollTimeout = null;
        this.currentPageId = null;
        
        if (this.pages.length < 2) return; 
        
        this.init();
    }
    
    init() {
                this.pages.forEach((page, index) => {
                        if (!page.id) {
                page.id = `page-${index}`;
            }
        });

        
        
        this.pages.forEach((page, index) => {
            if (index > 0) {
                page.style.opacity = '0';
                page.style.pointerEvents = 'none';
            }
            
            page.style.transition = 'transform 0.8s ease, opacity 0.5s ease';
            page.style.position = 'fixed';
            page.style.top = '0';
            page.style.left = '0';
            page.style.width = '100%';
            page.style.height = '100vh';
            page.style.overflowY = 'auto';
            
            
            const container = document.createElement('div');
            container.className = 'page-content-container';
            container.style.display = 'flex';
            container.style.flexDirection = 'column';
            container.style.justifyContent = 'center';
            container.style.alignItems = 'center';
            container.style.width = '100%';
            container.style.height = '100%';
            container.style.maxWidth = '1200px';
            container.style.margin = '0 auto';
            container.style.padding = '2rem';
            container.style.boxSizing = 'border-box';
            
            
            while (page.firstChild) {
                container.appendChild(page.firstChild);
            }
            page.appendChild(container);
        });
        
        
        document.body.style.overflow = 'hidden';
        
        
                this.checkUrlHash();
        
                window.addEventListener('hashchange', () => {
            this.checkUrlHash();
        });
        
                window.addEventListener('wheel', this.handleScroll.bind(this), { passive: false });
        
        
        let touchStartY = 0;
        window.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        window.addEventListener('touchend', (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchEndY - touchStartY;
            
            
            if (Math.abs(deltaY) > 50) {
                if (deltaY > 0) {
                    this.goToPreviousPage();
                } else {
                    this.goToNextPage();
                }
            }
        }, { passive: true });
    }
    
    checkUrlHash() {
        const hash = window.location.hash.substring(1);         
        if (hash) {
            const targetPage = this.pages.find(page => page.id === hash);
            if (targetPage) {
                const targetIndex = this.pages.indexOf(targetPage);
                if (targetIndex !== this.currentPageIndex && !this.isAnimating) {
                    this.transitionToPage(targetIndex);
                }
            }
        }
    }
    
    handleScroll(e) {
        const interactiveElements = document.querySelectorAll('.preserve-interaction, #modeselection');
        const isOverInteractive = Array.from(interactiveElements).some(el => {
            return el.contains(e.target);
        });
        
        if (this.isAnimating || isOverInteractive) {
            e.preventDefault();
            return;
        }
        
        if (this.scrollTimeout) {
            clearTimeout(this.scrollTimeout);
        }
        
        this.scrollTimeout = setTimeout(() => {
            if (e.deltaY > 0) {
                this.goToNextPage();
            } else if (e.deltaY < 0) {
                this.goToPreviousPage();
            }
        }, 100);
        
        e.preventDefault();
    }
    
    goToNextPage() {
        if (this.currentPageIndex >= this.pages.length - 1 || this.isAnimating) return;
        this.transitionToPage(this.currentPageIndex + 1);
    }
    
    goToPreviousPage() {
        if (this.currentPageIndex <= 0 || this.isAnimating) return;
        this.transitionToPage(this.currentPageIndex - 1);
    }
    
    transitionToPage(newIndex) {
        this.isAnimating = true;
        
        const currentPage = this.pages[this.currentPageIndex];
        const newPage = this.pages[newIndex];
        
        this.currentPageId = newPage.id;
        
        if (window.history.pushState) {
            window.history.pushState(null, null, `#${this.currentPageId}`);
        } else {
            window.location.hash = this.currentPageId;
        }
        
        newPage.style.opacity = '1';
        newPage.style.pointerEvents = 'auto';
        
        const direction = newIndex > this.currentPageIndex ? 1 : -1;
        
        
        if (direction > 0) {
            
            newPage.style.transform = 'translateY(100%)';
        } else {
            
            newPage.style.transform = 'translateY(-100%)';
        }
        
        
        newPage.offsetHeight;
        
        
        currentPage.style.transform = `translateY(${-100 * direction}%)`;
        newPage.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            
            currentPage.style.opacity = '0';
            currentPage.style.pointerEvents = 'none';
            
            this.currentPageIndex = newIndex;
            this.isAnimating = false;
        }, 800);
    }

}


document.addEventListener('DOMContentLoaded', () => {
    new PageTransitions();
});
