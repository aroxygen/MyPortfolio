// Dinamik Köy Savunması
function calculateDefensePower(baseDefense, wallLevel) {
  const wallBonus = wallLevel * 10; // Her seviyede +10 savunma bonusu
  return baseDefense + wallBonus;
}

// Örnek Kullanım
const baseDefense = 100;
const wallLevel = 3; // Duvar Seviyesi 3
const totalDefense = calculateDefensePower(baseDefense, wallLevel);
console.log("Toplam Savunma Gücü:", totalDefense);