function copyHeadingId(element) {
    const heading = element.previousElementSibling;
    const headingId = heading.id;
    const url = window.location;
    
    navigator.clipboard.writeText(`${url}#${headingId}`)
        .then(() => {
            // Optional: Show a tooltip or change icon temporarily
            const icon = element.querySelector('i');
            icon.classList.remove('fa-link');
            icon.classList.add('fa-check');
            
            setTimeout(() => {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-link');
            }, 1000);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

const style = document.createElement('style');
style.textContent = `
.heading-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.copy-link {
    color: #555;
    cursor: pointer;
    font-size: 0.8em;
    transition: color 0.2s;
    opacity: 0;
}

.heading-container:hover .copy-link {
    opacity: 1;
}

.copy-link:hover {
    color: #222;
}
`;
document.head.appendChild(style);