function parseMarkdown(text) {
    // escaped chars
    text = text.replace(/\\([*`])/g, '&#$1;');
    
    text = text.replace(/\*\*([^*]*(?:\*(?!\*)[^*]*)*)\*\*/g, '<span class="md-bold">$1</span>');
    text = text.replace(/\*([^*]*(?:\*(?!\*)[^*]*)*)\*/g, '<span class="md-italic">$1</span>');
    text = text.replace(/`([^`]*)`/g, '<span class="md-code">$1</span>');
    
    // restore escapement
    text = text.replace(/&#([*`]);/g, '$1');
    
    return text;
}


document.addEventListener('DOMContentLoaded', (event) => {
    const repos = [
        '71cj34/CompressExp',
        '71cj34/MergekitHelper',
        '71cj34/71cj34.github.io'
    ];

    const projectsContent = document.getElementById('projectsContent');
    const replaceButton = document.getElementById('replaceButton');
    let isContentReplaced = false;
    const originalContent = projectsContent.innerHTML;

    const newContent = `
        <p style="font-weight: bold">Exllama</p>
        <p>Some sort of quantization tool for Exllama. Had a quick gander at the docs. <br><br> 2025 update: ExLlamav2 working on my device, have made prototype for personal use.</p>
        <br>
        <img src="/linev3.png" style="display: block; margin-left: auto; margin-right: auto;">
        <br>
        <p style="font-weight: bold">MTransformer</p>
        <p>Windows app to convert file formats. Will be made as a 'capstone' to my C++ self-education.</p>
        <br><br><br><br><br><br>
        <p style="font-style: italic; color: grey; font-size: 80%"> Maybe someday.</p>
    `;

    repos.forEach((repo, index) => {
        const commitMessageElement = document.getElementById(`commit-message-${index + 1}`);
        const commitDateElement = document.getElementById(`commit-date-${index + 1}`);
        if (commitMessageElement && commitDateElement) {
            fetch(`https://api.github.com/repos/${repo}/commits`)
                .then(response => response.json())
                .then(data => {
                    const lastCommitMessage = data[0]?.commit?.message || "No commit message found";
                    const lastCommitLink = data[0]?.html_url || "https://http.cat/images/404.jpg";
                    const lastCommitDate = data[0]?.commit?.author?.date || data[0]?.commit?.committer?.date || "No commit date found";
                    let mdCommitMessage = parseMarkdown(lastCommitMessage);
                    console.log(`Data received for message #${index + 1}: ${mdCommitMessage}`)
                    commitMessageElement.innerHTML = mdCommitMessage;
                    commitMessageElement.setAttribute('href', lastCommitLink)
                    commitDateElement.innerText = new Date(lastCommitDate).toLocaleDateString(); // Formats the date to a more readable form
                })
                .catch(error => {
                    if (commitMessageElement) {
                        commitMessageElement.innerText = "Error: Could not fetch commit info.";
                    }
                    if (commitDateElement) {
                        commitDateElement.innerText = "Error: Could not fetch commit info.";
                    }
                });
        } else {
            console.warn(`Element with ID "commit-message-${index + 1}" or "commit-date-${index + 1}" not found.`);
        }
    });
    
    const icon = document.getElementById('modeselection');
    const body = document.querySelector('body');

    icon.addEventListener('click', () => {
        const codeblocks = document.getElementsByClassName('md-code');
        if (body.classList.contains("dark-mode")) {
            for (let i = 0; i < codeblocks.length; i++) {
                console.log(`Editing codeblock ${i+1}`);
                codeblocks[i].style.backgroundColor = "rgba(255, 255, 255, 0.18)";
                codeblocks[i].style.border = "1px solid rgba(255, 255, 255, 0.5)";
            }
        } else {
            for (let i = 0; i < codeblocks.length; i++) {
                console.log(`Editing codeblock ${i+1}`);
                codeblocks[i].style.backgroundColor = "rgba(0, 0, 0, 0.03)";
                codeblocks[i].style.border = "1px solid rgba(0, 0, 0, 0.15)";
            }
        };
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
});
