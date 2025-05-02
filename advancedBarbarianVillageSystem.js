// Gelişmiş Barbar Köy Sistemi
class BarbarianVillage {
  constructor(name, level, resources, defense, respawnTime = 60) {
    this.name = name; // Barbar köy adı
    this.level = level; // Köy seviyesi
    this.resources = resources; // Kaynaklar
    this.defense = defense; // Savunma gücü
    this.status = 'Active'; // Köy durumu ("Active", "Defeated")
    this.respawnTime = respawnTime; // Yeniden doğma süresi (saniye)
  }

  // Saldırı sonrasında kaynak ve kayıplar
  attackVillage(playerArmy) {
    if (this.status !== 'Active') {
      return { success: false, message: `${this.name} zaten yenildi.` };
    }

    const playerPower = playerArmy.reduce((total, unit) => total + unit.power, 0); // Oyuncu gücü
    if (playerPower >= this.defense) {
      this.status = 'Defeated';
      const loot = this.resources;
      this.scheduleRespawn(); // Yeniden doğma zamanlaması
      return { success: true, loot, message: `${this.name} yenildi!` };
    } else {
      return { success: false, losses: playerArmy.length * 0.5, message: `${this.name} savunmasını korudu!` };
    }
  }

  // Barbar köyün yeniden doğması
  scheduleRespawn() {
    setTimeout(() => {
      this.status = 'Active';
      this.resources = {
        wood: Math.floor(Math.random() * 100 + 50),
        clay: Math.floor(Math.random() * 100 + 50),
        iron: Math.floor(Math.random() * 100 + 50),
      };
      this.defense += Math.floor(this.level * 10); // Savunma artışı
      console.log(`${this.name} yeniden doğdu!`);
    }, this.respawnTime * 1000);
  }

  // Köy bilgilerini görüntüle
  getVillageInfo() {
    return {
      name: this.name,
      level: this.level,
      resources: this.resources,
      defense: this.defense,
      status: this.status,
    };
  }
}

// Barbar İstilaları
class BarbarianInvasion {
  constructor(targets) {
    this.targets = targets; // Oyuncular veya köyler
  }

  // İstila başlat
  startInvasion() {
    console.log('Barbarlar saldırıya geçti!');
    this.targets.forEach((target) => {
      const invasionPower = Math.floor(Math.random() * 100 + 50);
      console.log(
        `${target.name} köyü ${invasionPower} güçle saldırıya uğradı!`
      );
    });
  }
}

module.exports = { BarbarianVillage, BarbarianInvasion };

// Örnek Kullanım
const barbarVillage1 = new BarbarianVillage('Zayıf Köy', 1, { wood: 100, clay: 80, iron: 60 }, 50);
const barbarVillage2 = new BarbarianVillage('Güçlü Kale', 3, { wood: 200, clay: 150, iron: 100 }, 150);

const playerArmy = [
  { unit: 'Swordsman', power: 20 },
  { unit: 'Archer', power: 15 },
  { unit: 'Cavalry', power: 30 },
];

// Saldırı
console.log('Barbar Köy Durumu:', barbarVillage1.getVillageInfo());
const attackResult = barbarVillage1.attackVillage(playerArmy);
console.log('Saldırı Sonucu:', attackResult);

// Barbar istilası
const invasion = new BarbarianInvasion([{ name: 'Köy A' }, { name: 'Köy B' }]);
invasion.startInvasion();