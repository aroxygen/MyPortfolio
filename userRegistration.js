// Kullanıcı kayıt süreci: Otomatik köy oluşturma ve başlangıç özellikleri
const Village = require('./villageSystem');
const Clan = require('./clanSystem');

class User {
  constructor(username) {
    this.username = username;
    this.village = new Village(this.username); // Kullanıcı ile ilişkili köy otomatik oluşturulur
    this.clan = null; // Başlangıçta kullanıcı klansızdır
  }

  joinClan(clan) {
    this.clan = clan;
    clan.addMember(this);
  }

  getVillage() {
    return this.village;
  }
}

module.exports = User;

// Örnek Kullanım
const newUser = new User('aroxygen');
console.log(`Kullanıcı adı: ${newUser.username}, Köy sahibi: ${newUser.village.owner}`);