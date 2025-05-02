// Dinamik Harita Sistemi
class MapRegion {
  constructor(name, type, resources, duration) {
    this.name = name; // Bölge adı
    this.type = type; // Bölge türü (örneğin, Altın Madeni, Orman)
    this.resources = resources; // Bölgeden kazanılacak kaynaklar
    this.duration = duration; // Bölgenin aktif süresi (saniye)
    this.status = 'Inactive'; // "Inactive", "Active", "Depleted"
  }

  // Kaynak bölgesini aktifleştir
  activateRegion() {
    if (this.status === 'Inactive') {
      this.status = 'Active';
      console.log(`${this.name} aktifleştirildi! Süre: ${this.duration}s`);

      // Süre sonunda bölge tükenir
      setTimeout(() => {
        this.depleteRegion();
      }, this.duration * 1000);
    }
  }

  // Kaynak bölgesini tüket
  depleteRegion() {
    this.status = 'Depleted';
    console.log(`${this.name} tükenmiştir.`);
  }

  // Bölge durumunu görüntüle
  getRegionStatus() {
    return {
      name: this.name,
      type: this.type,
      resources: this.resources,
      duration: this.duration,
      status: this.status,
    };
  }
}

class WatchTower {
  constructor(location, level = 1) {
    this.location = location; // Kule konumu
    this.level = level; // Kule seviyesi
    this.range = level * 50; // Görüş mesafesi
  }

  // Kuleyi yükselt
  upgradeTower() {
    this.level++;
    this.range = this.level * 50;
    console.log(`${this.location} konumundaki kule ${this.level}. seviyeye yükseltildi.`);
  }

  // Görüş mesafesi içinde bir hareket algıla
  detectMovement(movementLocation) {
    const distance = this.calculateDistance(this.location, movementLocation);
    if (distance <= this.range) {
      console.log(`Hareket algılandı! Konum: ${movementLocation}`);
      return true;
    } else {
      console.log('Hareket algılanamadı.');
      return false;
    }
  }

  // İki nokta arasındaki mesafeyi hesapla
  calculateDistance(loc1, loc2) {
    return Math.sqrt(
      Math.pow(loc1.x - loc2.x, 2) + Math.pow(loc1.y - loc2.y, 2)
    );
  }

  // Kule durumunu görüntüle
  getTowerStatus() {
    return {
      location: this.location,
      level: this.level,
      range: this.range,
    };
  }
}

module.exports = { MapRegion, WatchTower };

// Örnek Kullanım
const { MapRegion, WatchTower } = require('./dynamicMapSystem');

// Kaynak Bölgesi
const goldMine = new MapRegion('Altın Madeni', 'Gold', { gold: 1000 }, 30);
console.log('Kaynak Bölgesi Durumu:', goldMine.getRegionStatus());
goldMine.activateRegion();

// Gözetleme Kulesi
const watchTower = new WatchTower({ x: 10, y: 20 });
console.log('Gözetleme Kulesi Durumu:', watchTower.getTowerStatus());
watchTower.upgradeTower();
watchTower.detectMovement({ x: 30, y: 25 });