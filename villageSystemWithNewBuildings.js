// Köy sistemi ile yeni bina türleri entegrasyonu
const Building = require('./buildingSystem');

class Village {
  constructor(owner) {
    this.owner = owner;
    this.resources = { wood: 500, clay: 500, iron: 500 }; // Başlangıç kaynakları
    this.buildings = []; // Köydeki binalar
    this.defenseLevel = 0; // Savunma seviyesi
    this.researchSpeed = 1; // Araştırma hızı
    this.tradeCapacity = 100; // Ticaret kapasitesi
  }

  // Bina ekleme
  addBuilding(building) {
    this.buildings.push(building);

    // Bina türüne göre etkileri güncelle
    if (building.type === 'Savunma') {
      this.defenseLevel += building.getEffect();
    } else if (building.type === 'Araştırma') {
      this.researchSpeed += building.getEffect();
    } else if (building.type === 'Ticaret') {
      this.tradeCapacity += building.getEffect();
    }
  }

  // Köy durumunu görüntüle
  getVillageStatus() {
    return {
      resources: this.resources,
      defenseLevel: this.defenseLevel,
      researchSpeed: this.researchSpeed,
      tradeCapacity: this.tradeCapacity,
    };
  }
}

module.exports = Village;

// Örnek Kullanım
const village = new Village('aroxygen');
const wall = new Building('Duvar', 'Savunma', 5);
const library = new Building('Kütüphane', 'Araştırma', 10);
const market = new Building('Pazar', 'Ticaret', 20);

village.addBuilding(wall);
village.addBuilding(library);
village.addBuilding(market);

console.log('Köy Durumu:', village.getVillageStatus());