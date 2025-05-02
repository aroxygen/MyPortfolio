// Sur binası: Savunma binaları için güncellenmiş bina sistemi
class Building {
  constructor(name, type, baseEffect = 0) {
    this.name = name; // Bina adı
    this.type = type; // Bina türü (örneğin, "Savunma")
    this.level = 1; // Başlangıç seviyesi
    this.baseEffect = baseEffect; // Temel bonus veya etki
    this.upgradeCost = { wood: 100, clay: 80, iron: 50 }; // İlk yükseltme maliyeti
    this.upgradeTime = 120; // İlk yükseltme süresi (saniye)
  }

  // Yükseltme maliyetini hesaplama
  calculateUpgradeCost() {
    return {
      wood: this.upgradeCost.wood * this.level,
      clay: this.upgradeCost.clay * this.level,
      iron: this.upgradeCost.iron * this.level,
    };
  }

  // Yükseltme süresini hesaplama
  calculateUpgradeTime() {
    return this.upgradeTime * this.level; // Seviye ile orantılı
  }

  // Binayı yükseltme
  upgrade(resources) {
    const cost = this.calculateUpgradeCost();
    if (
      resources.wood >= cost.wood &&
      resources.clay >= cost.clay &&
      resources.iron >= cost.iron
    ) {
      resources.wood -= cost.wood;
      resources.clay -= cost.clay;
      resources.iron -= cost.iron;

      this.level += 1;
      console.log(`${this.name} seviyesi ${this.level} oldu!`);
    } else {
      console.log('Yetersiz kaynak!');
    }
  }

  // Bina etkisi
  getEffect() {
    return this.baseEffect * this.level;
  }
}

module.exports = Building;

// Sur binası örneği
const wall = new Building('Sur', 'Savunma', 10); // Savunma bonusu
console.log('Sur başlangıç seviyesi:', wall.level);
console.log('Sur başlangıç savunma etkisi:', wall.getEffect());