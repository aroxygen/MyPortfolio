// Köy ve sur entegrasyonu
const Building = require('./buildingSystem');

class Village {
  constructor(owner) {
    this.owner = owner;
    this.resources = { wood: 500, clay: 500, iron: 500 }; // Başlangıç kaynakları
    this.buildings = []; // Köydeki binalar
    this.defenseLevel = 0; // Başlangıç savunma seviyesi
  }

  // Bina ekleme
  addBuilding(building) {
    this.buildings.push(building);

    // Sur veya savunma türü bina eklenirse savunma seviyesini artır
    if (building.type === 'Savunma') {
      this.defenseLevel += building.getEffect();
    }
  }

  // Savunma seviyesini güncelle
  updateDefense() {
    this.defenseLevel = 0; // Savunma seviyesini sıfırla
    this.buildings.forEach(building => {
      if (building.type === 'Savunma') {
        this.defenseLevel += building.getEffect();
      }
    });
  }

  // Köy durumunu görüntüle
  getVillageStatus() {
    this.updateDefense(); // Savunmayı güncelle
    return {
      resources: this.resources,
      defenseLevel: this.defenseLevel,
    };
  }
}

module.exports = Village;

// Örnek Kullanım
const village = new Village('aroxygen');
const wall = new Building('Sur', 'Savunma', 10); // Sur binası

village.addBuilding(wall);
console.log('Köy Durumu:', village.getVillageStatus());