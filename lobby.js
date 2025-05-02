const socket = io('https://crownrealms-server.com'); // Connect to server

// Join selected realm
function joinRealm() {
  const selectedRealm = document.querySelector('#realmsList li.selected');
  if (selectedRealm) {
    const realmName = selectedRealm.textContent.split(' - ')[0];
    socket.emit('joinRealm', { realm: realmName });
  }
}

// Listen for player list updates
socket.on('updatePlayers', (players) => {
  const playerList = document.getElementById('playerList');
  playerList.innerHTML = players.map(player => `<li>${player}</li>`).join('');
});

// Send chat message
function sendMessage() {
  const message = document.getElementById('chatInput').value;
  socket.emit('chatMessage', { message });
  document.getElementById('chatInput').value = '';
}

// Listen for chat messages
socket.on('chatMessage', (data) => {
  const chatBox = document.getElementById('chatBox');
  chatBox.innerHTML += `<p><strong>${data.player}:</strong> ${data.message}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
});