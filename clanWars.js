// Klan Savaşları: Klanlar arasında turnuva ve savaş düzenleme
class ClanWar {
  constructor(clan1, clan2) {
    this.clan1 = clan1;
    this.clan2 = clan2;
    this.winner = null;
    this.logs = [];
  }

  simulateWar() {
    const clan1Power = this.calculatePower(this.clan1);
    const clan2Power = this.calculatePower(this.clan2);

    if (clan1Power > clan2Power) {
      this.winner = this.clan1.name;
      this.logs.push(`${this.clan1.name} kazandı!`);
    } else if (clan2Power > clan1Power) {
      this.winner = this.clan2.name;
      this.logs.push(`${this.clan2.name} kazandı!`);
    } else {
      this.winner = "Berabere";
      this.logs.push("Berabere!");
    }
  }

  calculatePower(clan) {
    return clan.members.length * 100 + Object.values(clan.resources).reduce((a, b) => a + b, 0);
  }

  getWarReport() {
    return {
      winner: this.winner,
      logs: this.logs,
    };
  }
}

module.exports = ClanWar;