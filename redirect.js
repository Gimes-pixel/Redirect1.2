// Function to open the entered URL in a new tab
function openInNewTabWithURL() {
  // Get the URL from the input field
  var url = document.getElementById("urlInput").value;

  // Validate the input (basic check to ensure it's not empty)
  if (url && url.trim() !== "") {
    // Open a new tab with about:blank
    var win = window.open('about:blank', '_blank');
    
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';

    // Set GitHub favicon
    var icon = win.document.createElement('link');
    icon.rel = "shortcut icon";
    icon.href = "https://github.githubassets.com/favicon.ico"; // GitHub favicon URL
    icon.type = "image/png";
    win.document.head.appendChild(icon);

    // Set GitHub title
    var title = win.document.createElement('title');
    title.innerText = "GitHub"; // Tab title
    win.document.head.appendChild(title);

    // Create and add an iframe
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.id = 'content';
    iframe.src = url; // Set the input URL as iframe source
    win.document.body.appendChild(iframe);
  } else {
    alert("Please enter a valid URL.");
  }
}
