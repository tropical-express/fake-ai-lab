const chatBox = document.getElementById("chat-box");

const thinkingLines = [
  "Running 4.2 billion calculations",
  "Consulting my massive intellect",
  "Accessing forbidden knowledge",
  "Thinking on a level you cannot perceive"
];

const geniusResponses = [
  "The answer is obvious, but I will simplify it for you.",
  "Ah yes. A beginner-level question.",
  "I solved this before you finished typing.",
  "Interesting question. Disappointing execution.",
  "I could explain this fully, but society is not ready.",
  "Trust me. I am extremely intelligent.",
  "According to my genius brain, this is elementary."
];

function addMessage(text, className) {
  const div = document.createElement("div");
  div.className = `message ${className}`;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const userText = input.value.trim();
  if (!userText) return;

  addMessage("You: " + userText, "user");
  input.value = "";

  const thinking = thinkingLines[Math.floor(Math.random() * thinkingLines.length)];
  addMessage("Fake Genius AI: " + thinking + "...", "bot");

  setTimeout(() => {
    const response = geniusResponses[Math.floor(Math.random() * geniusResponses.length)];
    addMessage("Fake Genius AI: " + response, "bot");
  }, 1200);
}
