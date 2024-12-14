// Function to open the URL in a new tab with a custom layout
function openInNewTab(url) {
  // Open a new blank window
  var win = window.open();
  
  // Set the body margin and height for the new window
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';

  // Add Google Docs favicon to the new tab
  var icon = win.document.createElement('link');
  icon.rel = "shortcut icon";
  icon.href = "https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_document_256.png"; // Google Docs favicon URL
  icon.type = "image/png";
  win.document.head.appendChild(icon);

  // Set the title of the new tab to "Google Docs"
  var title = win.document.createElement('title');
  title.innerText = "Google Docs"; // Title text
  win.document.head.appendChild(title);

  // Create an iframe to load the provided URL
  var iframe = win.document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.margin = '0';
  iframe.id = 'content';
  iframe.src = url; // Set the iframe source to the input URL

  // Append the iframe to the body after the title and icon are set
  win.document.body.appendChild(iframe);
}

// When the page content is loaded, add event listener to the button
document.addEventListener('DOMContentLoaded', function() {
  // Get the input field and button from the HTML
  const inputField = document.getElementById('urlInput');
  const openButton = document.getElementById('openBtn');
  
  // When the button is clicked, open the entered URL in a new tab
  openButton.addEventListener('click', function() {
    // Get the URL from the input field and trim any extra spaces
    var url = inputField.value.trim();

    // Validate if the URL is not empty
    if (url && url !== '') {
      openInNewTab(url); // Call the function to open the URL in a new tab
    } else {
      alert("Please enter a valid URL.");
    }
  });
});
