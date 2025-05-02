const WebSocket = require('ws');

// WebSocket sunucusunu başlat
const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket sunucusu ws://localhost:8080 adresinde çalışıyor.');

// İstemci bağlantılarını dinle
wss.on('connection', (ws) => {
  console.log('Yeni bir istemci bağlandı.');

  // Gelen mesajları dinle
  ws.on('message', (message) => {
    console.log(`Alınan mesaj: ${message}`);
    // Mesajı tüm istemcilere yayınla
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // İstemci bağlantısı kapandığında
  ws.on('close', () => {
    console.log('Bir istemci bağlantısı kapandı.');
  });

  // Hata durumlarını yakala
  ws.on('error', (error) => {
    console.error(`Bir hata oluştu: ${error.message}`);
  });
});