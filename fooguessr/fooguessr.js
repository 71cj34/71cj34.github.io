import { get } from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
// const GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN'; // Replace with your GitHub token
const LANGUAGE = 'javascript'; // Specify the programming language

async function getRandomRepositories(language) {
  const response = await get(`${GITHUB_API_URL}/search/repositories`, {
    params: {
      q: `language:${language}`,
      sort: 'stars',
      per_page: 100 // Adjust the number of repositories to fetch
    },
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  });

  const repositories = response.data.items;
  return repositories;
}

async function getRandomFileContent(repoOwner, repoName) {
  const response = await get(`${GITHUB_API_URL}/repos/${repoOwner}/${repoName}/git/trees/main?recursive=1`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  });

  const files = response.data.tree.filter(item => item.type === 'blob');
  const randomFile = files[Math.floor(Math.random() * files.length)];

  const fileResponse = await get(`${GITHUB_API_URL}/repos/${repoOwner}/${repoName}/git/blobs/${randomFile.sha}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  });

  const fileContent = Buffer.from(fileResponse.data.content, 'base64').toString('utf-8');
  return fileContent.split('\n');
}

function getRandomLines(lines, numLines) {
  const shuffled = lines.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numLines);
}

async function main() {
  try {
    const repositories = await getRandomRepositories(LANGUAGE);
    if (repositories.length === 0) {
      console.log('No repositories found for the specified language.');
      return;
    }

    const randomRepo = repositories[Math.floor(Math.random() * repositories.length)];
    const [repoOwner, repoName] = randomRepo.full_name.split('/');

    const fileLines = await getRandomFileContent(repoOwner, repoName);
    const randomLines = getRandomLines(fileLines, 10);

    console.log('Random lines from a random file in a random repository:');
    console.log(randomLines.join('\n'));
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
