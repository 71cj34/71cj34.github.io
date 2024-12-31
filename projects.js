document.addEventListener('DOMContentLoaded', (event) => {
    const repos = [
        '71cj34/MergekitHelper',
        '71cj34/CompressExp',
    ];

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
        if (commitMessageElement) {
            fetch(`https://api.github.com/repos/${repo}/commits`)
                .then(response => response.json())
                .then(data => {
                    const lastCommitMessage = data[0]?.commit?.message || "No commit message found";
                    commitMessageElement.innerText = lastCommitMessage;
                })
                .catch(error => {
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
});
