// Kaynak Üretim Sistemi
class ResourceProduction {
  constructor(baseProduction = { wood: 10, clay: 10, iron: 10 }) {
    this.baseProduction = baseProduction; // Temel üretim oranları
    this.bonuses = { wood: 0, clay: 0, iron: 0 }; // Bonuslar
    this.storage = { wood: 0, clay: 0, iron: 0 }; // Depolanan kaynaklar
    this.storageCapacity = { wood: 1000, clay: 1000, iron: 1000 }; // Maksimum depo kapasitesi
    this.lastUpdate = Date.now(); // Son üretim güncelleme zamanı
  }

  // Bonus ekleme
  addBonus(resource, amount) {
    if (this.bonuses[resource] !== undefined) {
      this.bonuses[resource] += amount;
    }
  }

  // Bonusları sıfırlama
  resetBonuses() {
    Object.keys(this.bonuses).forEach(resource => {
      this.bonuses[resource] = 0;
    });
  }

  // Depo kapasitesini artırma
  upgradeStorage(resource, amount) {
    if (this.storageCapacity[resource] !== undefined) {
      this.storageCapacity[resource] += amount;
    }
  }

  // Kaynakların üretimini güncelleme
  updateProduction() {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - this.lastUpdate) / 1000; // Geçen süre (saniye)
    this.lastUpdate = currentTime;

    Object.keys(this.baseProduction).forEach(resource => {
      const productionRate = this.baseProduction[resource] + this.bonuses[resource];
      const producedAmount = productionRate * elapsedTime / 3600; // Saatlik üretime göre hesaplama
      this.storage[resource] = Math.min(
        this.storageCapacity[resource],
        this.storage[resource] + producedAmount
      );
    });
  }

  // Kaynakları alma (örneğin bina yükseltmek için)
  collectResources(resource, amount) {
    if (this.storage[resource] >= amount) {
      this.storage[resource] -= amount;
      return true;
    }
    return false;
  }

  // Kaynak durumunu göster
  getResourceStatus() {
    this.updateProduction(); // Önce üretimi güncelle
    return {
      storage: { ...this.storage }, // Kopyalanmış nesne
      capacity: { ...this.storageCapacity }, // Kopyalanmış nesne
      bonuses: { ...this.bonuses }, // Bonusları da göster
    };
  }
}

// Örnek Kullanım
const myVillageProduction = new ResourceProduction();

// Bonus ekleme
myVillageProduction.addBonus('wood', 5);
myVillageProduction.addBonus('iron', 3);

// Depo kapasitesini artırma
myVillageProduction.upgradeStorage('wood', 500);

// Üretimi güncelle ve kaynak durumunu göster
setInterval(() => {
  console.log('Kaynak Durumu:', myVillageProduction.getResourceStatus());
}, 5000); // Her 5 saniyede bir durumu güncelle ve göster