class SpyNetwork {
  constructor() {
    this.spies = []; // Casus listesini tutar
  }

  // Casus ekle
  addSpy(spy) {
    this.spies.push(spy);
    console.log(`${spy.name} casus ağına katıldı!`);
  }

  // Casus listesini görüntüle
  listSpies() {
    return this.spies.map((spy) => ({
      name: spy.name,
      level: spy.level,
      specialty: spy.specialty,
    }));
  }
}

// Casus sınıfı
class Spy {
  constructor(name, specialty, level = 1) {
    this.name = name; // Casusun adı
    this.specialty = specialty; // "Bilgi Toplama", "Sabotaj" vb.
    this.level = level; // Casusun seviyesi
  }
}

// Örnek Kullanım
const spyNetwork = new SpyNetwork();
const spy1 = new Spy("Gölge", "Bilgi Toplama");
const spy2 = new Spy("Gece Kuşu", "Sabotaj");
spyNetwork.addSpy(spy1);
spyNetwork.addSpy(spy2);
console.log("Casus Ağı:", spyNetwork.listSpies());