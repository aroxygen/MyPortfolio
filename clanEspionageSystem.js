class Clan {
  constructor(name) {
    this.name = name; // Klan adı
    this.reputation = 0; // Klan itibarı
  }

  // Casusluk operasyonu
  conductEspionage(targetClan, spy) {
    console.log(`${spy.name} ${targetClan.name} klanına casusluk yapıyor...`);
    // Casusluk sonucu hesaplama
    const successChance = spy.level * 10; // Casusun seviyesi başarı oranını etkiler
    const randomRoll = Math.random() * 100;

    if (randomRoll <= successChance) {
      this.reputation += 10;
      console.log(
        `${spy.name} başarılı oldu! ${this.name} klanı itibarı: ${this.reputation}`
      );
    } else {
      console.log(`${spy.name} başarısız oldu ve yakalandı!`);
    }
  }
}

// Örnek Kullanım
const clan1 = new Clan("Savaşçılar");
const clan2 = new Clan("Barışçılar");

const spy = new Spy("Gölge", "Bilgi Toplama");
clan1.conductEspionage(clan2, spy);