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
(function () {
    let popupTimeout;
    let popupHiding = false;

    function createPopup() {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.style.opacity = '0';

        popup.innerHTML = `
            <span style="font-family: sans-serif">
                Fonts switched to 
                <span style="font-family: var(--head)">${currentHeadSanitized}</span> 
                and 
                <span style="font-family: var(--text)">${currentTextSanitized}</span>
            </span>`;

        document.body.appendChild(popup);
        return popup;
    }

    function showPopup(popup) {
        if (!popup) return;

        popup.classList.add('show');
        popup.style.opacity = '1';
        popup.style.bottom = '10%';
        popupHiding = false;

        clearTimeout(popupTimeout);
        popupTimeout = setTimeout(() => hidePopup(popup), 3000);
    }

    function hidePopup(popup) {
        if (!popup) return;

        popupHiding = true;
        popup.classList.remove('show');
        popup.style.opacity = '0';
        popup.style.bottom = '-100px';
        clearTimeout(popupTimeout);

        popupTimeout = setTimeout(() => {
            if (document.body.contains(popup)) popup.remove();
            popupHiding = false;
        }, 500);
    }

    switchfont.addEventListener('click', function (event) {
        let popup;
        const existingModals = document.getElementsByClassName("popup");

        if (existingModals.length === 0) {
            popup = createPopup();
            showPopup(popup);
        } else {
            popup = existingModals[0];
            clearTimeout(popupTimeout);

            if (popupHiding) {
                popup.style.transition = 'bottom 0.25s ease, opacity 0.25s ease';
                popup.style.bottom = '10%';
                popup.style.opacity = '1';
                popup.classList.add('show');
                popupTimeout = setTimeout(() => hidePopup(popup), 3000);
                popup.style.transition = 'bottom 0.5s ease, opacity 0.5s ease';
            } else {
                popup.innerHTML = `
                    <span style="font-family: sans-serif">
                        Fonts switched to 
                        <span style="font-family: var(--head)">${currentHeadSanitized}</span> 
                        and 
                        <span style="font-family: var(--text)">${currentTextSanitized}</span>
                    </span>`;

                showPopup(popup);
            }
        }
    });

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

    if (!switchfont.classList.contains('no-default-style')) {
        document.head.appendChild(style);
    } else {
        console.log("No default style applied to switch fonts button.");
    }
})();
