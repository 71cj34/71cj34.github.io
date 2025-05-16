const content = document.querySelector('main');

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('subpagesHeader');
    const linksContainer = header.querySelector('.subpages-links');
    let isExpanded = false;
    let hideTimeout = null;

    function checkOverflow() {
        const containerWidth = header.offsetWidth;
        const linksWidth = Array.from(linksContainer.children).reduce((total, link) => {
            return total + link.offsetWidth + 15;
        }, 0);

        if (window.innerWidth >= 768) {
            if (content) content.style.marginTop = header.offsetHeight - 50 + 'px';
            if (linksWidth > containerWidth) {
                header.classList.add('expandable');
                linksContainer.style.flexWrap = 'wrap';
            } else {
                header.classList.remove('expandable');
                linksContainer.style.maxHeight = 'none';
            }
        } else {
            const title = document.getElementsByClassName('subpages-title');
            title[0].innerText = "Subpages (Click to Expand)";
            header.removeEventListener('click', mobileToggleHandler);
            header.addEventListener('click', mobileToggleHandler);
        }
    }

    function mobileToggleHandler(e) {
        if (e.target.closest('.subpage-link') || e.target.closest('.subdropdown')) {
            return;
        }

        isExpanded = !isExpanded;

        if (isExpanded) {
            header.classList.add('expandable');
            linksContainer.style.maxHeight = '500px';
            linksContainer.style.flexWrap = 'wrap';

            if (content) content.style.marginTop = header.offsetHeight + 'px';

            let count = 0;
            const interval = setInterval(() => {
                if (content) content.style.marginTop = header.offsetHeight + 'px';
                if (count === 30) {
                    clearInterval(interval);
                }
            }, 100);
        } else {
            header.classList.remove('expandable');
            linksContainer.style.maxHeight = '1.5em';
            linksContainer.style.flexWrap = 'nowrap';

            void header.offsetHeight;

            if (content) {
                content.style.marginTop = '0';
            }

            document.querySelectorAll('.subdropdown').forEach(dropdown => {
                dropdown.style.opacity = '0';
                setTimeout(() => {
                    dropdown.style.display = 'none';
                }, 300);
            });
        }
    }

    ///////////////////////////////////

    function initSubdropdowns() {
        document.querySelectorAll('.subpage-link.has-subdropdown').forEach(link => {
            const subdropdown = link.nextElementSibling;

            let dropdownRect;

            subdropdown.style.display = 'block';
            subdropdown.style.visibility = 'hidden';
            setTimeout(() => {
                dropdownRect = subdropdown.getBoundingClientRect();
                subdropdown.style.display = 'none';
                subdropdown.style.visibility = 'visible';
            }, "60");

            const parentRect = subdropdown.offsetParent.getBoundingClientRect();


            // Position the dropdown under its parent link
            function positionDropdown() {
                const linkRect = link.getBoundingClientRect();

                let linkCenter = (linkRect.left + linkRect.right) / 2.0;
                let dropdownWidth = dropdownRect.right - dropdownRect.left;

                // subdropdown.style.left = `${linkRect.left - header.getBoundingClientRect().left - linkRect.width/4}px`;

                subdropdown.style.left = `${linkCenter - parentRect.left - (dropdownRect.width / 2)}px`;
                subdropdown.style.top = `${linkRect.bottom - header.getBoundingClientRect().top}px`;
            }

            link.addEventListener('click', function(e) {
                if (window.innerWidth < 768) {
                    e.preventDefault();
                    const isVisible = subdropdown.style.display === 'block';
                    document.querySelectorAll('.subdropdown').forEach(d => {
                        d.style.display = 'none';
                        d.style.opacity = '0';
                    });
                    positionDropdown();
                    subdropdown.style.display = 'block';
                    subdropdown.style.opacity = '1';
                }
            });

            link.addEventListener('mouseenter', function() {
                if (window.innerWidth >= 768) {
                    clearTimeout(hideTimeout);
                    document.querySelectorAll('.subdropdown').forEach(d => {
                        d.style.display = 'none';
                        d.style.opacity = '0';
                    });
                    positionDropdown();
                    subdropdown.style.display = 'block';
                    setTimeout(() => {
                        subdropdown.style.opacity = '1';
                    }, 10);
                }
            });

            link.addEventListener('mouseleave', function(e) {
                if (window.innerWidth >= 768) {
                    startHideTimeout(subdropdown);
                }
            });

            subdropdown.addEventListener('mouseenter', function() {
                if (window.innerWidth >= 768) {
                    clearTimeout(hideTimeout);
                    subdropdown.style.opacity = '1';
                }
            });

            subdropdown.addEventListener('mouseleave', function() {
                if (window.innerWidth >= 768) {
                    startHideTimeout(subdropdown);
                }
            });
        });
    }

    function startHideTimeout(subdropdown) {
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            subdropdown.style.opacity = '0';
            setTimeout(() => {
                subdropdown.style.display = 'none';
            }, 300);
        }, 1000); // 1 second delay before fade starts
    }

    const subpageLinks = document.querySelectorAll('.subpage-link, .subdropdown, .subdropdown-link');
    subpageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });

    checkOverflow();
    initSubdropdowns();
    window.addEventListener('resize', checkOverflow);
});

const styleLinks = document.createElement('style');
styleLinks.textContent = `
.subpages-header {
    position: fixed;
    display: inline-block;
    top: 1vh;
    left: 1vw;
    max-width: max(50%, 250px);
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    z-index: 1000;
}

.subpages-header:hover {
    background-color: rgba(0,0,0,0.05);
}

body.dark-mode .subpages-header:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.subpages-title {
    font-weight: light;
    margin-bottom: 2px;
    font-style: italic;
    text-align: left;
    cursor: default;
    font-size: 0.65rem;
    color: #595959;
}

body.dark-mode .subpages-title {
    color: #ededed;
}

.subpages-links {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    max-height: 1.5em;
    overflow: hidden;
    transition: max-height 0.3s ease;
    width: 100%;
}

.subpages-header.expandable:hover .subpages-links {
    max-height: 500px;
}

.subpage-link {
    position: relative;
    text-decoration: none;
    color: #333;
    padding: 4px 8px;
    white-space: nowrap;
    transition: color 0.2s ease;
    line-height: 1.4;
    border-radius: 2px;
}

body.dark-mode .subpage-link {
    color: #cccccc;
}

main {
    transition: margin-top 0.5s ease-out;
}

.subpage-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #e74c3c;
    transform-origin: bottom;
    transform: scaleY(1);
    transition: all 0.2s ease;
    border-radius: 1px;
}

.subpage-link:hover {
    color: white;
}

.subpage-link:hover::after {
    transform: scaleY(3.);
    height: 100%;
    z-index: -1;
    background-color: #c0392b;
}

/* Subdropdown styles */
.subdropdown {
    display: none;
    opacity: 0;
    position: absolute;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    padding: 5px 0;
    min-width: 150px;
    z-index: 1001;
    transition: opacity 0.3s ease;
}

body.dark-mode .subdropdown {
    background-color: #333;
    box-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.subdropdown-link {
    display: block;
    padding: 8px 15px;
    color: #333;
    text-decoration: none;
    transition: all 0.2s;
}

body.dark-mode .subdropdown-link {
    color: #ccc;
}

.subdropdown-link:hover {
    background-color: #f0f0f0;
    color: #e74c3c;
    padding-left: 20px;
}

body.dark-mode .subdropdown-link:hover {
    background-color: #444;
    color: #c0392b;
}

.subpage-link.has-subdropdown {
    font-weight: bold;
}

a.subpage-link {
    font-weight: normal;
}

.dropdown-arrow {
  display: inline-block;
  transition: transform 0.3s ease;
  transform-origin: center;
}

.subpage-link:hover > .dropdown-arrow {
  transform: rotate(180deg);
}

/* Better mobile experience */
@media (max-width: 768px) {
    .subpages-header.expandable .subpages-links {
        max-height: none;
    }
    
    .subdropdown {
        position: static;
        box-shadow: none;
        padding-left: 15px;
        display: none;
        opacity: 1;
    }

    .subpage-link.has-subdropdown .dropdown-arrow { /* Hide the original arrow on mobile */
    display: none;
}
    
    .subpage-link.has-subdropdown::after {
        content: ' ▼';
        position: static;
        display: inline;
        background: none;
        transform: none;
    }
}
`;
document.head.appendChild(styleLinks);