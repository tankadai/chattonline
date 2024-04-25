// script.js (JavaScript functions)
let chatCode;

function generateChatCode() {
  chatCode = Math.floor(10000 + Math.random() * 90000); // Generate a 5-digit code
  window.location.href = `chat.html?code=${chatCode}`; // Redirect to chat page with code
}

function enterChat() {
  const enteredCode = prompt("Enter the chat code:");
  if (enteredCode && enteredCode === chatCode.toString()) {
    window.location.href = `chat.html?code=${chatCode}`; // Redirect to chat page with code
  } else {
    alert("Invalid chat code. Please try again.");
  }
}

function sendMessage() {
  const message = document.getElementById("messageInput").value;
  // Send message using backend (e.g., Socket.IO)
  displayMessage(message, true); // Display sent message on chat interface
  document.getElementById("messageInput").value = ""; // Clear input field
}

function closeChat() {
  if (confirm("Are you sure you want to close the chat?")) {
    // Implement closing chat functionality (e.g., emit event to backend)
    window.location.href = "index.html"; // Redirect to homepage after closing chat
  }
}

function displayMessage(message, sentByUser) {
  const chatMessages = document.getElementById("chatMessages");
  const messageElement = document.createElement("div");
  messageElement.classList.add(sentByUser ? "sentMessage" : "receivedMessage");
  messageElement.innerText = message;
  chatMessages.appendChild(messageElement);
}

// Example usage (to be integrated with backend for real-time communication)
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get("code");
if (code) {
  chatCode = code;
  // Initialize chat interface
}
