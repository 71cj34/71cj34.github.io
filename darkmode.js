// refs: 1, 2, 4, 5, 6

const icon = document.getElementById('modeselection');
const body = document.querySelector('body');

icon.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        icon.textContent = 'Light mode.';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        icon.textContent = 'Dark mode.';
    }
});