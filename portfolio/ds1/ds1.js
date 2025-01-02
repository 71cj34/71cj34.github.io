// PHASE 1
const modal = document.getElementById('modal');

function closeModal() {
    modal.classList.add('hidden');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
}

document.addEventListener('keydown', (event) => {
    if (event.key) {
        closeModal();
    }
});

modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.closest('.modal-content')) {
        closeModal();
    }
});

// PHASE 2
document.title = "II. Narrative"

// OTHER STUFF
document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        if (event.target.closest('.toggleButton')) {
            const toggleButton = event.target.closest('.toggleButton');
            const dropdownContent = toggleButton.nextElementSibling;
            const dropdownArrow = toggleButton.querySelector('.arrow');

            if (dropdownContent.classList.contains('expanded')) {
                dropdownContent.classList.remove('expanded');
                dropdownArrow.classList.remove('rotated');
            } else {
                dropdownContent.classList.add('expanded');
                dropdownArrow.classList.add('rotated');
            }
        }
    });
});
