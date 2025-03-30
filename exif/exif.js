document.getElementById('upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        EXIF.getData(file, function() {
            const allMetaData = EXIF.getAllTags(this);
            displayMetadata(allMetaData);
        });
    }
});

function displayMetadata(metadata) {
    const metadataDiv = document.getElementById('metadata');
    for (const key in metadata) {
        if (metadata.hasOwnProperty(key)) {
            metadataDiv.innerHTML += `<p><strong>${key}:</strong><pre>${metadata[key]}</pre></p>`;
        }
    }
}
