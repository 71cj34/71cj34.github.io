const counter = document.getElementById("wordcount");
const mainElement = document.querySelector("main");

// Function to recursively extract text content from an element and its children
function getTextContent(node) {
    let text = "";
    for (const child of node.childNodes) {
        if (child.nodeType === Node.TEXT_NODE) {
            text += child.textContent + " ";
        } else if (child.nodeType === Node.ELEMENT_NODE) {
            text += getTextContent(child);
        }
    }
    return text;
}

const text = getTextContent(mainElement);

const words = text.trim().split(/\s+/);

const length = words.filter(word => word.length > 0).length;

if (length > -1) {
    counter.style.color = "inherit";
    counter.innerText = length;
} else {
    counter.innerText = "Error counting words..."
}
