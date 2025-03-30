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
    const alt_repos = [
        '71cj34/rsz',
        'Prof-Starsky/solarsense'
    ];

    const projectsContent = document.getElementById('projectsContent');
    let isContentReplaced = false;
    const originalContent = projectsContent.innerHTML;

    const newContent = `
        <p>
        <a href="https://github.com/71cj34/rsz/">rsz</a>
        </p>
        <p>
        Fast yet simple Powershell utility to bulk resize images. 
        <br>
        Made for personal use but expanded for general usability.
        <br>
        <a href="https://github.com/71cj34/rsz">Download here.</a>
        </p>
        <div style="font-size: 90%">
        <p class="commit-caption">Last commit: </p>
        <a id="commit-message-alt-1" href="/">Loading last commit...</a>
        <div id="commit-date-alt-1">Loading last commit date...</div>
        </div>
        <br>

        <img src="/linev3.png" style="display: block; margin-left: auto; margin-right: auto;">

        <p>
        <a href="https://github.com/Prof-Starsky/solarsense/">SolarSense</a>
        </p>
        <p>
        Made for the DeltaHacks XI hackathon.
        <br>
        A TypeScript app using Vite and the Cohere, OpenMeteo, and Google Maps API.
        <br>
        Upon inputting any location, it tells you how much solar panels cost in that area.
        <br>
        <a href="https://solar-sense.co">Try it here.</a>
        </p>
        <div style="font-size: 90%">
        <p class="commit-caption">Last commit: </p>
        <a id="commit-message-alt-2" href="/">Loading last commit...</a>
        <div id="commit-date-alt-2">Loading last commit date...</div>   
        </div
        <br>
    `;

    
    // Replace content when replaceButton is clicked.
    replaceButton.addEventListener('click', () => {
        if (!isContentReplaced) {
            projectsContent.innerHTML = newContent;
            replaceButton.textContent = 'Or, go back to my main projects.';
        } else {
            projectsContent.innerHTML = originalContent;
            replaceButton.textContent = 'See my less glamorous projects.';
        }
        isContentReplaced = !isContentReplaced;
    });

    replaceButton.addEventListener('click', (event) => {
        if(isContentReplaced === true) {
            console.log("detected replacebutton click")
            alt_repos.forEach((repo, index) => {
                const commitMessageElement = document.getElementById(`commit-message-alt-${index + 1}`);
                const commitDateElement = document.getElementById(`commit-date-alt-${index + 1}`);
                
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
                } else { console.warn(`Element with ID "commit-message-alt-${index + 1}" or "commit-date-alt-${index + 1}" not found.`); };
            });
        }
    });

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
});
