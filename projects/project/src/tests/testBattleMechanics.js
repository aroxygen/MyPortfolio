// Savaş Mekaniği Test Kodu
const unitStats = {
  spear: { attack: 10, defense: 20 },
  sword: { attack: 25, defense: 15 },
  axe: { attack: 30, defense: 10 },
  archer: { attack: 20, defense: 25 },
  knight: { attack: 50, defense: 40, special: "criticalStrike" }, // Şövalye
  lightCavalry: { attack: 40, defense: 20, special: "flanking" }, // Hafif Süvari
  heavyCavalry: { attack: 60, defense: 50, special: "charge" } // Zırhlı Süvari
};

// Özel yeteneklerin uygulanması
function applySpecialAbility(unit, enemyUnit) {
  if (unit.special === "criticalStrike") {
    return unit.attack * 1.5; // Şövalyeler için kritik vuruş
  } else if (unit.special === "flanking") {
    return unit.attack * 1.2; // Hafif Süvariler için flanking bonusu
  } else if (unit.special === "charge") {
    return (unit.attack + enemyUnit.defense) * 0.8; // Zırhlı Süvariler için "Charge" etkisi
  }
  return unit.attack;
}

// Savaş hesaplama fonksiyonu
function calculateBattle(attacker, defender) {
  let attackerPower = 0;
  let defenderPower = 0;

  // Saldırgan gücünü hesapla
  for (const [unit, count] of Object.entries(attacker)) {
    attackerPower += applySpecialAbility(unitStats[unit] || {}, unitStats[unit]) * count;
  }

  // Savunmacı gücünü hesapla
  for (const [unit, count] of Object.entries(defender)) {
    defenderPower += (unitStats[unit]?.defense || 0) * count;
  }

  // Sonuç hesaplama
  return attackerPower > defenderPower
    ? { winner: "attacker", loot: Math.floor((attackerPower - defenderPower) / 2) }
    : { winner: "defender" };
}

// Test Senaryoları
const scenarios = [
  {
    attacker: { knight: 5, lightCavalry: 10 },
    defender: { spear: 20, archer: 15 },
    description: "Şövalyeler ve Hafif Süvariler vs Mızraklılar ve Okçular"
  },
  {
    attacker: { heavyCavalry: 8, axe: 15 },
    defender: { sword: 10, spear: 10 },
    description: "Zırhlı Süvariler ve Balta Kullanıcıları vs Kılıçlılar ve Mızraklılar"
  },
  {
    attacker: { knight: 6, heavyCavalry: 4 },
    defender: { sword: 12, spear: 12, archer: 8 },
    description: "Şövalyeler ve Zırhlı Süvariler vs Karışık Bir Savunma Gücü"
  }
];

// Testleri çalıştır
scenarios.forEach((scenario, index) => {
  const result = calculateBattle(scenario.attacker, scenario.defender);
  console.log(`Test ${index + 1}: ${scenario.description}`);
  console.log("Sonuç:", result);
  console.log("---");
});