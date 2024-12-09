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

    // collapsibel
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

    // latex
    const toggleLatexButton = content.querySelector('.toggle-latex');
    const latexContent = content.querySelector('.latex-content');
    toggleLatexButton.addEventListener('click', () => {
        latexContent.classList.toggle('visible');
        if (latexContent.classList.contains('visible')) {
            content.classList.add('expanded');
        } else {
            content.classList.remove('expanded');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const latexContent = document.getElementById('latexContent');
    const toggleLatexButton = document.querySelector('.toggle-latex.collapsible');

    toggleLatexButton.addEventListener('click', function() {
        if (latexContent.classList.contains('visible')) {
            latexContent.classList.remove('visible');
        } else {
            latexContent.classList.add('visible');
            checkScreenSize();
        }
    });

    function checkScreenSize() {
        if (window.innerWidth <= 600 && latexContent.classList.contains('visible')) {
            latexContent.innerHTML = '<a href="http://jasoncheng.me/latex.png" target="_blank">See Question Image</a>';
        } else {
            latexContent.innerHTML = 
                '$\\text{Which of the following statements are always true for vectors in } \\mathbb{R}^3 \\text{?}$ <br><br>' +
                '$\\text{(i)  If } u \\cdot (v \\times w) = 4 \\text{ then } w \\cdot (u \\times v) = -4$<br>' +
                '$\\text{(ii) } (2u + v) \\times (u - 5v) = -11(u \\times v)$<br>' +
                '$\\text{(iii) If } u \\text{ is orthogonal to } v \\text{ and } w \\text{ then } u \\text{ is also orthogonal to } ||w||v + ||v||w$<br><br><br>' +
                '${\\color{gray} \\textit{Expected solution: (ii), (iii)}}$';
        }
    }

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize(); // Initial check
});