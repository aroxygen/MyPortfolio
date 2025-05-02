// Klan İtibarı Sistemi
class Clan {
  constructor(name) {
    this.name = name; // Klan adı
    this.members = []; // Klan üyeleri
    this.reputation = 0; // Klan itibarı
  }

  // Klan üyesi ekleme
  addMember(player) {
    this.members.push(player);
    this.updateReputation();
    console.log(`${player.name} klana katıldı: ${this.name}`);
  }

  // Klan üyesi çıkarma
  removeMember(playerName) {
    this.members = this.members.filter((member) => member.name !== playerName);
    this.updateReputation();
    console.log(`${playerName} klandan çıkarıldı: ${this.name}`);
  }

  // Klan itibarını güncelle
  updateReputation() {
    this.reputation = this.members.reduce(
      (total, member) => total + member.reputation,
      0
    );
  }

  // Klan durumu
  getClanStatus() {
    return {
      name: this.name,
      reputation: this.reputation,
      members: this.members.map((member) => ({
        name: member.name,
        reputation: member.reputation,
      })),
    };
  }
}

class Player {
  constructor(name, reputation = 50) {
    this.name = name; // Oyuncu adı
    this.reputation = reputation; // Oyuncu itibarı
  }

  // İtibar artırma
  increaseReputation(amount) {
    this.reputation += amount;
    console.log(`${this.name} itibarı artırıldı: +${amount}`);
  }

  // İtibar azaltma
  decreaseReputation(amount) {
    this.reputation = Math.max(this.reputation - amount, 0);
    console.log(`${this.name} itibarı azaltıldı: -${amount}`);
  }
}

module.exports = { Clan, Player };

// Örnek Kullanım
const { Clan, Player } = require('./clanReputationSystem');

const player1 = new Player('Player1', 70);
const player2 = new Player('Player2', 50);
const player3 = new Player('Player3', 60);

const clan = new Clan('Warriors');
clan.addMember(player1);
clan.addMember(player2);
clan.addMember(player3);

console.log('Klan Durumu:', clan.getClanStatus());

// Oyuncu itibarı artırma
player1.increaseReputation(10);
clan.updateReputation();
console.log('Güncellenmiş Klan Durumu:', clan.getClanStatus());