(async () => {
  // Adjust this to specify the language you want
  const language = 'javascript';

  // Map some common languages to typical file extensions
  const languageExtensions = {
    javascript: ['js', 'jsx', 'mjs', 'cjs'],
    python: ['py'],
    ruby: ['rb'],
    java: ['java'],
    go: ['go'],
    c: ['c', 'h'],
    cpp: ['cpp', 'cc', 'cxx', 'hpp', 'hh', 'hxx'],
    typescript: ['ts', 'tsx'],
    php: ['php'],
    shell: ['sh', 'bash'],
    // Add more languages and extensions if needed
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // Step 1: Search for repos in the specified language
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

  // Fetch contents of a directory in repo (not recursive)
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

  // Filter files by extension matching the language
  function filterFilesByLanguage(files, language) {
    const exts = languageExtensions[language.toLowerCase()];
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
  if (!textArray || !Array.isArray(textArray) || textArray.length === 0 || !mask || !Array.isArray(mask) || mask.length === 0) {
    return text; // Handle empty input gracefully
  }

  const escapedTerms = mask.map(term => term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'));

  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'gi');  // 'gi' flag for global and case-insensitive

  return textArray.map(text => {
      if (typeof text !== 'string') { // handle non-string elements gracefully, returning them unchanged
          return text;
      }
      const maskedText = text.replace(regex, (match) => {
        return '█'.repeat(match.length);
      });
      return maskedText;
    });
}

  // Pick 10 consecutive lines from file content (random offset)
  function pickConsecutiveLines(text, count) {
    const maskedTerms = [language, ...languageExtensions[language]];
    const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');
    if (lines.length === 0) return [];

    if (lines.length <= count) {
      // If not enough lines, return all
      return lines;
    } else {
      const startIndex = getRandomInt(lines.length - count + 1);
      return lines.slice(startIndex, startIndex + count);
    }
  }

  try {
    console.log(`Searching repositories for language: ${language}...`);
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
    const repo = repos[getRandomInt(repos.length)];
    console.log(`Selected repository: ${repo.full_name}`);

    const owner = repo.owner.login;
    const repoName = repo.name;

    // Breadth-first exploration of directories until we find a language file
    const dirQueue = [''];  // start from root directory
    let selectedFile = null;

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

      if (langFiles.length > 0) {
        // Pick a random file from matching files here
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
      console.error(`No ${language} source files found in the repository.`);
      return;
    }

    console.log(`Selected file: ${selectedFile.path}`);

    // Fetch file content
    const content = await fetchFileContent(selectedFile);

    // Pick 10 consecutive lines:
    const lines = pickConsecutiveLines(content, 10);
    if (lines.length === 0) {
      console.warn('Selected file is empty or has no lines.');
      return;
    }

    // Output: assuming you have an element with id="operating-table"
    const output = document.getElementById('operating-table');
    if (output) output.innerText = lines.join('\n');

    console.log(lines);

  } catch (error) {
    console.error('Error:', error.message);
  }
})();
 