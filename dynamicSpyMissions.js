class DynamicSpyMission extends SpyMission {
  constructor(name, reward, difficulty, timeLimit) {
    super(name, reward, difficulty);
    this.timeLimit = timeLimit; // Görev süresi (saniye)
  }

  // Zaman sınırlı görev
  startTimedMission(spy) {
    console.log(`${spy.name} ${this.name} görevine başladı...`);
    setTimeout(() => {
      const successChance = spy.level * 10 - this.difficulty;
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
    }, this.timeLimit * 1000);
  }
}

// Örnek Kullanım
const timedMission = new DynamicSpyMission(
  "Zaman Sınırlı Bilgi Toplama",
  "Hedef Planı",
  40,
  60
);
timedMission.startTimedMission(spy1);