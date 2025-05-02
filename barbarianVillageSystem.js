// Barbar Köy Sistemi

class BarbarianVillage {
  constructor(name, level, resources, defense, respawnTime = 300) {
    this.name = name; // Barbar köy adı
    this.level = level; // Köy seviyesi ("Zayıf", "Orta", "Güçlü")
    this.resources = resources; // Köyde bulunan kaynaklar
    this.defense = defense; // Savunma gücü (asker sayısı)
    this.status = "Active"; // "Active" veya "Defeated"
    this.respawnTime = respawnTime; // Yeniden doğma süresi (saniye)
  }

  // Barbar Köy Saldırısı
  attackVillage(playerArmy) {
    if (this.status !== "Active") {
      return { success: false, message: `${this.name} zaten yenildi.` };
    }

    const playerPower = playerArmy.reduce((total, unit) => total + unit.power, 0); // Oyuncu gücü
    console.log(
      `Saldırı Başladı! Oyuncu Gücü: ${playerPower}, Barbar Savunması: ${this.defense}`
    );

    if (playerPower >= this.defense) {
      this.status = "Defeated";
      const loot = this.resources;

      // Yeniden Doğma Zamanlaması
      this.scheduleRespawn();

      return {
        success: true,
        loot,
        message: `${this.name} yenildi! Kazanılan Kaynaklar: ${JSON.stringify(
          loot
        )}`,
      };
    } else {
      const losses = Math.floor(playerArmy.length * 0.5); // Kayıplar
      return {
        success: false,
        losses,
        message: `${this.name} savunmasını korudu! Kayıplar: ${losses} asker.`,
      };
    }
  }

  // Barbar Köy Yeniden Doğması
  scheduleRespawn() {
    console.log(`${this.name} yeniden doğma sürecinde.`);
    setTimeout(() => {
      this.status = "Active";
      this.resources = {
        wood: Math.floor(Math.random() * 100 + 50) * this.level,
        clay: Math.floor(Math.random() * 100 + 50) * this.level,
        iron: Math.floor(Math.random() * 100 + 50) * this.level,
      };
      this.defense += Math.floor(this.level * 10); // Savunma artışı
      console.log(`${this.name} yeniden doğdu!`);
    }, this.respawnTime * 1000);
  }

  // Köy Bilgileri
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

// Dinamik Harita
class WorldMap {
  constructor() {
    this.barbarianVillages = [];
  }

  // Barbar Köy Ekle
  addVillage(village) {
    this.barbarianVillages.push(village);
  }

  // Köylerin Yerlerini Güncelle
  updateVillagesPosition() {
    this.barbarianVillages.forEach((village) => {
      if (village.status === "Defeated") {
        village.scheduleRespawn();
      }
    });
    console.log("Barbar köylerin yerleri güncellendi.");
  }

  // Haritadaki Köyleri Listele
  listVillages() {
    return this.barbarianVillages.map((village) => village.getVillageInfo());
  }
}

// Örnek Kullanım
const worldMap = new WorldMap();

const village1 = new BarbarianVillage(
  "Zayıf Köy",
  1,
  { wood: 100, clay: 80, iron: 60 },
  50
);
const village2 = new BarbarianVillage(
  "Güçlü Kale",
  3,
  { wood: 300, clay: 250, iron: 200 },
  150
);

worldMap.addVillage(village1);
worldMap.addVillage(village2);

console.log("Barbar Köyleri Haritası:", worldMap.listVillages());

// Örnek Saldırı
const playerArmy = [
  { unit: "Swordsman", power: 20 },
  { unit: "Archer", power: 15 },
  { unit: "Cavalry", power: 30 },
];

console.log(village1.attackVillage(playerArmy));