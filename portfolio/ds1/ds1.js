// PHASE 1

const modal = document.getElementById('modal');

function closeModal() {
    modal.classList.add('hidden');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500); // Wait for the fade-out transition to complete
}

document.addEventListener('keydown', (event) => {
    if (event.key) {
        closeModal();
    }
});

modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target === modal-content) {
        closeModal();
    }
});

// PHASE 2
document.title = "II. Narrative"





// OTHER STUFF

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const dropdownContent = document.getElementById('dropdownContent');

  toggleButton.addEventListener('click', function () {
      dropdownContent.classList.toggle('expanded');
  });
});
