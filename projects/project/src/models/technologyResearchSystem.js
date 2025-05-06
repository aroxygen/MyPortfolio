// Teknoloji ve Araştırma Sistemi
class Technology {
  constructor(name, category, cost, timeToResearch, requirements = []) {
    this.name = name; // Teknolojinin adı
    this.category = category; // Teknoloji kategorisi (üretim, savunma, vb.)
    this.cost = cost; // Araştırma maliyeti
    this.timeToResearch = timeToResearch; // Araştırma süresi (saniye)
    this.requirements = requirements; // Ön koşullar
    this.level = 0; // Başlangıç seviyesi
    this.status = 'Locked'; // "Locked", "In Progress", "Completed"
  }

  // Teknolojiyi başlat
  startResearch(resources) {
    if (this.status !== 'Locked') {
      console.log(`${this.name} zaten araştırılıyor veya tamamlandı.`);
      return false;
    }

    // Kaynak kontrolü
    for (const resource in this.cost) {
      if (resources[resource] < this.cost[resource]) {
        console.log(`Yetersiz ${resource}!`);
        return false;
      }
    }

    // Kaynakları harca
    for (const resource in this.cost) {
      resources[resource] -= this.cost[resource];
    }

    this.status = 'In Progress';
    console.log(`${this.name} araştırması başladı! Süre: ${this.timeToResearch}s`);

    // Araştırmayı tamamla
    setTimeout(() => {
      this.completeResearch();
    }, this.timeToResearch * 1000);

    return true;
  }

  // Araştırmayı tamamla
  completeResearch() {
    this.level++;
    this.status = 'Completed';
    console.log(`${this.name} araştırması tamamlandı! Seviye: ${this.level}`);
  }
}

class TechnologyTree {
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
      level: tech.level,
      status: tech.status,
    }));
  }
}

module.exports = { Technology, TechnologyTree };

// Örnek Kullanım
const { Technology, TechnologyTree } = require('./technologyResearchSystem');

// Kaynaklar
const playerResources = { wood: 500, clay: 300, iron: 200, gold: 100 };

// Teknoloji Ağacı
const techTree = new TechnologyTree();
const woodProduction = new Technology('Wood Production Boost', 'Production', { wood: 100, gold: 50 }, 10);
const defenseUpgrade = new Technology('Wall Reinforcement', 'Defense', { clay: 200, iron: 100 }, 15);
const tradeEfficiency = new Technology('Trade Efficiency', 'Trade', { gold: 150 }, 20);

techTree.addTechnology(woodProduction);
techTree.addTechnology(defenseUpgrade);
techTree.addTechnology(tradeEfficiency);

console.log('Mevcut Teknolojiler:', techTree.listTechnologies());

// Araştırma başlat
woodProduction.startResearch(playerResources);
defenseUpgrade.startResearch(playerResources);

console.log('Güncel Kaynaklar:', playerResources);