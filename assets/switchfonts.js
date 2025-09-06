const switchfont = document.getElementById('switch-fonts');

const textfontlist = [
    "'Geist Mono', 'monospace'",
    "'Redaction-10', 'serif'",
    "'Syne', sans-serif",
    "'Input Serif', 'Courier New', monospace",
    "'Average Sans', 'sans-serif'",
    "'Exo 2', 'serif'",
    "'Helvetica', 'sans-serif'",
    "'Geist', sans-serif",
    "'Brygada 1918', 'sans-serif'",
    "'Maple Mono', 'sans-serif'",
    "'VT323', 'monospace'",
    "'Space Mono', 'monospace'",
    "'Caveat', 'cursive'",
    "'Sour Gummy', 'monospace'",
    "'IM Fell English', 'serif'",
    "'LineFont'"
];

const headfontlist = [
    "'Redaction-35', serif",
    "'Helvetica Neue', 'sans-serif'",
    "'Inter', 'Arial', 'sans-serif'",
    "'Inconsolata', 'Courier', 'monospace'",
    "'Rufina', 'serif'",
    "'Major Mono Display', 'serif'",
    "'Helvetica Neue', 'sans-serif'",
    "'IBM Plex Mono', monospace",
    "'Optician Sans', 'serif'",
    "'Anta', 'sans-serif'",
    "'Rubik Pixels', 'monospace'",
    "'Offside', 'monospace'",
    "'Patua One', 'serif'",
    "'Fredoka', 'monospace'",
    "'IM Fell English SC', 'cursive'",
    "'Libre Barcode'"
];

let currentIndex = 0;
let currentText, currentHead;
let currentTextSanitized, currentHeadSanitized;

// Utility functions
const getFirstFont = (fontString) =>
    fontString.split(',')[0].trim().replace(/'/g, '');

function getBaseDomain() {
    const hostname = window.location.hostname;
    const parts = hostname.split('.');
    if (parts.length <= 2) {
        return hostname;
    } else {
        return parts.slice(-2).join('.');
    }
}

function getCookie(name) {
    const cookies = document.cookie.split('; ').map(c => c.trim());
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) return decodeURIComponent(value);
    }
    return null;
}

function setCookie(index) {
    const domain = getBaseDomain();
    let cookiedomain = domain.startsWith('.') ? "domain=" + domain + ";" : 'domain=.' + domain + ";";
    if (cookiedomain.includes('localhost') || cookiedomain.includes('0.1')) {
      cookiedomain = "";
    }

    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);

    document.cookie = `fontIndex=${encodeURIComponent(index)}; path=/; ${cookiedomain} expires=${expires.toUTCString()}; SameSite=Lax`;
    console.log(`fontIndex=${encodeURIComponent(index)}; path=/; ${cookiedomain} expires=${expires.toUTCString()}; SameSite=Lax`);
}

// Initial Cookie Setup
{
    const savedIndex = getCookie("fontIndex");
    if (savedIndex !== null) {
        const parsedIndex = parseInt(savedIndex, 10);
        if (!isNaN(parsedIndex) && parsedIndex >= 0 && parsedIndex < textfontlist.length) {
            currentIndex = parsedIndex;
        }
    }

    document.documentElement.style.setProperty('--text', textfontlist[currentIndex]);
    document.documentElement.style.setProperty('--head', headfontlist[currentIndex]);

    currentText = textfontlist[currentIndex];
    currentHead = headfontlist[currentIndex];
    currentTextSanitized = getFirstFont(currentText);
    currentHeadSanitized = getFirstFont(currentHead);
}

switchfont.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % textfontlist.length;

    document.documentElement.style.setProperty('--text', textfontlist[currentIndex]);
    document.documentElement.style.setProperty('--head', headfontlist[currentIndex]);

    currentText = textfontlist[currentIndex];
    currentHead = headfontlist[currentIndex];
    currentTextSanitized = getFirstFont(currentText);
    currentHeadSanitized = getFirstFont(currentHead);

    console.log(`Text Font: ${currentTextSanitized}`);
    console.log(`Head Font: ${currentHeadSanitized}`);

    setCookie(currentIndex);
});

// popup iife
/**********************************************************
 *  Popup for font-switcher
 *  Works both on “normal” pages and inside PageTransitions
 **********************************************************/
(function () {
    /* ---------- helpers -------------------------------- */
    let popupTimeout;
    let popupHiding = false;
    const POPUP_Z = 9999; /* above fixed page sections */

    /* find the element that is currently on screen */
    function getPopupParent() {
        /* if PageTransitions exists use the active page, otherwise <body> */
        if (window.pageTransitioner && window.pageTransitioner.pages) {
            const idx = window.pageTransitioner.currentPageIndex;
            return window.pageTransitioner.pages[idx];
        }
        return document.body;
    }

    /* build the popup node */
    function createPopup() {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.style.cssText =
            `position:fixed; z-index:${POPUP_Z}; left:50%; transform:translateX(-50%);
             bottom:-100px; opacity:0; transition: bottom .5s ease, opacity .5s ease`;
        popup.innerHTML = `
            <span style="font-family:sans-serif">
                Fonts switched to
                <span style="font-family:var(--head)">${currentHeadSanitized}</span>
                and
                <span style="font-family:var(--text)">${currentTextSanitized}</span>
            </span>`;
        return popup;
    }

    /* show / hide routines */
    function showPopup(popup) {
        popup.classList.add('show');
        popup.style.bottom = '10%';
        popup.style.opacity = '1';
        popupHiding = false;
        clearTimeout(popupTimeout);
        popupTimeout = setTimeout(() => hidePopup(popup), 3000);
    }
    function hidePopup(popup) {
        popupHiding = true;
        popup.style.bottom = '-100px';
        popup.style.opacity = '0';
        clearTimeout(popupTimeout);
        popupTimeout = setTimeout(() => {
            if (popup.parentNode) popup.parentNode.removeChild(popup);
            popupHiding = false;
        }, 500);
    }

    /* ---------- bind to switch-fonts click ------------- */
    switchfont.addEventListener('click', function () {
        let popup;
        const holder = getPopupParent();
        const existing = holder.querySelector('.popup');

        /* if we already have a popup alive, just update it */
        if (existing) {
            popup = existing;
            clearTimeout(popupTimeout);
            popup.innerHTML = `
                <span style="font-family:sans-serif">
                    Fonts switched to
                    <span style="font-family:var(--head)">${currentHeadSanitized}</span>
                    and
                    <span style="font-family:var(--text)">${currentTextSanitized}</span>
                </span>`;
            if (popupHiding) showPopup(popup); /* bring it back */
            else showPopup(popup);
        } else {
            /* create fresh and append to *current* page */
            popup = createPopup();
            holder.appendChild(popup);
            showPopup(popup);
        }
    });

        if (!switchfont.classList.contains('no-default-style')) {
        const style = document.createElement('style');
        style.textContent = `
            .popup {
                position: fixed;
                bottom: -100px;
                left: 50%;
                transform: translateX(-50%);
                font-family: sans-serif;
                color: black;
                background: rgba(255, 255, 255, 0.3);
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.075);
                border-radius: 10px;
                padding: 10px 20px;
                z-index: 1000;
                opacity: 0;
                max-width: 70vw;
                text-align: center;
                font-size: clamp(0.5em, calc(0.85em + 0.5 * ((100vw - 320px) / 880)), 1.15em);
                transition: bottom 0.5s ease, opacity 0.5s ease;
            }

            .popup.show {
                bottom: 10%;
                opacity: 1;
            }

            #switch-fonts {
                position: absolute;
                top: 2rem;
                right: 2rem;
                border: none;
                font-family: var(--text);
                color: white;
                background-color: #444;
                padding: 15px 28px;
                text-align: center;
                font-size: 1.1rem;
                cursor: pointer;
                border-radius: 5px;
                z-index: 1000;
            }

            @media (max-width: 768px) {
                #switch-fonts {
                    padding: 10px 20px;
                    font-size: 16px;
                }
            }

            @media (max-width: 480px) {
                #switch-fonts {
                    padding: 8px 16px;
                    font-size: 14px;
                }
            }
        `;
        document.head.appendChild(style);
    } else {
        console.log("No default style applied to switch fonts button.");
                const style = document.createElement('style');
        style.textContent = `
            .popup {
                position: fixed;
                bottom: -100px;
                left: 50%;
                transform: translateX(-50%);
                font-family: sans-serif;
                color: black;
                background: rgba(255, 255, 255, 0.3);
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.075);
                border-radius: 10px;
                padding: 10px 20px;
                z-index: 1000;
                opacity: 0;
                max-width: 70vw;
                text-align: center;
                font-size: clamp(0.5em, calc(0.85em + 0.5 * ((100vw - 320px) / 880)), 1.15em);
                transition: bottom 0.5s ease, opacity 0.5s ease;
            }

            .popup.show {
                bottom: 10%;
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
})();