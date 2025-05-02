// Köy ve bina sistemi entegrasyonu
const Building = require('./buildingSystem');

class Village {
  constructor(owner) {
    this.owner = owner;
    this.resources = { wood: 500, clay: 500, iron: 500 }; // Başlangıç kaynakları
    this.buildings = []; // Köydeki binalar
  }

  // Bina ekleme
  addBuilding(building) {
    this.buildings.push(building);
  }

  // Kaynak üretimi (binalardan gelen bonuslarla)
  produceResources() {
    let productionBonus = { wood: 0, clay: 0, iron: 0 };

    // Binalardan gelen bonusları hesapla
    this.buildings.forEach(building => {
      productionBonus.wood += building.getProductionBonus();
      productionBonus.clay += building.getProductionBonus();
      productionBonus.iron += building.getProductionBonus();
    });

    this.resources.wood += 10 + productionBonus.wood;
    this.resources.clay += 10 + productionBonus.clay;
    this.resources.iron += 10 + productionBonus.iron;
  }

  // Kaynak depolama kapasitesini hesaplama
  calculateStorageCapacity() {
    let storageBonus = { wood: 0, clay: 0, iron: 0 };

    this.buildings.forEach(building => {
      storageBonus.wood += building.getStorageBonus();
      storageBonus.clay += building.getStorageBonus();
      storageBonus.iron += building.getStorageBonus();
    });

    return storageBonus;
  }

  // Kaynak durumunu görüntüle
  getResourceStatus() {
    this.produceResources();
    return this.resources;
  }
}

module.exports = Village;

// Örnek Kullanım
const myVillage = new Village('aroxygen');
const farm = new Building('Çiftlik', 10, 0);
const warehouse = new Building('Ambar', 0, 100);

myVillage.addBuilding(farm);
myVillage.addBuilding(warehouse);

console.log('Kaynak Durumu:', myVillage.getResourceStatus());