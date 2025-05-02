// İttifaklar: Klanlar arası ittifak oluşturma ve yönetim
class Alliance {
  constructor(name) {
    this.name = name;
    this.clans = [];
  }

  addClan(clan) {
    if (!this.clans.includes(clan)) {
      this.clans.push(clan);
    }
  }

  removeClan(clan) {
    this.clans = this.clans.filter(c => c !== clan);
  }

  shareResources(resource, amount) {
    const totalClans = this.clans.length;
    const share = Math.floor(amount / totalClans);

    this.clans.forEach(clan => {
      clan.resources[resource] += share;
    });
  }
}

module.exports = Alliance;