// Map some common languages to typical file extensions
const languageExtensions = {
   JavaScript: ['js', 'jsx', 'mjs', 'cjs', 'ts', 'typescript'],
  Python: ['py'],
  Ruby: ['rb'],
  Java: ['java'],
  Go: ['go'],
  C: ['c'],
  "C++": ['cpp', 'cc', 'cxx', 'hpp', 'hh', 'hxx'],
  PHP: ['php'],
  Shell: ['sh', 'bash'],
  ActionScript: ['as'],
  Assembly: ['i', 'asm'],
  Bash: ['sh', 'bash'],
  BASIC: ['bas'],
  Batch: ['bat', 'cmd'],
  Brainfuck: ['bf'],
  'C#': ['cs'],
  COBOL: ['cbl', 'cob'],
  CoffeeScript: ['coffee'],
  CSS: ['css'],
  D: ['d'],
  Dart: ['dart'],
  Docker: ['dockerfile', 'dockerignore'],
  Fortran: ['f90', 'f', 'for', 'f03', 'f08'],
  'G-Code': ['gcode', 'nc'],
  GraphQL: ['graphql', 'gql'],
  Groovy: ['groovy'],
  Haskell: ['hs'],
  HTML: ['html', 'htm'],
  Kotlin: ['kt', 'kts'],
  TeX: ['tex'],
  Lisp: ['lisp', 'lsp', 'cl'],
  Lua: ['lua'],
  Makefile: ['makefile', 'Makefile', 'mk'],
  Markdown: ['md', 'markdown'],
  MatLab: ['m'],
  Nix: ['nix'],
  'Objective-C': ['m'],
  OCaml: ['ml', 'mli'],
  Pascal: ['pas', 'pp'],
  Perl: ['pl', 'pm'],
  Powershell: ['ps1', 'psm1', 'psd1'],
  R: ['r'],
  Rust: ['rs'],
  Scala: ['scala'],
  Smalltalk: ['st'],
  SQL: ['sql'],
  Swift: ['swift'],
  'VB.net': ['vb'],
  Verilog: ['v', 'vh'],
  'Visual Basic': ['vb', 'vba'],
  WebAssembly: ['wasm'],
  Zig: ['zig'],
};


  // create the <select> on the fly
   function createSelect() {
  let select = document.getElementById('programmingLanguages');
  let initialOpt = document.createElement('option');
  initialOpt.value = "";
  initialOpt.innerHTML = "(Choose a Language)";
  select.appendChild(initialOpt);
  for (var i = 0; i<languages.length; i++){
    let opt = document.createElement('option');
    opt.value = languages.sort()[i];
    opt.innerHTML = languages.sort()[i];
    select.appendChild(opt);
 }
}

const output = document.getElementById('operating-table');
let fileSearchCount = 0;  // Counter for the file search message
let fileSearchMessageIndex = -1; // Track the index of our file search message


// i hate you i hate you i hate you i hate you i hate you es6
export const languages = Object.keys(languageExtensions);
export let language = "";
export let repo = "";
export let dupletLines = new Array();
export let selectedFile = null;
export async function getSnippet(lang) {
  try {
    language = lang
    console.log(`Searching repositories for language: ${language}...`);
    
    reveal = document.getElementById('reveal');
    reveal.style.display = 'none';

    output.innerHTML = "<span style='color: #fffbd6'> If this textbox freezes for more than 5 seconds, open your browser console and check for errors.</span>\n\nLoading code snippet...";
    output.innerText += "\nSearching repositories for language...";
    let repos = [];
    let attempts = 0;

    // Get some repos, try up to 5 pages randomly
    while (repos.length === 0 && attempts < 5) {
      const page = 1 + getRandomInt(5);
      try {
        repos = await searchRepos(language, page);
      } catch (e) {
        console.warn('Error fetching repos:', e.message);
      }
      attempts++;
    }

    if (repos.length === 0) {
      console.error('No repositories found.');
      return;
    }

    // Pick a random repo
    repo = repos[getRandomInt(repos.length)];
    console.log(`Selected repository: ${repo.full_name}`);

    const owner = repo.owner.login;
    const repoName = repo.name;

    // Breadth-first exploration of directories until we find a language file
    const dirQueue = [''];  // start from root directory

    while (dirQueue.length > 0 && selectedFile === null) {
      const currentPath = dirQueue.shift();
      let contents = [];

      try {
        contents = await fetchDirectoryContents(owner, repoName, currentPath);
      } catch (e) {
        console.warn(`Failed to fetch contents of ${currentPath}: ${e.message}`);
        continue;
      }

      // Check for language files in this directory
      const langFiles = filterFilesByLanguage(contents, language);
      fileSearchCount++; // Increment counter

    // Update / Add  "Finding matching language file in repository" message

        const fileSearchMessage = `\nFinding matching language file in repository (${fileSearchCount})...`;
        let currentText = output.innerText;

      if (fileSearchMessageIndex !== -1) {
        let errorLines = currentText.split('\n');
        errorLines[fileSearchMessageIndex] = `Finding matching language file in repository (${fileSearchCount})...`;
        output.innerText = errorLines.join('\n');
      } else {
          output.innerText += fileSearchMessage;
          fileSearchMessageIndex = output.innerText.split('\n').length - 1;
      }

      if (langFiles.length > 0) {
                fileSearchCount = 0;
                fileSearchMessageIndex = -1;
        selectedFile = langFiles[getRandomInt(langFiles.length)];
        break;
      }

      // If no language files, add subdirectories to queue
      const subDirs = filterDirectories(contents);
      for (const dir of subDirs) {
        dirQueue.push(dir.path);
      }
    }

    if (!selectedFile) {
                // Reset the file search count & message index
                fileSearchCount = 0;
                fileSearchMessageIndex = -1;

      output.innerHTML = `<span style='color: red'>'Error:', ${error.message}</span>`;
      console.error(`No ${language} source files found in the repository.`);
      return;
    }

    // go fetch
    output.innerText += "\nFetching file content...";
    const content = await fetchFileContent(selectedFile);

        fileSearchCount = 0;
        fileSearchMessageIndex = -1;
    output.innerHTML += "\nPicking <span style='color: #a24a4b'>10</span> consecutive lines...";
    dupletLines = pickConsecutiveLines(content, 10);
    let lines = dupletLines[0];
    if (lines.length === 0) {
      console.warn('Selected file is empty or has no lines.');
      return;
    }

        output.innerText += "\nDone!";
    if (output) output.innerText = lines.join('\n');


  } catch (error) {
                // Reset the file search count & message index
                fileSearchCount = 0;
                fileSearchMessageIndex = -1;
    console.error('Error:', error.message);
    output.innerHTML = `<span style='color: red'>'Error:', ${error.message}</span>`;
  }
}

 async function searchRepos(language, page = 1) {
    const params = new URLSearchParams({
      q: `language:${language}`,
      sort: 'stars',
      order: 'desc',
      per_page: '30',
      page: page.toString()
    });
    const url = `https://api.github.com/search/repositories?${params.toString()}`;
    const res = await fetch(url, {
      headers: {
        "Authorization": `Bearer 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`
      }
    });
    if (!res.ok) throw new Error(`Failed to search repos: ${res.status} ${res.statusText}`);
    const data = await res.json();
    return data.items;
  }

  async function fetchDirectoryContents(owner, repo, path = '') {
    let url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const res = await fetch(url, {
      headers: {
        "Authorization": "Bearer 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"
      }
    });
    if (!res.ok) throw new Error(`Failed to fetch contents: ${res.status} ${res.statusText}`);
    return await res.json();
  }

  function filterFilesByLanguage(files, language) {
    const exts = languageExtensions[language];
    if (!exts) return [];
    return files.filter(file => {
      if (file.type !== 'file') return false;
      const ext = file.name.split('.').pop().toLowerCase();
      return exts.includes(ext);
    });
  }

  // Filter directories from contents
  function filterDirectories(files) {
    return files.filter(file => file.type === 'dir');
  }

  // Fetch raw content of a file
  async function fetchFileContent(file) {
    if (!file.download_url) throw new Error('No download_url');
    const res = await fetch(file.download_url);
    if (!res.ok) throw new Error(`Failed to fetch file content: ${res.status} ${res.statusText}`);
    return await res.text();
  }

function maskItems(text, mask) {
    if (Array.isArray(text)) {
        text = text.join("ʥʥʥʥʥ");
    }

    if (!text || !mask || mask.length === 0) {
        return text; // Handle empty input gracefully
    }

    const escapedTerms = mask.map(term => term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));

    const regex = new RegExp(
      `(?<=^|[ \.\n])(?:${escapedTerms.join('|')})(?=$|[ \n])`,
      'gi'
    );


    const maskedText = text.replace(regex, (match) => {
        return '█'.repeat(match.length);
    });

    return maskedText.split("ʥʥʥʥʥ");
}

function normalizeIndentation(lines) {
  const indentLengths = lines
    .filter(line => line.trim().length > 0) // skip empty lines
    .map(line => {
      const match = line.match(/^(\s*)/);
      return match ? match[1].length : 0;
    });

  if (indentLengths.length === 0) {
    return lines;
  }

  // find min indent among all non-empty lines
  const minIndent = Math.min(...indentLengths);

  // hedge trimmin
  return lines.map(line => {
    if (line.trim().length === 0) {
      // empty line
      return line;
    }
    // Remove exactly minIndent characters from start
    // assuming indent is by characters (could be space or tab)
    return line.slice(minIndent);
  });
}

  // Pick 10 consecutive lines from file content (random offset)
  function pickConsecutiveLines(text, count) {
    const maskedTerms = [language, ...languageExtensions[language]];
    // const lines = maskItems(text.split(/\r?\n/).filter(line => line.trim() !== ''), maskedTerms);
    // const lines = maskItems(text.split(/\r?\n/).map(line => line.trim()), maskedTerms);
    const lines = maskItems(normalizeIndentation(text.split(/\r?\n/)), maskedTerms);
    if (lines.length === 0) return [];

    if (lines.length <= count) {
      // If not enough lines, return all
      return [lines, `1 - ${lines.length}`];
    } else {
      const startIndex = getRandomInt(lines.length - count + 1);
      pre.setAttribute("data-start", startIndex)
      return [lines.slice(startIndex, startIndex + count), `${startIndex+1} - ${startIndex+1 + count}`];
    }
  }

  export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // This is a "self-executing" function to run on initial load
  (async () => {
    createSelect();

    // TODO: UPDATE THIS WHEN ADDING NEW LANGS!!!!!!!!!!
    language = languages[getRandomInt(languages.length)];
    // await getSnippet(language); // init
  })();
