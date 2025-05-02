// Köy Sistemi ve Nüfus Entegrasyonu
const Population = require('./populationSystem');

class Village {
  constructor(owner) {
    this.owner = owner;
    this.resources = { wood: 500, clay: 500, iron: 500, food: 200 }; // Başlangıç kaynakları
    this.population = new Population(50, 100); // Başlangıç nüfusu
  }

  // Kaynak tüketimi ve nüfus büyümesi
  updateVillage() {
    const foodSupply = this.resources.food;
    const grownPopulation = this.population.growPopulation(foodSupply);

    // Gıda tüketimini azalt
    const foodConsumed =
      this.population.totalPopulation * this.population.foodConsumption;
    this.resources.food = Math.max(foodSupply - foodConsumed, 0);

    console.log(
      `Köy güncellendi: +${grownPopulation} kişi büyüdü, ${foodConsumed} gıda tüketildi.`
    );
  }

  // Nüfus kullanımı (örneğin, bina inşası veya asker yetiştirme)
  assignPopulation(amount) {
    const success = this.population.usePopulation(amount);
    if (success) {
      console.log(`${amount} kişi görevlendirildi.`);
    }
  }

  // Köy durumunu görüntüle
  getVillageStatus() {
    return {
      resources: this.resources,
      population: this.population.getPopulationStatus(),
    };
  }
}

module.exports = Village;

// Örnek Kullanım
const village = new Village('aroxygen');
console.log('Başlangıç Köy Durumu:', village.getVillageStatus());

// Köy güncellemesi
village.updateVillage();
console.log('Güncelleme Sonrası Köy Durumu:', village.getVillageStatus());

// Asker yetiştirme için nüfus kullanımı
village.assignPopulation(10);
console.log('Asker Yetiştirme Sonrası Köy Durumu:', village.getVillageStatus());