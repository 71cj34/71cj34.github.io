const codeBlocks = document.querySelectorAll("code");
codeBlocks.forEach(codeBlock => {
    codeBlock.addEventListener("click", function() {
        const codeText = this.textContent; // Use textContent to preserve line breaks

        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = codeText;
        document.body.appendChild(tempTextArea);

        tempTextArea.select();
        tempTextArea.setSelectionRange(0, 99999); // For mobile devices

        document.execCommand("copy");

        document.body.removeChild(tempTextArea);

        alert("Code copied to clipboard.");
    });
});