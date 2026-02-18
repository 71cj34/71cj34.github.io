const WORKER_URL = "https://llm-progress.jasonic-c-7134.workers.dev/";
let progressInterval = null;

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
        const startTime = new Date(current.start).getTime();
        const durationMs = parseFloat(current['exp-length']) * 60 * 60 * 1000;
        const endTime = startTime + durationMs;

      heroContent.innerHTML = `
            <div><p>Current Project:</p></div>
            <h1><strong>${current.name}</strong></h1>
            <p class="type">${current.type}</p>
            <p>${current.description}</p>
            <div id="progress-container">
                <div id="progress-bar-wrapper">
                    <div id="progress-bar-fill"></div>
                </div>
                <div id="progress-text">
                    <span id="time-elapsed">0:00:00 elapsed</span>
                    <span id="time-remaining">~0:00:00 remaining</span>
                </div>
            </div>
        `;

        // Start live progress updates
        if (progressInterval) clearInterval(progressInterval);
        updateProgressBar(current, startTime, durationMs, endTime);
        progressInterval = setInterval(() => {
            updateProgressBar(current, startTime, durationMs, endTime);
        }, 1000);
    } else {
        if (progressInterval) clearInterval(progressInterval);
        heroContent.innerHTML = `<h1>No Active Project</h1><p>Scroll down to see history</p>`;
    }

    // Filter out current project from history
    const historyProjects = current ? sorted.filter(proj => proj !== current) : sorted;

    if (historyProjects.length === 0) {
        listContent.innerHTML = `<div class="empty-state">No projects found in history.</div>`;
    } else {
        const disclaimer = `\n\n<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <h3 style="margin-top: 3em;">
        All projects past this point can be found on my <a href="https://huggingface.co/tssst/collections">HuggingFace</a>.
        </h3>\n
        <a href="/#" style=" margin-top: 6em; filter: brightness(50%); padding: 12px 24px; font-size: 1.2em" class="other-buttons">Return to Home.</a></div>`;
        listContent.innerHTML = historyProjects.map(proj => {
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

function updateProgressBar(project, startTime, durationMs, endTime) {
    const now = new Date().getTime();
    const elapsed = now - startTime;
    const remaining = Math.max(0, endTime - now);

    let progress = (elapsed / durationMs) * 100;
    progress = Math.min(100, Math.max(0, progress));

    const progressBar = document.getElementById("progress-bar-fill");
    if (progressBar) {
        progressBar.style.width = `${progress}%`;

        progressBar.classList.remove("warning", "danger");
        if (progress > 90) {
            progressBar.classList.add("danger");
        } else if (progress > 70) {
            progressBar.classList.add("warning");
        }
    }

    const elapsedHours = Math.floor(elapsed / (1000 * 60 * 60));
    const elapsedMinutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const elapsedSeconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    const remainingHours = Math.floor(remaining / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const remainingSeconds = Math.floor((remaining % (1000 * 60)) / 1000);

    const elapsedDisplay = document.getElementById("time-elapsed");
    const remainingDisplay = document.getElementById("time-remaining");

    if (elapsedDisplay) {
        elapsedDisplay.textContent = `${elapsedHours}:${String(elapsedMinutes).padStart(2, '0')}:${String(elapsedSeconds).padStart(2, '0')} elapsed`;
    }

    if (remainingDisplay) {
        if (remaining <= 0) {
            remainingDisplay.textContent = "Completed!";
            remainingDisplay.style.color = "#28a745";
        } else {
            remainingDisplay.textContent = `~${remainingHours}:${String(remainingMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')} remaining`;
            remainingDisplay.style.color = "#007bff";
        }
    }
}

fetchProjects();
