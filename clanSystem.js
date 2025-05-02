// Klan sistemi: Klan oluşturma, üyelik ve kaynak paylaşımı
class Clan {
  constructor(name, leader) {
    this.name = name;
    this.leader = leader;
    this.members = [leader];
  }

  addMember(user) {
    if (!this.members.includes(user)) {
      this.members.push(user);
    }
  }

  shareResources(fromVillage, toVillage, resource, amount) {
    if (fromVillage.resources[resource] >= amount) {
      fromVillage.resources[resource] -= amount;
      toVillage.resources[resource] += amount;
      console.log(
        `${amount} ${resource}, ${fromVillage.owner} köyünden ${toVillage.owner} köyüne gönderildi.`
      );
    } else {
      console.log('Yetersiz kaynak!');
    }
  }
}

module.exports = Clan;

// Örnek Kullanım
const newClan = new Clan('Savunucular', 'aroxygen');
console.log(`Klan adı: ${newClan.name}, Lider: ${newClan.leader}`);