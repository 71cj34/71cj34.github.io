import { language, repo, dupletLines, selectedFile } from './get-github-string.js';

function youWin() {
    let style = document.createElement('style');
    style.textContent = `
    * {
  animation: pulseGreen 1.5s ease-out;
  animation-iteration-count: 1;
}

@keyframes pulseGreen {
  0% {
    color: initial; /* Or your original background color */
    box-shadow: 0 0 0 0 rgba(0, 255, 0, 0); /* No glow initially */
  }
  50% {
    color: rgba(0, 255, 0, 0.5); /* Semi-transparent green */
    box-shadow: 0 0 0 10px rgba(0, 255, 0, 0); /* Expanding glow */
  }
  100% {
    color: initial; /* Back to original */
    box-shadow: 0 0 0 0 rgba(0, 255, 0, 0); /* No glow */
  }
}


/* Optional adjustments */
/* Adjust the radial size and fade out */
/* .pulseGlow {
  animation: pulseGlow 1.5s ease-out infinite;
}

@keyframes pulseGlow {
  0% {
      box-shadow: 0 0 0 0 rgba(0, 255, 0, 0.9);
  }
  70% {
      box-shadow: 0 0 0 10px rgba(0, 255, 0, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(0, 255, 0, 0);
  }
} */
    `
    document.head.appendChild(style);
}

function youLose() {
    let style = document.createElement('style');
    style.textContent = `
    * {
  animation: pulseRed 1.5s ease-out;
  animation-iteration-count: 1;
}

@keyframes pulseRed {
  0% {
    color: initial; /* Or your original background color */
    box-shadow: 0 0 0 0 rgba(0, 255, 0, 0); /* No glow initially */
  }
  50% {
    color: rgba(255, 0, 0, 0.5); /* Semi-transparent green */
    box-shadow: 0 0 0 10px rgba(0, 255, 0, 0); /* Expanding glow */
  }
  100% {
    color: initial; /* Back to original */
    box-shadow: 0 0 0 0 rgba(0, 255, 0, 0); /* No glow */
  }
}
    `
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', () => {
document.getElementById('submit').addEventListener('click', () => {
    const ans = document.getElementById('programmingLanguages');
    console.log("here")
    if (language == ans.value) {
        youWin();
    } else {
        youLose();
    }

    let url = "";
    fetch('https://api.github.com/repos/' + repo.full_name)
  .then(response => response.json())
  .then(data => {
    const defaultBranch = data.default_branch;
    url = 'https://github.com/' + repo.full_name + '/tree/' + defaultBranch + '/' + selectedFile.path;
    console.log(url);
  });

    reveal = document.getElementById('reveal');
    reveal.innerHTML = `${language != ans.value ? "<span style='color: red'>You lose...</span>" : "<span style='color: green'>You win!</span>"}\n\n
    
    This snippet was <strong><code>${language}</strong></code> code from the repository <a href="${"https://github.com/" + repo.full_name}" target="_blank"><code>${repo.full_name}</code></a> 
    from lines ${dupletLines[1]} of file <a href="${url}" target="_blank"><code>${selectedFile.path.split("/")[1] ? selectedFile.path.split("/")[1] : selectedFile.path}</code></a>. 
    `
});
});