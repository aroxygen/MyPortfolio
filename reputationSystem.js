// İtibar Sistemi
class Reputation {
  constructor(initialReputation = 50, maxReputation = 100) {
    this.reputation = initialReputation; // Mevcut itibar
    this.maxReputation = maxReputation; // Maksimum itibar
    this.minReputation = 0; // Minimum itibar
  }

  // İtibar artırma
  increaseReputation(amount) {
    this.reputation = Math.min(this.reputation + amount, this.maxReputation);
    console.log(`İtibar artırıldı: +${amount}. Mevcut itibar: ${this.reputation}`);
  }

  // İtibar azaltma
  decreaseReputation(amount) {
    this.reputation = Math.max(this.reputation - amount, this.minReputation);
    console.log(`İtibar azaltıldı: -${amount}. Mevcut itibar: ${this.reputation}`);
  }

  // İtibar durumu
  getReputationStatus() {
    if (this.reputation >= 80) {
      return 'Yüksek';
    } else if (this.reputation >= 40) {
      return 'Orta';
    } else {
      return 'Düşük';
    }
  }

  // İtibar kontrolü
  displayReputation() {
    return {
      reputation: this.reputation,
      status: this.getReputationStatus(),
    };
  }
}

module.exports = Reputation;

// Örnek Kullanım
const myReputation = new Reputation();
console.log('Başlangıç İtibarı:', myReputation.displayReputation());

// İtibar artışı (örneğin, ticaret anlaşmasını başarıyla tamamlama)
myReputation.increaseReputation(20);

// İtibar azalması (örneğin, anlaşmayı bozma)
myReputation.decreaseReputation(30);

// İtibar durumu görüntüleme
console.log('Son İtibar Durumu:', myReputation.displayReputation());