// Köy sistemi: Başlangıç kaynakları, bonuslar ve kaynak üretimi
class Village {
  constructor(owner) {
    this.owner = owner;
    this.resources = {
      wood: 100,
      clay: 100,
      iron: 100,
    };
    this.bonuses = { wood: 0, clay: 0, iron: 0 }; // Başlangıç bonusları sıfır
    this.storageCapacity = { wood: 1000, clay: 1000, iron: 1000 }; // Depo kapasitesi
    this.lastUpdate = Date.now(); // Üretim güncelleme zamanı
  }

  // Bonus ekleme
  addBonus(resource, amount) {
    if (this.bonuses[resource] !== undefined) {
      this.bonuses[resource] += amount;
    }
  }

  // Kaynak üretimi
  produceResources() {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - this.lastUpdate) / 1000; // Geçen süre (saniye)
    this.lastUpdate = currentTime;

    Object.keys(this.resources).forEach(resource => {
      const productionRate = 10 + this.bonuses[resource]; // Temel üretim + bonus
      const producedAmount = productionRate * elapsedTime / 3600; // Saatlik üretime göre hesaplama
      this.resources[resource] = Math.min(
        this.storageCapacity[resource],
        this.resources[resource] + producedAmount
      );
    });
  }

  // Kaynak durumunu görüntüleme
  getResourceStatus() {
    this.produceResources(); // Üretimi güncelle
    return {
      resources: this.resources,
      storageCapacity: this.storageCapacity,
    };
  }
}

module.exports = Village;