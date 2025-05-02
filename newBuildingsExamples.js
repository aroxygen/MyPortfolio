// Yeni bina örnekleri
const Building = require('./buildingSystem');

// Savunma Binaları
const wall = new Building('Duvar', 'Savunma', 5); // Savunma bonusu
const tower = new Building('Kule', 'Savunma', 10); // Ekstra savunma

// Araştırma Binaları
const library = new Building('Kütüphane', 'Araştırma', 5); // Araştırma bonusu
const lab = new Building('Laboratuvar', 'Araştırma', 8); // Geliştirme bonusu

// Ticaret Binaları
const market = new Building('Pazar', 'Ticaret', 15); // Ticaret kapasitesi
const port = new Building('Liman', 'Ticaret', 25); // Büyük ticaret kapasitesi

console.log('Yeni Binalar:');
console.log(wall, tower, library, lab, market, port);