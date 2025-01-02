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

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const dropdownContent = document.getElementById('dropdownContent');
  const dropdownAngle = document.getElementById('dropdownArrow');

  toggleButton.addEventListener('click', function () {
      dropdownContent.classList.toggle('expanded');
      var icon = document.getElementById('dropdownArrow');
      icon.classList.toggle('rotated');
  });
});
