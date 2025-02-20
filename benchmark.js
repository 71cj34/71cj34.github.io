// TODO: refactor for cleanliness

document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('scoreTable');
    const headers = table.querySelectorAll('th');
    const tableBody = table.querySelector('tbody');
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    const sortIcon = document.getElementById('sortIcon');

    const directions = Array.from(headers).map(() => '');

    const transform = (index, content) => {
        const type = headers[index].getAttribute('data-type');
        switch (type) {
            case 'number':
                return parseFloat(content);
            default:
                return content;
        }
    };

    const sortColumn = (index) => {
        const direction = directions[index] || 'asc';
        const multiplier = direction === 'asc' ? 1 : -1;

        const newRows = rows.slice().sort((rowA, rowB) => {
            const cellA = rowA.querySelectorAll('td')[index].innerHTML;
            const cellB = rowB.querySelectorAll('td')[index].innerHTML;

            const a = transform(index, cellA);
            const b = transform(index, cellB);

            switch (true) {
                case a > b: return 1 * multiplier;
                case a < b: return -1 * multiplier;
                case a === b: return 0;
            }
        });

        [].forEach.call(rows, row => row.parentNode.removeChild(row));

        newRows.forEach(newRow => tableBody.appendChild(newRow));

        directions[index] = direction === 'asc' ? 'desc' : 'asc';

        // Update the sort icon
        if (direction === 'asc') {
            sortIcon.textContent = '↑';
        } else {
            sortIcon.textContent = '↓';
        }
    };

    headers.forEach((header, index) => {
        header.addEventListener('click', () => {
            sortColumn(index);
        });
    });

    // collapsible
    const coll = document.querySelector('.collapsible');
    const content = coll.nextElementSibling;
    coll.addEventListener('click', () => {
        coll.classList.toggle('active');
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });

    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    const toggleLatexButton = content.querySelector('.toggle-latex');
    const latexContent = content.querySelector('.latex-content');
    toggleLatexButton.addEventListener('click', () => {
        if (isMobile()) {
            window.location.href = 'https://jasoncheng.me/img/latex.png';
        } else {
            latexContent.classList.toggle('visible');
            if (latexContent.classList.contains('visible')) {
                content.classList.add('expanded');
            } else {
                content.classList.remove('expanded');
            }
        }
    });
});
