// Bonus Sistemi: Köy gelişimine genel bonuslar
class BonusSystem {
  constructor() {
    this.globalBonuses = {
      wood: 5, // Ahşap üretim bonusu
      clay: 3, // Kil üretim bonusu
      iron: 4, // Demir üretim bonusu
    };
  }

  applyBonuses(village) {
    Object.keys(this.globalBonuses).forEach(resource => {
      village.addBonus(resource, this.globalBonuses[resource]);
    });
  }
}

// Örnek Kullanım
const Village = require('./villageSystem');
const bonusSystem = new BonusSystem();

const exampleVillage = new Village('aroxygen');
bonusSystem.applyBonuses(exampleVillage);
console.log('Güncel Kaynak Bonusu:', exampleVillage.bonuses);