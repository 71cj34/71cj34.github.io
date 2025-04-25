const switchfont = document.getElementById('switch-fonts');
const textfontlist = [
    "'Input Serif', 'Courier New', monospace",
    "'Redaction-10', 'serif'",
    "'Syne', sans-serif",
    "'Helvetica', 'sans-serif'",
    "'Geist Mono', 'monospace'",
    "'Average Sans', 'sans-serif'",
    "'Geist', sans-serif",
    "'IM Fell English', 'serif'",
    "'Line Font'",
]
const headfontlist = [
    "'Inconsolata', 'Courier', 'monospace'",
    "'Helvetica Neue', 'sans-serif'",
    "'Inter', 'Arial', 'sans-serif'",
    "'Helvetica Neue', 'sans-serif'",
    "'Redaction-35', serif",
    "'Rufina', 'serif'",
    "'IBM Plex Mono', monospace",
    "'IM Fell English SC', 'cursive'",
    "'Libre Barcode'",
]

let currentIndex = 0;
let currentHead;
let currentText;
let currentHeadSanitized;
let currentTextSanitized;

switchfont.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % textfontlist.length;
    document.documentElement.style.setProperty('--text', textfontlist[currentIndex]);
    document.documentElement.style.setProperty('--head', headfontlist[currentIndex]);
    
    const getFirstFont = (fontString) => fontString.split(',')[0].trim().replace(/'/g, '');
    // const textFont = getFirstFont(textfontlist[currentIndex]);
    // const headFont = getFirstFont(headfontlist[currentIndex]);
    currentText = textfontlist[currentIndex]
    currentHead = headfontlist[currentIndex]
    currentTextSanitized = getFirstFont(currentText)
    currentHeadSanitized = getFirstFont(currentHead)
    console.log(`head: ${currentText}`);
    console.log(`text: ${currentHead}`);
});

/////////////////////


(function() { // Wrap in an iife

  let popupTimeout;
  let popupHiding = false;

  function createPopup() {
      const popup = document.createElement('div');
      popup.className = 'popup';
      popup.style.opacity = '0';
  
      popup.innerHTML = `<span style="font-family: sans-serif">Fonts switched to <span style="font-family: var(--head)">${currentHeadSanitized}</span> 
      and <span style="font-family: var(--text)">${currentTextSanitized}</span></span>`
  
  
      document.body.appendChild(popup);
      return popup;
    }
  
    function showPopup(popup) {
      popup.classList.add('show');
      popup.style.opacity = '1';
      popup.style.bottom = '10%'; // Ensure it's visible
      popupHiding = false; // Reset the hiding flag
      clearTimeout(popupTimeout); // Clear any existing timeouts

        popupTimeout = setTimeout(function() {
            hidePopup(popup);
        }, 3000);
    }
  
      function hidePopup(popup) {
          popupHiding = true; // Set the hiding flag
          popup.classList.remove('show');
          popup.style.opacity = '0';
          popup.style.bottom = '-100px'; // Move off-screen
          clearTimeout(popupTimeout); // Clear any existing timeouts

          popupTimeout = setTimeout(() => {
              if (document.body.contains(popup)) { //Check that the popup exists before trying to remove it
                popup.remove();
              }
              popupHiding = false;
          }, 500);
      }
  
  
    switchfont.addEventListener('click', function(event) {
        let popup;
        let existingModals = document.getElementsByClassName("popup");
        if (existingModals.length == 0) {
          popup = createPopup();
          showPopup(popup);
        } else {
          popup = existingModals[0];
          clearTimeout(popupTimeout); // Clear any existing timeouts
          if (popupHiding) {
            // Reverse the hiding animation
            popup.style.transition = 'bottom 0.25s ease, opacity 0.25s ease'; // Reduced time
            showPopup(popup);
            popup.style.transition = 'bottom 0.5s ease, opacity 0.5s ease'; //Reset transition
          } else {
            //Update the content if it already exists
            popup.innerHTML = `<span style="font-family: sans-serif">Fonts switched to <span style="font-family: var(--head)">${currentHeadSanitized}</span> 
            and <span style="font-family: var(--text)">${currentTextSanitized}</span></span>`
            showPopup(popup);
          }
        }
    });
  
    const style = document.createElement('style');
    style.textContent = `
    .popup {
      position: fixed;
      bottom: -100px; /* Start off-screen */
      left: 50%;
      transform: translateX(-50%);
      color: black;
      background: rgba(255, 255, 255, 0.3);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.075);
      border-radius: 10px;
      padding: 10px 20px;
      transition: bottom 3s ease, opacity 0.5s ease;
      z-index: 1000;
      opacity: 0;
    }
  
    .popup.show {
      bottom: 10%;
      opacity: 1;
    }
    
    #switch-fonts {
      position: fixed;
      top: 2rem;
      right: 2rem;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 1.15rem;
      cursor: pointer;
      border-radius: 5px;
      z-index: 1000;
    }
    `;
    document.head.appendChild(style);
  
  })();
