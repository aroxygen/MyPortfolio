class SpyEquipment {
  constructor(name, bonus) {
    this.name = name; // Ekipman adı
    this.bonus = bonus; // Casusa sağladığı bonus
  }
}

class SpyWithEquipment extends Spy {
  constructor(name, specialty, equipment, level = 1) {
    super(name, specialty, level);
    this.equipment = equipment; // Casusun ekipmanı
  }

  // Başarı oranını hesapla
  getSuccessRate() {
    return this.level * 10 + this.equipment.bonus; // Ekipman bonusu eklenir
  }
}

// Örnek Kullanım
const cloak = new SpyEquipment("Gizlenme Pelerini", 15);
const equippedSpy = new SpyWithEquipment("Gölge", "Bilgi Toplama", cloak);
console.log(
  `${equippedSpy.name} başarı oranı: ${equippedSpy.getSuccessRate()}`
);