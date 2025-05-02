class SpyMission {
  constructor(name, reward, difficulty) {
    this.name = name; // Görev adı
    this.reward = reward; // Görev ödülü
    this.difficulty = difficulty; // Zorluk seviyesi (%)
    this.status = "Pending"; // "Pending", "Success", "Failed"
  }

  // Görevi başlat
  start(spy) {
    console.log(`${spy.name} ${this.name} görevine başladı...`);
    const successChance = spy.level * 10 - this.difficulty; // Başarı oranı
    const randomRoll = Math.random() * 100;

    if (randomRoll <= successChance) {
      this.status = "Success";
      console.log(
        `${this.name} görevi başarıyla tamamlandı! Ödül: ${this.reward}`
      );
    } else {
      this.status = "Failed";
      console.log(`${this.name} görevi başarısız oldu.`);
    }
  }
}

// Örnek Kullanım
const mission = new SpyMission("Hedef Bilgi Toplama", "Savunma Planı", 30);
mission.start(spy1);