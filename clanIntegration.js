// Klan ve Köy Entegrasyonu
const Clan = require('./clanSystem');
const Village = require('./villageSystem');

class ClanIntegration {
  constructor(clan) {
    this.clan = clan;
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

// Örnek Kullanım
const exampleClan = new Clan('Savunucular', 'aroxygen');
const village1 = new Village('aroxygen');
const village2 = new Village('player2');

const clanIntegration = new ClanIntegration(exampleClan);
clanIntegration.shareResources(village1, village2, 'wood', 50);