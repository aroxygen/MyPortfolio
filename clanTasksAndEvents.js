// Klan Görevleri ve Barbar Etkinlikleri

class Clan {
  constructor(name) {
    this.name = name; // Klan adı
    this.members = []; // Klan üyeleri
    this.reputation = 0; // Klan itibarı
  }

  // Klan Üyesi Ekle
  addMember(player) {
    this.members.push(player);
    console.log(`${player.name} klana katıldı: ${this.name}`);
  }

  // Barbar Görevlerini Tamamlama
  completeBarbarianTask(village, playerArmy) {
    const attackResult = village.attackVillage(playerArmy);

    if (attackResult.success) {
      this.reputation += 10; // Başarılı saldırıda itibar artışı
      console.log(
        `${this.name} klanı ${village.name} barbar köyünü yendi! İtibar: ${this.reputation}`
      );
    } else {
      console.log(
        `${this.name} klanı ${village.name} saldırısında başarısız oldu.`
      );
    }
    return attackResult;
  }
}

// Barbar Etkinlikleri
class BarbarianEvent {
  constructor(eventName, duration) {
    this.eventName = eventName;
    this.duration = duration; // Etkinlik süresi (saniye)
    this.active = false;
  }

  // Etkinliği Başlat
  startEvent() {
    this.active = true;
    console.log(`${this.eventName} etkinliği başladı!`);

    setTimeout(() => {
      this.active = false;
      console.log(`${this.eventName} etkinliği sona erdi.`);
    }, this.duration * 1000);
  }
}

// Örnek Kullanım
const clan = new Clan("Savaşçılar");
const barbarEvent = new BarbarianEvent("Barbar İstilası", 300);

// Clan Görevi
clan.addMember({ name: "Oyuncu1" });
clan.completeBarbarianTask(village2, playerArmy);

// Barbar Etkinliği
barbarEvent.startEvent();