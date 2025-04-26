/* 
Usage: Add 'dl' class to <a>, file to file location
*/

const dlButtons = document.getElementsByClassName("dl");

for(let i = 0; i<dlButtons.length; i++) {
  dlButtons[i].addEventListener("click", function(event) {
    event.preventDefault();
    downloadFile(dlButtons[i].getAttribute('file'), "asd")
    .then(() => {
      console.log("dl success");
    })
    .catch(error => {
      console.error("dl failed:", error);
      window.location.href = fileUrl; // Redirect
    });
  })
}

const downloadFile = (fileUrl, fileName) => {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName || fileUrl.split('/').pop();
  console.log(link.href)
  
  // Set to open in a new tab to prevent navigation away from current page
  link.target = '_blank';
  
  // Append to the body (required for Firefox)
  document.body.appendChild(link);
  
  // Trigger the click event
  link.click();
  
  // Clean up by removing the element
  document.body.removeChild(link);
};

const getFileNameFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
  };