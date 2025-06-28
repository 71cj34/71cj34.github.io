class PageTransitions {
    constructor() {
        this.pages = Array.from(document.querySelectorAll('main.page-section'));
        this.currentPageIndex = 0;
        this.isAnimating = false;
        this.scrollTimeout = null;
        
        if (this.pages.length < 2) return; // No transitions needed if only one page
        
        this.init();
    }
    
    init() {
        // Style all pages except first as hidden initially
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
            
            // Add container for centered content
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
            
            // Move all child nodes into the container
            while (page.firstChild) {
                container.appendChild(page.firstChild);
            }
            page.appendChild(container);
        });
        
        // Make body non-scrollable (we'll handle scrolling ourselves)
        document.body.style.overflow = 'hidden';
        
        // Add wheel event listener
        window.addEventListener('wheel', this.handleScroll.bind(this), { passive: false });
        
        // Add touch events for mobile
        let touchStartY = 0;
        window.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        window.addEventListener('touchend', (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchEndY - touchStartY;
            
            // Threshold to prevent accidental page changes
            if (Math.abs(deltaY) > 50) {
                if (deltaY > 0) {
                    this.goToPreviousPage();
                } else {
                    this.goToNextPage();
                }
            }
        }, { passive: true });
        
        // Fix for elements that should stay interactive
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
        
        newPage.style.opacity = '1';
        newPage.style.pointerEvents = 'auto';
        
        const direction = newIndex > this.currentPageIndex ? 1 : -1;
        
        // Set initial positions
        if (direction > 0) {
            // For next page transition
            newPage.style.transform = 'translateY(100%)';
        } else {
            // For previous page transition
            newPage.style.transform = 'translateY(-100%)';
        }
        
        // Force reflow
        newPage.offsetHeight;
        
        // Animate both pages
        currentPage.style.transform = `translateY(${-100 * direction}%)`;
        newPage.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            // After animation completes
            currentPage.style.opacity = '0';
            currentPage.style.pointerEvents = 'none';
            // Don't reset transform here - let it stay off-screen
            // currentPage.style.transform = 'translateY(0)';
            
            this.currentPageIndex = newIndex;
            this.isAnimating = false;
        }, 800);
    }

}

// Initialize when DOM is loaded
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

/* Optional: Add responsive adjustments */
@media (max-width: 768px) {
    .page-content-container {
        padding: 1rem;
    }
}
`;
document.head.appendChild(styleScrollPage);
