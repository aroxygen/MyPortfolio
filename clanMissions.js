// Klan Görevleri: Klan üyelerinin katılabileceği bina ve teknoloji geliştirme görevleri
class ClanMission {
  constructor(name, goal, reward) {
    this.name = name; // Görev adı
    this.goal = goal; // Görev hedefi (örneğin, 5000 odun toplama)
    this.progress = 0; // Görev ilerlemesi
    this.reward = reward; // Görev ödülü
    this.completed = false; // Görev durumu
  }

  // Görev ilerletme
  contribute(amount) {
    this.progress += amount;
    if (this.progress >= this.goal) {
      this.completed = true;
      console.log(`${this.name} görevi tamamlandı! Ödül: ${this.reward}`);
    } else {
      console.log(
        `${this.name} görevi ilerletildi: ${this.progress}/${this.goal}`
      );
    }
  }
}

// Örnek Kullanım
const woodGatheringMission = new ClanMission(
  "Odun Toplama",
  5000,
  { reputation: 10 }
);

woodGatheringMission.contribute(2000);
woodGatheringMission.contribute(3000);