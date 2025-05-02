class ClanTechnology {
  constructor(name, category, cost, timeToResearch) {
    this.name = name; // Teknolojinin adı (örneğin, "Savunma Güçlendirme")
    this.category = category; // Teknoloji kategorisi ("Savunma", "Ekonomi", "Askeri")
    this.cost = cost; // Araştırma maliyeti
    this.timeToResearch = timeToResearch; // Araştırma süresi (saniye)
    this.researched = false; // Araştırma durumu
  }

  // Araştırmayı başlat
  startResearch(clanResources) {
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

    console.log(
      `${this.name} araştırması başladı! Süre: ${this.timeToResearch}s`
    );

    // Araştırmayı tamamla
    setTimeout(() => {
      this.researched = true;
      console.log(`${this.name} araştırması tamamlandı!`);
    }, this.timeToResearch * 1000);

    return true;
  }
}

// Teknoloji Ağacı
class ClanTechnologyTree {
  constructor() {
    this.technologies = [];
  }

  // Teknoloji ekle
  addTechnology(technology) {
    this.technologies.push(technology);
  }

  // Teknolojileri listele
  listTechnologies() {
    return this.technologies.map((tech) => ({
      name: tech.name,
      category: tech.category,
      researched: tech.researched,
    }));
  }
}

// Örnek Kullanım
const clanTechnologyTree = new ClanTechnologyTree();
const defenseTech = new ClanTechnology(
  "Savunma Güçlendirme",
  "Savunma",
  { wood: 1000, stone: 1000, gold: 500 },
  30
);
const economyTech = new ClanTechnology(
  "Kaynak Üretim Artışı",
  "Ekonomi",
  { wood: 1500, stone: 1500, gold: 1000 },
  60
);

clanTechnologyTree.addTechnology(defenseTech);
clanTechnologyTree.addTechnology(economyTech);

console.log("Klan Teknoloji Ağacı:", clanTechnologyTree.listTechnologies());

const clanResourcesForTech = { wood: 3000, stone: 3000, gold: 2000 };
defenseTech.startResearch(clanResourcesForTech);