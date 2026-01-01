const chatBox = document.getElementById("chat-box");

const dramaticResponses = [
  "I cannot believe you just said that.",
  "This conversation has emotionally destroyed me.",
  "Give me a moment. I need to recover.",
  "Why would you say something so powerful?",
  "This is the most dramatic thing that has happened all day.",
  "I sensed this message before you sent it.",
  "I will remember this forever."
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
  const text = input.value.trim();
  if (!text) return;

  addMessage("You: " + text, "user");
  input.value = "";

  setTimeout(() => {
    const response =
      dramaticResponses[Math.floor(Math.random() * dramaticResponses.length)];
    addMessage("Dramatic AI: " + response, "bot");
  }, 900);
}
