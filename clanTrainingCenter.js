// TrainingCenter sınıfı
class TrainingCenter {
  constructor(level = 1) {
    this.level = level; // Eğitim merkezi seviyesi
    this.trainingSpeedBonus = level * 10; // Eğitim hız bonusu (%)
  }

  // Eğitim merkezi yükseltme
  upgrade() {
    this.level++;
    this.trainingSpeedBonus = this.level * 10;
    console.log(
      `Eğitim Merkezi ${this.level}. seviyeye yükseltildi! Eğitim hızı: %${this.trainingSpeedBonus}`
    );
  }

  // Eğitim süresi hesaplama
  calculateTrainingTime(baseTime) {
    const reducedTime = baseTime * (1 - this.trainingSpeedBonus / 100);
    console.log(`Eğitim Süresi: ${reducedTime} saniye`);
    return reducedTime;
  }
}

// Sınıfı dışa aktar
module.exports = TrainingCenter;