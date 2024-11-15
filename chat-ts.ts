import { loadLLM } from '@web-llm/web-llm';

let llm: any;

async function initializeLLM() {
    llm = await loadLLM({
        model: 'your-model-name',
        provider: 'your-provider',
        apiKey: 'your-api-key'
    });
    console.log('LLM initialized');
}

async function sendQuery() {
    const query = document.getElementById('query') as HTMLTextAreaElement;
    if (query.value.trim() === '') {
        alert('Please enter a query');
        return;
    }

    try {
        const response = await llm.generate(query.value);
        const responseDiv = document.getElementById('response') as HTMLDivElement;
        responseDiv.innerText = response;
    } catch (error) {
        console.error('Error:', error);
        const responseDiv = document.getElementById('response') as HTMLDivElement;
        responseDiv.innerText = 'An error occurred. Please try again.';
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    initializeLLM();
});
