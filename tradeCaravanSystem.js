// Ticaret Karavanları Sistemi
class TradeCaravan {
  constructor(destination, goods, amount, soldiers) {
    this.destination = destination; // Ticaret hedefi
    this.goods = goods; // Ticaret malı
    this.amount = amount; // Miktar
    this.soldiers = soldiers; // Koruma için gönderilen askerler
    this.successRate = this.calculateSuccessRate();
    this.status = 'Pending'; // Başlangıç durumu
  }

  // Başarı oranını hesaplama
  calculateSuccessRate() {
    const baseRate = 50; // Temel başarı oranı (%)
    const soldierBonus = this.soldiers * 5; // Her asker için %5 bonus
    return Math.min(baseRate + soldierBonus, 100); // Maksimum başarı %100
  }

  // Karavanı gönder
  dispatchCaravan() {
    const randomChance = Math.random() * 100;
    if (randomChance <= this.successRate) {
      this.status = 'Success';
      console.log(`Karavan başarıyla ${this.destination} hedefine ulaştı!`);
    } else {
      this.status = 'Failed';
      console.log(`Karavan ${this.destination} hedefine ulaşamadı.`);
    }
  }

  // Karavan durumunu görüntüle
  getCaravanStatus() {
    return {
      destination: this.destination,
      goods: this.goods,
      amount: this.amount,
      soldiers: this.soldiers,
      successRate: this.successRate,
      status: this.status,
    };
  }
}

module.exports = TradeCaravan;

// Örnek Kullanım
const caravan = new TradeCaravan('Neighboring Village', 'wood', 50, 10);
console.log('Karavan Durumu:', caravan.getCaravanStatus());
caravan.dispatchCaravan();
console.log('Güncel Karavan Durumu:', caravan.getCaravanStatus());