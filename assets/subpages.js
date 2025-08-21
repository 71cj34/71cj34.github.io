const content = document.querySelector('main');


document.addEventListener('DOMContentLoaded', function() {
    try {
        const header = document.getElementById('subpagesHeader');
        const linksContainer = header.querySelector('.subpages-links');
        let isExpanded = false;
        let hideTimeout = null;
        let activeMobileDropdown = null;

        function checkOverflow() {
            const containerWidth = header.offsetWidth;
            const linksWidth = Array.from(linksContainer.children).reduce((total, link) => {
                return total + link.offsetWidth + 15;
            }, 0);

            if (window.innerWidth >= 811) {
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
                header.addEventListener('touchend', mobileToggleHandler);
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

        let dropdownData = {}; // store precalc dropdown data

        function positionDropdown(subdropdown, data) {
            if (!data) {
                data = dropdownData[dropdownId]
            }
            if (!data) return; // exit if data not available

            const {
                dropdownRect,
                parentRect,
                linkRect
            } = data;
            let linkCenter = (linkRect.left + linkRect.right) / 2.0;

            if (window.innerWidth >= 811) {
                subdropdown.style.position = 'absolute';
                subdropdown.style.left = `${linkCenter - parentRect.left - (dropdownRect.width / 2)}px`;
                subdropdown.style.top = `${linkRect.bottom - header.getBoundingClientRect().top}px`;
                subdropdown.style.width = 'auto'; // reset width
                subdropdown.style.maxWidth = 'none';
                subdropdown.style.borderRadius = '4px';
                subdropdown.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';


            } else {
                subdropdown.style.position = 'fixed';
                subdropdown.style.left = '0';
                subdropdown.style.right = '0';
                subdropdown.style.top = `${linkRect.bottom}px`;
                subdropdown.style.width = '100%';
                subdropdown.style.maxWidth = 'none';
                subdropdown.style.borderRadius = '0';
                subdropdown.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            }
    }

        function initSubdropdowns() {
            function generateId() {
                return 'dropdown-' + Math.random().toString(36).substring(2, 15);
            }

            function calculateDropdownData(link, subdropdown) {
                subdropdown.style.display = 'block';
                subdropdown.style.visibility = 'hidden';

                const parentRect = subdropdown.offsetParent?.getBoundingClientRect() || header.getBoundingClientRect();

                const dropdownId = link.getAttribute('dropdown-id');
                dropdownData[dropdownId] = {
                    dropdownRect: subdropdown.getBoundingClientRect(),
                    parentRect: parentRect,
                    linkRect: link.getBoundingClientRect(),
                };

                subdropdown.style.display = 'none';
                subdropdown.style.visibility = 'visible';
                return dropdownData[dropdownId];
            }

            document.querySelectorAll('.subpage-link.has-subdropdown').forEach(link => {

                const subdropdown = link.nextElementSibling;
                if (!subdropdown || !subdropdown.classList.contains('subdropdown')) {console.warn("No subdropdowns found..."); return;}

                if (!subdropdown || !subdropdown.classList.contains('subdropdown')) {
                    return; // skip this iteration if subdropdown is not found
                }

                const dropdownId = link.getAttribute('dropdown-id') || generateId();
                link.setAttribute('dropdown-id', dropdownId);

                calculateDropdownData(link, subdropdown);

                function mobileDropdownToggleHandler(e, link, subdropdown) {
                    try {
                    if (window.innerWidth >= 811) {
                        return;
                    }
                    console.log("BUTTON PRESS DETECTED!!!");

                    e.preventDefault();
                    e.stopPropagation();

                    const isOpening = subdropdown !== activeMobileDropdown;

                    if (activeMobileDropdown) {
                        activeMobileDropdown.style.transform = 'translateY(-10px)';
                        activeMobileDropdown.style.opacity = '0';
                        setTimeout(() => {
                            activeMobileDropdown.style.display = 'none';
                        }, 300);
                    }

                    if (isOpening) {
                        const data = dropdownData[dropdownId];
                        positionDropdown(subdropdown, data);
                        subdropdown.style.display = 'block';
                        subdropdown.style.transform = 'translateY(-10px)';
                        subdropdown.style.opacity = '0';

                        setTimeout(() => {
                            subdropdown.style.transform = 'translateY(0)';
                            subdropdown.style.opacity = '1';
                        }, 10);

                        activeMobileDropdown = subdropdown;
                    } else {
                        activeMobileDropdown = null;
                    }
                    } catch(ex) {
                        console.log(`Error caught AFTER CLICKING: ${ex}`)
                    }
                }

                link.addEventListener('click', function(e) {
                    mobileDropdownToggleHandler(e, link, subdropdown);
                });

                link.addEventListener('mouseenter', function() {
                    if (window.innerWidth >= 811) {
                        clearTimeout(hideTimeout);
                        document.querySelectorAll('.subdropdown').forEach(d => {
                            d.style.display = 'none';
                            d.style.opacity = '0';
                        });
                        positionDropdown(subdropdown, dropdownData[dropdownId]);
                        subdropdown.style.display = 'block';
                        setTimeout(() => {
                            subdropdown.style.opacity = '1';
                        }, 10);
                    }
                });

                link.addEventListener('mouseleave', function(e) {
                    if (window.innerWidth >= 811) {
                        startHideTimeout(subdropdown);
                    }
                });

                subdropdown.addEventListener('mouseenter', function() {
                    if (window.innerWidth >= 811) {
                        clearTimeout(hideTimeout);
                        subdropdown.style.opacity = '1';
                    }
                });

                subdropdown.addEventListener('mouseleave', function() {
                    if (window.innerWidth >= 811) {
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
            }, 1000);
        }

        document.addEventListener('touchend', function(e) {
            if (window.innerWidth < 811 && activeMobileDropdown &&
                !e.target.closest('.subdropdown') &&
                !e.target.closest('.subpage-link.has-subdropdown')) {

                activeMobileDropdown.style.transform = 'translateY(-10px)';
                activeMobileDropdown.style.opacity = '0';
                setTimeout(() => {
                    activeMobileDropdown.style.display = 'none';
                    activeMobileDropdown = null;
                }, 300);
            }
        });

        const subpageLinks = document.querySelectorAll('.subpage-link, .subdropdown, .subdropdown-link');
        subpageLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });

        function recalculateDropdownPositions() {
            document.querySelectorAll('.subpage-link.has-subdropdown').forEach(link => {
                const dropdownId = link.getAttribute('dropdown-id');
                if (!dropdownId) return;
                
                const subdropdown = link.nextElementSibling;
                if (!subdropdown || !subdropdown.classList.contains('subdropdown')) return;
                
                // Fallback to header if offsetParent is null
                const parentElement = subdropdown.offsetParent || header;
                
                dropdownData[dropdownId] = {
                    dropdownRect: subdropdown.getBoundingClientRect(),
                    parentRect: parentElement.getBoundingClientRect(),
                    linkRect: link.getBoundingClientRect(),
                };
                
                positionDropdown(subdropdown, dropdownData[dropdownId], header);
            });
        }


        checkOverflow();
        setTimeout(() => {
            initSubdropdowns();
        }, 100);
        window.addEventListener('resize', () => {
            checkOverflow();
            recalculateDropdownPositions();
        });
    } catch (e) {
        console.log(`ERROR FOUND:${e}`)
    }
});


/////////////////

const linkbar = document.getElementsByClassName("subpages-links")[0];

function updateFontSize() {
    if (!linkbar) return;

    const minFontSize = 0.75;  // base at smallest widths
    const maxExtra = 0.5;      // how much size increases as width gets closer to 811px
    if (window.innerWidth < 811) {
        const scale = Math.min((811 - window.innerWidth)/811, 1);
        linkbar.style.fontSize = (minFontSize + scale * maxExtra) + "rem";
    } else {
        linkbar.style.fontSize = "1rem";
    }
}

updateFontSize();
window.addEventListener('resize', updateFontSize);

const styleLinks = document.createElement('style');
styleLinks.textContent = `
.subpages-header {
    position: absolute;
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
pointer-events: auto;
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
    transition: all 0.3s ease;
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
  pointer-events: none;
}
/* Mobile-specific styles */
@media (max-width: 811px) {
    .subpages-header.expandable .subpages-links {
        max-height: none;
    }

    .subdropdown {
        position: fixed;
        left: 0 !important;
        right: 0;
        top: auto !important;
        width: 100% !important;
        max-width: 100% !important;
        border-radius: 0;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        transform: translateY(-10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .subdropdown.active {
        transform: translateY(0);
        opacity: 1;
    }


    .subdropdown-link {
        padding: 12px 20px;
        border-bottom: 1px solid #eee;
    }

    body.dark-mode .subdropdown-link {
        border-bottom-color: #444;
    }
}
`;
document.head.appendChild(styleLinks);