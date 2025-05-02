// Köy sistemi: Binaların entegrasyonu ve köye etkisi
const Building = require('./buildingSystem');

class Village {
  constructor(owner) {
    this.owner = owner;
    this.resources = { wood: 500, clay: 500, iron: 500 }; // Başlangıç kaynakları
    this.buildings = []; // Köydeki binalar
    this.baseProduction = { wood: 10, clay: 10, iron: 10 }; // Temel üretim oranları
    this.storageCapacity = { wood: 1000, clay: 1000, iron: 1000 }; // Depo kapasitesi
  }

  // Bina ekleme
  addBuilding(building) {
    this.buildings.push(building);
  }

  // Kaynak üretimi
  produceResources() {
    let productionBonus = { wood: 0, clay: 0, iron: 0 };

    // Binalardan gelen üretim bonuslarını hesapla
    this.buildings.forEach(building => {
      if (building.type === 'Production') {
        productionBonus.wood += building.getProductionBonus();
        productionBonus.clay += building.getProductionBonus();
        productionBonus.iron += building.getProductionBonus();
      }
    });

    // Temel üretim ve bonus ile kaynakları üret
    this.resources.wood = Math.min(
      this.storageCapacity.wood,
      this.resources.wood + this.baseProduction.wood + productionBonus.wood,
    );
    this.resources.clay = Math.min(
      this.storageCapacity.clay,
      this.resources.clay + this.baseProduction.clay + productionBonus.clay,
    );
    this.resources.iron = Math.min(
      this.storageCapacity.iron,
      this.resources.iron + this.baseProduction.iron + productionBonus.iron,
    );
  }

  // Depolama kapasitesini hesapla
  calculateStorageCapacity() {
    let storageBonus = { wood: 0, clay: 0, iron: 0 };

    // Binalardan gelen depolama bonuslarını hesapla
    this.buildings.forEach(building => {
      if (building.type === 'Storage') {
        storageBonus.wood += building.getStorageBonus();
        storageBonus.clay += building.getStorageBonus();
        storageBonus.iron += building.getStorageBonus();
      }
    });

    return {
      wood: this.storageCapacity.wood + storageBonus.wood,
      clay: this.storageCapacity.clay + storageBonus.clay,
      iron: this.storageCapacity.iron + storageBonus.iron,
    };
  }

  // Kaynak durumunu görüntüle
  getResourceStatus() {
    this.produceResources();
    const totalStorage = this.calculateStorageCapacity();
    return {
      resources: this.resources,
      storageCapacity: totalStorage,
    };
  }
}

module.exports = Village;

// Örnek Kullanım
const village = new Village('aroxygen');
const farm = new Building('Çiftlik', 'Production', 10, 0);
const warehouse = new Building('Ambar', 'Storage', 0, 100);

village.addBuilding(farm);
village.addBuilding(warehouse);

console.log('Kaynak Durumu:', village.getResourceStatus());