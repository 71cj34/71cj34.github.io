document.addEventListener('DOMContentLoaded', (event) => {
    const repos = [
        '71cj34/MergekitHelper',
        '71cj34/CompressExp',

        // '71cj34/REPO',
        // '71cj34/REPO',
        // '71cj34/REPO'
    ];

    // Assign icon variable inside the 'DOMContentLoaded' event listener


    const projectsContent = document.getElementById('projectsContent');
    const replaceButton = document.getElementById('replaceButton');

    let isContentReplaced = false;

    const originalContent = projectsContent.innerHTML;

    const newContent = `
        <p style="font-weight: bold">Exllama</p>
        <p>Some sort of quantization tool for Exllama. Had a quick gander at the docs. <br>Doesn't look all that bad.</p>
        <br>
        <img src="/linev3.png" style="display: block; margin-left: auto; margin-right: auto;">
        <br>
        <p style="font-weight: bold">MTransformer</p>
        <p>Windows app to convert file formats. I need to look into C++.</p>
        <br><br><br><br><br><br>
        <p style="font-style: italic; color: grey; font-size: 80%"> Maybe someday.</p>
    `;

    // Fetch last commit message for each repo
    repos.forEach((repo, index) => {
        const commitMessageElement = document.getElementById(`commit-message-${index + 1}`);
        if (commitMessageElement) { // Check if element is not null before proceeding
            fetch(`https://api.github.com/repos/${repo}/commits`)
                .then(response => response.json())
                .then(data => {
                    const lastCommitMessage = data[0]?.commit?.message || "No commit message found";
                    commitMessageElement.innerText = lastCommitMessage;
                })
                .catch(error => {
                    // Ensure the element is not null before trying to modify it
                    if (commitMessageElement) {
                        commitMessageElement.innerText = "Error: Could not fetch commit info.";
                    }
                });
        } else {
            console.warn(`Element with ID "commit-message-${index + 1}" not found.`);
        }
    });
    
    // Replace content when replaceButton is clicked.
    replaceButton.addEventListener('click', () => {
        if (!isContentReplaced) {
            projectsContent.innerHTML = newContent;
            replaceButton.textContent = 'Or, go back to my projects.';
        } else {
            projectsContent.innerHTML = originalContent;
            replaceButton.textContent = 'Or, see my ideas (not-quite-projects).';
        }
        isContentReplaced = !isContentReplaced;
    });

    // DARK MODE STUFF

    let isDarkMode = false;
    const icon = document.getElementById('modeselection');
    const body = document.querySelector('body');
    const text = document.querySelectorAll('p:not(.highlight-inline):not(.hidden), span:not(.highlight-inline):not(.hidden)');
    const highlightInline = document.querySelectorAll('.highlight-inline');
    const hidden = document.querySelectorAll('.hidden');
    const blackicon = document.querySelectorAll('.icon');

    // Dark mode toggle
    icon.addEventListener('click', () => {
        if (!isDarkMode) {
            body.style.backgroundColor = 'black';
            hidden.forEach(element => {
                element.classList.add('dark-mode');
            });
            text.forEach(element => {
                element.style.color = 'white';
            });
            highlightInline.forEach(element => {
                element.classList.add('dark-mode');
            });
            blackicon.forEach(element => {
                element.classList.add('dark-mode');
            });
            icon.textContent = 'Light Mode.';
        } else {
            hidden.forEach(element => {
                element.classList.remove('dark-mode');
            });
            body.style.backgroundColor = 'white';
            text.forEach(element => {
                element.style.color = 'black';
            });
            highlightInline.forEach(element => {
                element.classList.remove('dark-mode');
            });
            blackicon.forEach(element => {
                element.classList.remove('dark-mode');
            });
            icon.textContent = 'Dark Mode.';
        }
        isDarkMode = !isDarkMode;
    });

});
