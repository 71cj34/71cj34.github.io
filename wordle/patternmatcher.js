function getTileMap() {
    const map = [];
    for (let i = 0; i < ROWS; i++) {
        const row = [];
        for (let j = 0; j < COLS; j++) {
            const tile = document.querySelector(`.tile[data-row="${i}"][data-col="${j}"]`);
            row.push(tile.classList.contains('green') ? 1 : 0);
        }
        map.push(row);
    }
    return map;
}

async function getAns() {
    const date = new Date();
    try {
        const response = await fetch(`https://www.nytimes.com/svc/wordle/v2/${date.toLocaleDateString()}.json`, {
            method: "GET",
        })
        if (!response.ok) {
           throw new Error(`Response status: ${response.status}`);
        }
        const j = await response.json().solution;
        return j;
    } catch (error) {
        console.error(error.message);
    }
}

addEventListener("DOMContentLoaded", (e) => { 
    const ans = getAns();
    
})