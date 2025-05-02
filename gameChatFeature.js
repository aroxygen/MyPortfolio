// Sohbeti Göster/Gizle
function toggleChat() {
  const chatContent = document.getElementById('chat-content');
  chatContent.style.display = chatContent.style.display === 'none' ? 'block' : 'none';
}

// Sohbet Sekmesi Değiştir
function switchTab(tab) {
  const tabs = document.querySelectorAll('.chat-tab');
  tabs.forEach((element) => (element.style.display = 'none'));
  document.getElementById(tab).style.display = 'block';
}

// Mesaj Gönderme
function sendMessage() {
  const input = document.getElementById('message');
  const message = input.value.trim();
  if (message) {
    const activeTab = document.querySelector('.chat-tab:not([style*="display: none"])');
    const newMessage = document.createElement('p');
    newMessage.innerHTML = `<strong>Ben:</strong> ${message}`;
    activeTab.appendChild(newMessage);
    input.value = '';
    activeTab.scrollTop = activeTab.scrollHeight; // Scroll'u en alta çek
  }
}