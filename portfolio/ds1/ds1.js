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
        document.title = "II. Narrative"
    }
});

modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.closest('.modal-content')) {
        closeModal();
        document.title = "II. Narrative"
    }
});

// PHASE 2
const swap1 = document.getElementById('img-swap-1');
const cap1 = document.getElementById('img-swap-1-c');
swap1.addEventListener('click', function() {
    if (swap1.src.includes('fig5-1.jpeg')) {
        swap1.src = "../../img/fig5-2.jpeg";
        cap1.innerHTML = "<span class='bold'>Fig. 5: </span> The finished product, extended mode. Note additions from initial drafting, like foam rails to prevent luggage damage."

    } else {
        swap1.src = "../../img/fig5-1.jpeg";
        cap1.innerHTML = "<span class='bold'>Fig. 5: </span> The finished product, retracted mode. Note additions from initial drafting, like foam rails to prevent luggage damage."
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        if (event.target.closest('.toggleButton')) {
            const toggleButton = event.target.closest('.toggleButton');
            const dropdownContent = toggleButton.nextElementSibling;
            const dropdownArrow = toggleButton.querySelector('.arrow');

            if (dropdownContent.classList.contains('expanded')) {
                // Collapse the dropdown
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px'; // Set to current height
                setTimeout(() => {
                    dropdownContent.style.maxHeight = '0'; // Animate to 0
                }, 100); // Small delay to allow the browser to register the initial height
                dropdownArrow.classList.remove('rotated');
                dropdownContent.classList.remove('expanded');
            } else {
                // Expand the dropdown
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px'; // Set to actual height
                dropdownArrow.classList.add('rotated');
                dropdownContent.classList.add('expanded');
            }
        }
    });

    // Add event listener to the collapse dropdowns button
    const collapseDropdownsButton = document.getElementById('collapse-dropdowns');
    collapseDropdownsButton.addEventListener('click', function() {
        // Select all toggle buttons
        const toggleButtons = document.querySelectorAll('.toggleButton');
        toggleButtons.forEach(toggleButton => {
            const dropdownContent = toggleButton.nextElementSibling;
            const dropdownArrow = toggleButton.querySelector('.arrow');

            if (dropdownContent.classList.contains('expanded')) {
                // Collapse the dropdown
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px'; // Set to current height
                setTimeout(() => {
                    dropdownContent.style.maxHeight = '0'; // Animate to 0
                }, 100); // Small delay to allow the browser to register the initial height
                dropdownArrow.classList.remove('rotated');
                dropdownContent.classList.remove('expanded');
            }
        });
    });
});

// PHASE 3
const p3Toggle = document.getElementById('p3-toggle');

document.getElementById('p3-toggle').addEventListener('click', function() {
    document.body.classList.add('faded');
    
    setTimeout(function() {
        window.location.href = '/portfolio';
    }, 1500);
});
