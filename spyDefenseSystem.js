class SpyDefense {
  constructor(level = 1) {
    this.level = level; // Savunma seviyesini belirler
    this.detectionRate = level * 10; // Casus yakalama oranı (%)
  }

  // Gözetleme kulesini yükselt
  upgrade() {
    this.level++;
    this.detectionRate = this.level * 10;
    console.log(
      `Gözetleme kulesi ${this.level}. seviyeye yükseltildi! Yakalama oranı: %${this.detectionRate}`
    );
  }

  // Casus yakalama kontrolü
  detectSpy(spy) {
    const randomRoll = Math.random() * 100;
    if (randomRoll <= this.detectionRate) {
      console.log(`Casus ${spy.name} yakalandı!`);
      return true;
    } else {
      console.log(`Casus ${spy.name} kaçmayı başardı.`);
      return false;
    }
  }
}

// Örnek Kullanım
const watchTower = new SpyDefense();
watchTower.upgrade(); // Gözetleme kulesi yükseltildi