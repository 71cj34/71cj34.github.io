const content = document.querySelector('main');


document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('subpagesHeader');
    const linksContainer = header.querySelector('.subpages-links');
    let isExpanded = false;

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
        if (e.target.closest('.subpage-link')) {
            return;
        }

        function updateMargin(newMax) {
            maxMargin = newMax;
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

            setTimeout(() => updateMargin(header.offsetHeight), 0.3);
        } else {
            header.classList.remove('expandable');
            linksContainer.style.maxHeight = '1.5em';
            linksContainer.style.flexWrap = 'nowrap';

            void header.offsetHeight;

            if (content) {
                content.style.marginTop = '0';
            }
        }
    }

    const subpageLinks = document.querySelectorAll('.subpage-link');
    subpageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the event from bubbling up to the header
        });
    });

    checkOverflow();
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
    // gap: 10px 20px;
}

.subpage-link {
    position: relative;
    text-decoration: none;
    color: #333;
    padding: 2px 4px;
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

/* Better mobile experience */
@media (max-width: 768px) {
    .subpages-header.expandable .subpages-links {
        max-height: none;
    }
}

`;
document.head.appendChild(styleLinks);