class ArmyProduction {
  constructor(resourceProduction) {
    this.resourceProduction = resourceProduction; // Kaynak üretim sistemiyle bağlantı
    this.army = { infantry: 0, cavalry: 0, archers: 0 }; // Mevcut askerler
    this.productionQueue = []; // Üretim kuyruğu
  }

  // Asker üretimi
  produceUnit(unitType, cost, time) {
    // Gerekli kaynakları kontrol et
    const canProduce = Object.keys(cost).every(resource => 
      this.resourceProduction.collectResources(resource, cost[resource])
    );

    if (canProduce) {
      const productionEndTime = Date.now() + time * 1000; // Üretim süresi
      this.productionQueue.push({ unitType, productionEndTime });
      return true;
    }
    return false;
  }

  // Üretim kuyruğunu kontrol et
  updateProductionQueue() {
    const currentTime = Date.now();
    this.productionQueue = this.productionQueue.filter(item => {
      if (currentTime >= item.productionEndTime) {
        this.army[item.unitType] += 1; // Asker sayısını artır
        return false; // Kuyruktan kaldır
      }
      return true;
    });
  }

  // Asker durumunu göster
  getArmyStatus() {
    this.updateProductionQueue(); // Kuyruğu güncelle
    return {
      army: this.army,
      queue: this.productionQueue,
    };
  }
}

module.exports = ArmyProduction;

// Örnek Kullanım
const resourceSystem = new ResourceProduction();
const armySystem = new ArmyProduction(resourceSystem);

// Asker üretimi
armySystem.produceUnit('infantry', { wood: 100, iron: 50 }, 10); // 10 saniyede bir piyade üret
setInterval(() => {
  console.log('Asker Durumu:', armySystem.getArmyStatus());
}, 5000);