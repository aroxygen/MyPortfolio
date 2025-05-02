// Nüfus (Manpower) Sistemi
class Population {
  constructor(initialPopulation = 50, maxPopulation = 100) {
    this.totalPopulation = initialPopulation; // Toplam nüfus
    this.usedPopulation = 0; // Kullanılan nüfus
    this.maxPopulation = maxPopulation; // Maksimum nüfus kapasitesi
    this.growthRate = 2; // Nüfus büyüme oranı (yüzde)
    this.foodConsumption = 1; // Kişi başına gıda tüketimi
  }

  // Kullanılabilir nüfusu hesaplama
  getAvailablePopulation() {
    return this.totalPopulation - this.usedPopulation;
  }

  // Nüfus artışı
  growPopulation(foodSupply) {
    // Gıda yeterliyse büyüme gerçekleşir
    const foodRequired = this.totalPopulation * this.foodConsumption;
    if (foodSupply >= foodRequired) {
      const growth = Math.floor((this.totalPopulation * this.growthRate) / 100);
      this.totalPopulation = Math.min(
        this.totalPopulation + growth,
        this.maxPopulation
      );
      return growth; // Büyüyen nüfus miktarı
    } else {
      console.log('Yetersiz gıda! Nüfus büyüyemez.');
      return 0;
    }
  }

  // Nüfus kullanımını artırma
  usePopulation(amount) {
    if (this.getAvailablePopulation() >= amount) {
      this.usedPopulation += amount;
      return true;
    } else {
      console.log('Yetersiz nüfus!');
      return false;
    }
  }

  // Nüfus kullanımını azaltma (örneğin, bir bina yıkılırsa)
  releasePopulation(amount) {
    this.usedPopulation = Math.max(this.usedPopulation - amount, 0);
  }

  // Nüfus durumunu görüntüle
  getPopulationStatus() {
    return {
      totalPopulation: this.totalPopulation,
      usedPopulation: this.usedPopulation,
      availablePopulation: this.getAvailablePopulation(),
      maxPopulation: this.maxPopulation,
    };
  }
}

module.exports = Population;

// Örnek Kullanım
const population = new Population(50, 100);
console.log('Başlangıç Nüfusu:', population.getPopulationStatus());

// Gıda yeterliyse büyüme
const foodSupply = 200; // Mevcut gıda
population.growPopulation(foodSupply);
console.log('Büyüme Sonrası Nüfus:', population.getPopulationStatus());

// Nüfus kullanımı (örneğin, asker yetiştirme)
population.usePopulation(10);
console.log('Asker Yetiştirme Sonrası Nüfus:', population.getPopulationStatus());

// Nüfus serbest bırakma
population.releasePopulation(5);
console.log('Serbest Bırakma Sonrası Nüfus:', population.getPopulationStatus());