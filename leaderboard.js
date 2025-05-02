// Rekabetçi Liderlik Tablosu: Klan ve ittifak sıralamaları
class Leaderboard {
  constructor() {
    this.rankings = [];
  }

  updateRankings(clans) {
    this.rankings = clans
      .map(clan => ({
        name: clan.name,
        score: clan.members.length * 100 + Object.values(clan.resources).reduce((a, b) => a + b, 0),
      }))
      .sort((a, b) => b.score - a.score);
  }

  getTopClans(limit = 10) {
    return this.rankings.slice(0, limit);
  }
}

module.exports = Leaderboard;