import * as webllm from "@mlc-ai/web-llm";

async function initWebLLM() {
    const worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });
    const engine = await webllm.CreateWebWorkerMLCEngine(worker, {
        model: 'llama',
    });

    return engine;
}

async function handleButtonClick() {
    const inputText = document.getElementById('input-text').value;
    const responseContainer = document.getElementById('response-container');

    if (!inputText) return;

    try {
        let engine = window.webllmEngine;
        if (!engine) {
            engine = await initWebLLM();
            window.webllmEngine = engine;
        }

        const response = await engine.generate({
            prompt: inputText,
        });

        responseContainer.innerText = response;
    } catch (error) {
        console.error('Error generating response:', error);
        responseContainer.innerText = 'Error generating response.';
    }
}

document.getElementById('submit-button').addEventListener('click', handleButtonClick);