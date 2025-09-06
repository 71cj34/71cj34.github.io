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
        // Assign IDs to pages if they don't have one
        this.pages.forEach((page, index) => {
            // If no ID is set, assign a default one
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
        
        
        // Check hash on load
        this.checkUrlHash();
        
        // Listen for hash changes
        window.addEventListener('hashchange', () => {
            this.checkUrlHash();
        });
        
        // Listen for wheel events
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
        
        
        this.preserveInteractiveElements();
    }
    
    preserveInteractiveElements() {
        const interactiveElements = document.querySelectorAll('.preserve-interaction, #modeselection');
        interactiveElements.forEach(el => {
            el.style.position = 'fixed';
            el.style.zIndex = '1000';
            el.style.pointerEvents = 'auto';
        });
    }
    
    checkUrlHash() {
        const hash = window.location.hash.substring(1); // Remove the #
        
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
        
        // Update URL hash without triggering navigation
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

const styleScrollPage = document.createElement('style');
styleScrollPage.textContent = `
#modeselection, .preserve-interaction {
    position: fixed;
    z-index: 1000;
    pointer-events: auto;
}
  .page-section:not(.page-1) {
    opacity: 0;
    pointer-events: none;
  }

#modeselection {
    top: 1.2rem;
    right: 1.2rem;
    cursor: pointer;
}

.page-section {
    z-index: 1;
    background: var(--bg-color);
    color: var(--text-color);
}

.page-section:first-child {
    z-index: 2;
}

.page-content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    box-sizing: border-box;
}

.page-content-container > * {
    max-width: 100%;
}

@media (max-width: 768px) {
    .page-content-container {
        padding: 1rem;
    }
}



main.page-section:nth-child(2) .page-content-container {
    flex-direction: row; 
    flex-wrap: wrap; 
    justify-content: center; 
    align-items: flex-start; 
    padding: 2rem 10vw; 
    max-width: none;  
}

// no idea why this was here but it made the first page not centered vertically
// main.page-section:nth-child(2) .page-content-container > * {
//     flex: 1 1 40vw; 
//     max-width: 40vw; 
//     box-sizing: border-box; 
//     text-align: left; 
// }


@media (max-width: 992px) { 
    main.page-section:nth-child(2) .page-content-container {
        padding: 2rem 5vw; 
        gap: 20px;
    }
    main.page-section:nth-child(2) .page-content-container > * {
        flex-basis: 45vw; 
        max-width: 45vw;
    }
}


@media (max-width: 768px) {
    .page-content-container {
        padding: 1rem; 
    }

    .page-1 > .page-content-container {
        gap: inherit;
}

`;
document.head.appendChild(styleScrollPage);