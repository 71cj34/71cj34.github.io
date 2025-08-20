const counter = document.getElementById("wordcount");
const mainElement = document.querySelector("main");

// function to recursively extract text content from an element and its children
function getTextContent(node) {
    let text = "";
    for (const child of node.childNodes) {
        if (child.nodeType === Node.TEXT_NODE) {
            text += child.textContent + " ";
        } else if (child.nodeType === Node.ELEMENT_NODE) {
            if (child.tagName !== 'SCRIPT' && child.tagName !== 'STYLE') {
                text += getTextContent(child);
            }
        }
    }
    return text;
}

const text = getTextContent(mainElement);
console.log(text);
const words = text.trim().split(/\s+/).filter(word => word.length > 0);
const wordCount = words.length;

if (wordCount > 0) { 
    counter.style.color = "inherit";
    counter.innerText = wordCount.toLocaleString();
} else {
    counter.innerText = "Error counting words...";
}