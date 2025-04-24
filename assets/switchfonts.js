const switchfont = document.getElementById('switch-fonts');
const textfontlist = [
    "'Input Serif', 'Courier New', monospace",
    "'Redaction-10', 'serif'",
    "'Syne', sans-serif",
    "'Helvetica', 'sans-serif'",
    "'GeistMono', 'monospace'",
    "'Average Sans', 'sans-serif'",
    "'Geist', sans-serif",
    "'IMFellEnglish', 'serif'",
    "'LineFont'",
]
const headfontlist = [
    "'Inconsolata', 'Courier', 'monospace'",
    "'HelveticaNeue', 'sans-serif'",
    "'Inter', 'Arial', 'sans-serif'",
    "'HelveticaNeue', 'sans-serif'",
    "'Redaction-35', serif",
    "'Rufina', 'serif'",
    "'IBMPlexMono', monospace",
    "'IMFellEnglishSC', 'cursive'",
    "'LibreBarcode'",
]

let currentIndex = 0;

switchfont.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % textfontlist.length;
    document.documentElement.style.setProperty('--text', textfontlist[currentIndex]);
    document.documentElement.style.setProperty('--head', headfontlist[currentIndex]);
    
    // const getFirstFont = (fontString) => fontString.split(',')[0].trim().replace(/'/g, '');
    // const textFont = getFirstFont(textfontlist[currentIndex]);
    // const headFont = getFirstFont(headfontlist[currentIndex]);
    currentText = textfontlist[currentIndex]
    currentHead = headfontlist[currentIndex]
    console.log(`head: ${currentText}`);
    console.log(`text: ${currentHead}`);
});

/////////////////////


(function() { // Wrap in an IIFE to avoid polluting the global scope

  function createPopup() {
      const popup = document.createElement('div');
      popup.className = 'popup';
      popup.style.opacity = '0';  // Initially hidden
  
      popup.innerHTML = `<span>Fonts switched to ${currentHead} and ${currentText}</span>`
      // const textNode = document.createTextNode(`Fonts switched to ${headfont} and ${textfont}`);
      // popup.appendChild(textNode);
  
  
      document.body.appendChild(popup);
      return popup;
    }
  
  
  
    function showPopup(popup) {
      popup.classList.add('show');
      popup.style.opacity = '1';  // Ensure visibility when adding the class
        setTimeout(function() {
            hidePopup(popup);
        }, 3000); // Stay visible for 3 seconds (3000ms)
    }
  
      function hidePopup(popup) {
          popup.classList.remove('show');
          popup.style.opacity = '0';  // Ensure hiding happens
          setTimeout(() => {
              popup.remove();
          }, 500)
      }
  
  
    // Add event listeners to buttons (or other elements) with a specific class
    switchfont.addEventListener('click', function(event) {
        console.log("asd")
        const popup = createPopup();
        showPopup(popup);
    });
  
    // Add CSS to the head
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
      transition: bottom 0.5s ease, opacity 0.5s ease;
      z-index: 1000;
      opacity: 0;
    }
  
    .popup.show {
      bottom: 10%;
      opacity: 1;
    }
    `;
    document.head.appendChild(style);
  
  })();
  
  