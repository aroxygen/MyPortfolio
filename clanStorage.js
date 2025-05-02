// ClanStorage sınıfı
class ClanStorage {
  constructor(capacity = 10000) {
    this.capacity = capacity; // Depo kapasitesi
    this.resources = { wood: 0, stone: 0, gold: 0 }; // Depodaki kaynaklar
  }

  // Kaynak ekleme
  addResources(resourceType, amount) {
    if (this.resources[resourceType] + amount > this.capacity) {
      console.log("Depo kapasitesi aşılıyor!");
      return false;
    }
    this.resources[resourceType] += amount;
    console.log(`${amount} ${resourceType} depoya eklendi.`);
    return true;
  }

  // Kaynak çıkarma
  removeResources(resourceType, amount) {
    if (this.resources[resourceType] < amount) {
      console.log("Yetersiz kaynak!");
      return false;
    }
    this.resources[resourceType] -= amount;
    console.log(`${amount} ${resourceType} depodan çıkarıldı.`);
    return true;
  }

  // Depo durumunu görüntüle
  getStorageStatus() {
    return this.resources;
  }
}

// Sınıfı dışa aktar
module.exports = ClanStorage;