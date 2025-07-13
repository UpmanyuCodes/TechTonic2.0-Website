// JS/register.js

// Create a container to load the register button
const registerContainer = document.createElement("div");
registerContainer.id = "register-button-container";

// Append this to body or after any section
document.body.appendChild(registerContainer);

// Fetch and inject the HTML
fetch("/HTML/register.html")
  .then(res => res.text())
  .then(html => {
    registerContainer.innerHTML = html;
  })
  .catch(err => console.error("Failed to load Register button:", err));
