// Klan Teknolojileri: Ortak araştırmalar ve geçici bonuslar
class Technology {
  constructor(name, cost, duration, bonus) {
    this.name = name; // Teknoloji adı
    this.cost = cost; // Araştırma maliyeti
    this.duration = duration; // Araştırma süresi (saniye)
    this.bonus = bonus; // Teknolojinin sağladığı bonus
    this.researched = false; // Araştırma durumu
  }

  // Araştırmayı başlat
  startResearch(clanResources) {
    for (const resource in this.cost) {
      if (clanResources[resource] < this.cost[resource]) {
        console.log(`Yetersiz ${resource}!`);
        return false;
      }
    }
    for (const resource in this.cost) {
      clanResources[resource] -= this.cost[resource];
    }

    console.log(`${this.name} araştırması başladı!`);
    setTimeout(() => {
      this.researched = true;
      console.log(`${this.name} araştırması tamamlandı! Bonus:`, this.bonus);
    }, this.duration * 1000);

    return true;
  }
}

// Örnek Kullanım
const clanResources = { wood: 2000, stone: 2000, gold: 1000 };
const barbarDefenseTech = new Technology(
  "Barbar Saldırısı Önleme",
  { wood: 1000, stone: 1000, gold: 500 },
  30,
  { defenseBoost: 20 }
);

barbarDefenseTech.startResearch(clanResources);