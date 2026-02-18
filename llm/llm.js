const WORKER_URL = "https://llm-progress.jasonic-c-7134.workers.dev/";

async function fetchProjects() {
    try {
        const response = await fetch(WORKER_URL);
        if (!response.ok) throw new Error("Failed to fetch");
        
        const history = await response.json();
        renderProjects(history);
    } catch (err) {
        console.error(err);
        document.getElementById("hero-content").innerHTML = "<h1>Error loading data</h1>";
    }
}

function renderProjects(projects) {
    const heroContent = document.getElementById("hero-content");
    const listContent = document.getElementById("list-content");
    const now = new Date().getTime();

    const sorted = projects.sort((a, b) =>  new Date(b.start) - new Date(a.start));

    let current = null;

    sorted.forEach(proj => {
        const startTime = new Date(proj.start).getTime();
        const durationMs = parseFloat(proj['exp-length']) * 60 * 60 * 1000;
        const endTime = startTime + durationMs;

        if (now >= startTime && now <= endTime) {
            current = proj;
        }
    });

    if (current) {
        heroContent.innerHTML = `
            <h1>${current.name}</h1>
            <p class="type">${current.type}</p>
            <p>${current.description}</p>
            <small>Current Project</small>
        `;
    } else {
        heroContent.innerHTML = `<h1>No Active Project</h1><p>Scroll down to see history</p>`;
    }

    if (sorted.length === 0) {
        listContent.innerHTML = `<div class="empty-state">No projects found in history.</div>`;
    } else {
        const disclaimer = `\n\n<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <h3 style="margin-top: 3em;">
        All projects past this point can be found on my <a href="https://huggingface.co/tssst/collections">HuggingFace</a>.
        </h3>\n
        <a href="/#" style=" margin-top: 6em; filter: brightness(50%); padding: 12px 24px; font-size: 1.2em" class="other-buttons">Return to Home.</a></div>`;
        listContent.innerHTML = sorted.map(proj => {
            const failClass = proj.failed === "1" ? 'fail' : '';

            return  `
                <div class="project-card ${failClass}">
                    <h3>${proj.name}      <span style="display: ${parseInt(proj.failed) == 1 ? "inline" : "none"}"><em><strong>(Failed)</strong></em></span></h3>
                    <p><strong>Type:</strong> ${proj.type}</p>
                    <p>${proj.description}</p>
                    <small>${new Date(proj.start).toLocaleString()} (${proj['exp-length']} hrs)</small>
                </div>
            `;
        }).join('') + disclaimer;

    }
}

fetchProjects();