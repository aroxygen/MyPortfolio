// Bina Savunması: Barbar veya diğer klanların saldırılarına karşı savunma
class BuildingDefense {
  constructor(level = 1) {
    this.level = level; // Savunma seviyesi
    this.defensePower = level * 100; // Savunma gücü
  }

  // Savunma yükseltme
  upgrade() {
    this.level++;
    this.defensePower = this.level * 100;
    console.log(
      `Bina savunması ${this.level}. seviyeye yükseltildi! Güç: ${this.defensePower}`
    );
  }

  // Saldırıyı simüle et
  simulateAttack(attackPower) {
    if (attackPower > this.defensePower) {
      console.log("Bina saldırıya dayanamadı!");
      return false;
    }
    console.log("Bina saldırıya başarıyla direndi!");
    return true;
  }
}

// Örnek Kullanım
const buildingDefense = new BuildingDefense();
buildingDefense.simulateAttack(150); // 150 gücünde saldırı
buildingDefense.upgrade();
buildingDefense.simulateAttack(150);