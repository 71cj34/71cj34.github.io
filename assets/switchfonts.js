const switchfont = document.getElementById('switch-fonts');
const textfontlist = [
    "'Input Serif', 'Courier New', monospace",
    "'Redaction-10', 'serif'",
    "'Syne', sans-serif",
    "'Helvetica', 'sans-serif'",
    "'GeistMono', 'monospace'",
    "'Average Sans', 'sans-serif'",
    "'IMFellEnglish', 'serif'",
    "'LineFont'"
]
const headfontlist = [
    "'Inconsolata', 'Courier', 'monospace'",
    "'HelveticaNeue', 'sans-serif'",
    "'Inter', 'Arial', 'sans-serif'",
    "'HelveticaNeue', 'sans-serif'",
    "'Redaction-50', serif",
    "'Rufina', 'serif'",
    "'IMFellEnglishSC', 'cursive'",
    "'LibreBarcode'"
]

let currentIndex = 0;

switchfont.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % textfontlist.length;
    document.documentElement.style.setProperty('--text', textfontlist[currentIndex]);
    document.documentElement.style.setProperty('--head', headfontlist[currentIndex]);
    
    const getFirstFont = (fontString) => fontString.split(',')[0].trim().replace(/'/g, '');
    const textFont = getFirstFont(textfontlist[currentIndex]);
    const headFont = getFirstFont(headfontlist[currentIndex]);
    console.log(`head: ${headFont}`);
    console.log(`text: ${textFont}`);
});