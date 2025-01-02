// Get the modal element
const modal = document.getElementById('modal');

// Function to close the modal
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


document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const dropdownContent = document.getElementById('dropdownContent');

  toggleButton.addEventListener('click', function () {
      dropdownContent.classList.toggle('expanded');
  });
});
