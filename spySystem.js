// Casusluk Sistemi
class Spy {
  constructor(name, level = 1) {
    this.name = name; // Casusun adı
    this.level = level; // Casusun seviyesi
    this.successRate = level * 10; // Başlangıç başarı oranı (%)
    this.experience = 0; // Deneyim puanı
  }

  // Casusun başarı oranını artırma
  increaseLevel() {
    this.level++;
    this.successRate += 5; // Her seviyede başarı oranı artar
    console.log(`${this.name} seviyeye yükseldi! Yeni seviye: ${this.level}`);
  }

  // Deneyim ekleme
  addExperience(points) {
    this.experience += points;
    console.log(`${this.name} ${points} deneyim kazandı.`);
    if (this.experience >= this.level * 100) {
      this.increaseLevel(); // Yeterli deneyime ulaşıldığında seviye atla
      this.experience = 0;
    }
  }
}

class SpyMission {
  constructor(name, duration, difficulty, reward) {
    this.name = name; // Görev adı
    this.duration = duration; // Görev süresi (saniye)
    this.difficulty = difficulty; // Görev zorluğu (%)
    this.reward = reward; // Görev ödülü (kaynak, bilgi vb.)
    this.status = 'Pending'; // "Pending", "Success", "Failed"
  }

  // Görevi başlat
  startMission(spy, targetDefense) {
    console.log(`${spy.name} ${this.name} görevine başladı...`);
    this.status = 'In Progress';

    // Görevin tamamlanması için zamanlayıcı
    setTimeout(() => {
      const successChance = spy.successRate - this.difficulty - targetDefense;
      const randomRoll = Math.random() * 100;

      if (randomRoll <= successChance) {
        this.status = 'Success';
        spy.addExperience(50); // Başarılı görevlerde deneyim kazan
        console.log(`${this.name} görevi başarıyla tamamlandı! Ödül: ${this.reward}`);
      } else {
        this.status = 'Failed';
        console.log(`${this.name} görevi başarısız oldu. Casus yakalandı!`);
      }
    }, this.duration * 1000);
  }
}

// Örnek Casuslar
const spy1 = new Spy('Gölge', 1);
const spy2 = new Spy('Gece Kuşu', 2);

// Örnek Görevler
const gatherInfo = new SpyMission('Bilgi Toplama', 60, 10, 'Hedef bilgisi');
const sabotage = new SpyMission('Sabotaj', 180, 30, 'Kaynak hasarı');
const inciteRebellion = new SpyMission('İsyan Tetikleme', 300, 50, 'Moral düşüşü');

// Hedef Savunması
const targetDefense = 20;

// Görev Başlatma
gatherInfo.startMission(spy1, targetDefense);
sabotage.startMission(spy2, targetDefense);