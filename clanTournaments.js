// Klan Turnuvaları: Klanlar arası yarışmalar
class ClanTournament {
  constructor(name, reward) {
    this.name = name; // Turnuva adı
    this.participants = []; // Katılan klanlar
    this.reward = reward; // Ödül
    this.winner = null; // Kazanan klan
  }

  // Katılım
  addParticipant(clan) {
    this.participants.push(clan);
    console.log(`${clan.name} turnuvaya katıldı.`);
  }

  // Kazananı belirle
  determineWinner() {
    this.winner = this.participants[Math.floor(Math.random() * this.participants.length)];
    console.log(`${this.winner.name} turnuvayı kazandı! Ödül: ${this.reward}`);
  }
}

// Örnek Kullanım
const tournament = new ClanTournament("Teknoloji Yarışı", { gold: 1000 });
tournament.addParticipant({ name: "Savaşçılar" });
tournament.addParticipant({ name: "Barışçılar" });
tournament.determineWinner();