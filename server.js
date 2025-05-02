const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const Message = require('./models/message'); // Mesaj modeli

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// WebSocket bağlantısı
io.on('connection', (socket) => {
  console.log('Bir kullanıcı bağlandı.');

  // Arama sorgusu için dinleme
  socket.on('searchQuery', async (searchTerm) => {
    const results = await Message.find({ $text: { $search: searchTerm } });
    socket.emit('searchResults', results);
  });

  socket.on('disconnect', () => {
    console.log('Bir kullanıcı bağlantıyı kesti.');
  });
});

server.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor.');
});