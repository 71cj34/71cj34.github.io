async function getRandomLinesFromGitHub(language) {
    try {
        // Step 1: Search for repositories in the specified language
        const reposResponse = await axios.get('https://corsproxy.io/?url=https://api.github.com/search/repositories', {
            params: {
                q: `language:${language}`,
                sort: 'stars',
                order: 'desc',
                per_page: 100 // Get up to 100 repos (API max per page)
            },
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'RandomCodeLinesApp'
            }
        });

        if (reposResponse.data.items.length === 0) {
            throw new Error(`No repositories found for language: ${language}`);
        }

        // Step 2: Pick a random repository
        const randomRepo = reposResponse.data.items[
            Math.floor(Math.random() * reposResponse.data.items.length)
        ];
        const repoName = randomRepo.full_name;

        // Step 3: Get repository contents
        const contentsResponse = await axios.get(
            `https://api.github.com/repos/${repoName}/contents`, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'User-Agent': 'RandomCodeLinesApp'
                }
            }
        );

        // Filter for files (not directories) and files that are likely code
        const files = contentsResponse.data.filter(
            item => item.type === 'file' &&
            item.size < 100000 && // Limit to files under 100KB
            !item.name.includes('LICENSE') && // Exclude license files
            !item.name.includes('README') // Exclude readme files
        );

        if (files.length === 0) {
            throw new Error('No suitable files found in the repository');
        }

        // Pick a random file
        const randomFile = files[Math.floor(Math.random() * files.length)];

        // Step 4: Get the file content
        const fileResponse = await axios.get(randomFile.download_url, {
            headers: {
                'User-Agent': 'RandomCodeLinesApp'
            }
        });

        const fileContent = fileResponse.data;
        const lines = fileContent.split('\n').filter(line => line.trim() !== '');

        if (lines.length === 0) {
            throw new Error('File is empty or contains no lines');
        }

        // Step 5: Get 10 random lines
        const randomLines = [];
        const lineCount = Math.min(10, lines.length);

        // To ensure we get unique lines, we'll shuffle and take first 10
        const shuffled = [...lines].sort(() =>
            0.5 - Math.random()
        );
        randomLines.push(...shuffled.slice(0, lineCount));

        return {
            repository: repoName,
            file: randomFile.name,
            lines: randomLines,
            url: randomFile.html_url
        };
    } catch (error) {
        console.error('Error fetching random lines:', error.message);
        throw error; // Re-throw to allow caller to handle
    }
}

// Example usage:
(async () => {
    try {
        const language = 'Powershell'; // You can change this to any language
        const result = await getRandomLinesFromGitHub(language);

        console.log(`Repository: ${result.repository}`);
        console.log(`File: ${result.file}`);
        console.log(`URL: ${result.url}`);
        console.log('\nRandom lines:');
        result.lines.forEach((line, i) => console.log(`${i + 1}. ${line}`));
    } catch (error) {
        console.error('Failed to get random lines:', error.message);
    }
})();