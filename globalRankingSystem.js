// Global Sıralama Sistemi
class GlobalRanking {
  constructor() {
    this.individualRankings = []; // Bireysel sıralama
    this.clanRankings = []; // Klan sıralaması
  }

  // Bireysel sıralamayı güncelle
  updateIndividualRankings(players) {
    this.individualRankings = players
      .sort((a, b) => b.reputation - a.reputation)
      .map((player, index) => ({
        rank: index + 1,
        name: player.name,
        reputation: player.reputation,
      }));
    console.log('Bireysel sıralama güncellendi.');
  }

  // Klan sıralamasını güncelle
  updateClanRankings(clans) {
    this.clanRankings = clans
      .sort((a, b) => b.reputation - a.reputation)
      .map((clan, index) => ({
        rank: index + 1,
        name: clan.name,
        reputation: clan.reputation,
      }));
    console.log('Klan sıralaması güncellendi.');
  }

  // Sıralamaları görüntüle
  getRankings() {
    return {
      individualRankings: this.individualRankings,
      clanRankings: this.clanRankings,
    };
  }
}

module.exports = GlobalRanking;

// Örnek Kullanım
const GlobalRanking = require('./globalRankingSystem');
const { Clan, Player } = require('./clanReputationSystem');

const player1 = new Player('Player1', 70);
const player2 = new Player('Player2', 50);
const player3 = new Player('Player3', 60);

const clan1 = new Clan('Warriors');
clan1.addMember(player1);
clan1.addMember(player2);

const clan2 = new Clan('Defenders');
clan2.addMember(player3);

const rankingSystem = new GlobalRanking();
rankingSystem.updateIndividualRankings([player1, player2, player3]);
rankingSystem.updateClanRankings([clan1, clan2]);

console.log('Global Sıralamalar:', rankingSystem.getRankings());