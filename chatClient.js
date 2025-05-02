const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Yeni bir istemci bağlandı.');

  ws.on('message', (message) => {
    console.log(`Alınan mesaj: ${message}`);
    // Mesajı tüm istemcilere yayınla
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Bir istemci bağlantısı kapandı.');
  });
});

console.log('WebSocket sunucusu ws://localhost:8080 adresinde çalışıyor.');