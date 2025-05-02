class ClanBuilding {
  constructor(name, level = 1, cost = { wood: 1000, stone: 1000, gold: 500 }) {
    this.name = name; // Bina adı (örneğin, "Klan Kalesi")
    this.level = level; // Bina seviyesi
    this.cost = cost; // Bir sonraki seviyeye yükseltme maliyeti
    this.bonus = {}; // Seviyeye göre bonuslar
  }

  // Bonusları güncelle
  updateBonus() {
    if (this.level === 1) {
      this.bonus = { defense: 10 }; // Savunma bonusu
    } else if (this.level === 2) {
      this.bonus = { resourceProduction: 15 }; // Kaynak üretimi bonusu
    } else if (this.level === 3) {
      this.bonus = { technologyBoost: 20 }; // Teknoloji araştırma hızı bonusu
    }
  }

  // Bina yükseltme
  upgradeBuilding(clanResources) {
    // Kaynak kontrolü
    for (const resource in this.cost) {
      if (clanResources[resource] < this.cost[resource]) {
        console.log(`Yetersiz ${resource}!`);
        return false;
      }
    }

    // Kaynakları harca
    for (const resource in this.cost) {
      clanResources[resource] -= this.cost[resource];
    }

    this.level++;
    this.updateBonus();

    // Yükseltme maliyetini artır
    this.cost = {
      wood: this.cost.wood * 1.5,
      stone: this.cost.stone * 1.5,
      gold: this.cost.gold * 1.5,
    };

    console.log(
      `${this.name} seviyesi ${this.level} oldu! Yeni bonuslar:`,
      this.bonus
    );
    return true;
  }
}

// Örnek Kullanım
const clanResources = { wood: 5000, stone: 5000, gold: 3000 };
const clanCastle = new ClanBuilding("Klan Kalesi");

console.log("Başlangıç Durumu:", clanCastle);
clanCastle.upgradeBuilding(clanResources); // İlk yükseltme
clanCastle.upgradeBuilding(clanResources); // İkinci yükseltme
console.log("Güncel Durum:", clanCastle);
console.log("Klan Kaynakları:", clanResources);