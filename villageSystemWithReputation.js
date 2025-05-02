// Köy Sistemi ve İtibar Entegrasyonu
const Reputation = require('./reputationSystem');

class Village {
  constructor(owner) {
    this.owner = owner;
    this.resources = { wood: 500, clay: 500, iron: 500 }; // Başlangıç kaynakları
    this.reputation = new Reputation(); // Oyuncunun itibarı
  }

  // Ticaret anlaşması tamamlama (örnek)
  completeTrade(success) {
    if (success) {
      this.reputation.increaseReputation(10);
      console.log('Ticaret anlaşması başarıyla tamamlandı.');
    } else {
      this.reputation.decreaseReputation(15);
      console.log('Ticaret anlaşması başarısız oldu.');
    }
  }

  // Diplomatik eylemler
  performDiplomaticAction(actionType) {
    if (actionType === 'non-aggression') {
      this.reputation.increaseReputation(5);
      console.log('Saldırmazlık paktı yapıldı. İtibar arttı.');
    } else if (actionType === 'break-agreement') {
      this.reputation.decreaseReputation(20);
      console.log('Anlaşma bozuldu. İtibar azaldı!');
    }
  }

  // Köy durumunu görüntüle
  getVillageStatus() {
    return {
      resources: this.resources,
      reputation: this.reputation.displayReputation(),
    };
  }
}

module.exports = Village;

// Örnek Kullanım
const village = new Village('aroxygen');
console.log('Başlangıç Köy Durumu:', village.getVillageStatus());

// Ticaret anlaşması
village.completeTrade(true); // Başarılı ticaret
village.completeTrade(false); // Başarısız ticaret

// Diplomatik eylem
village.performDiplomaticAction('break-agreement');

// Köy durumu
console.log('Son Köy Durumu:', village.getVillageStatus());