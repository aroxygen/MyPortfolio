// Birim istatistikleri ve savaş mekaniği aynı kalıyor
const unitStats = {
  spear: { attack: 10, defense: 20 },
  sword: { attack: 25, defense: 15 },
  axe: { attack: 30, defense: 10 },
  archer: { attack: 20, defense: 25 },
  knight: { attack: 50, defense: 40, special: "criticalStrike" },
  lightCavalry: { attack: 40, defense: 20, special: "flanking" },
  heavyCavalry: { attack: 60, defense: 50, special: "charge" },
};

function applySpecialAbility(unit, enemyUnit) {
  if (unit.special === "criticalStrike") {
    return unit.attack * 1.5;
  } else if (unit.special === "flanking") {
    return unit.attack * 1.2;
  } else if (unit.special === "charge") {
    return (unit.attack + enemyUnit.defense) * 0.8;
  }
  return unit.attack;
}

function calculateBattle(attacker, defender) {
  let attackerPower = 0;
  let defenderPower = 0;

  for (const [unit, count] of Object.entries(attacker)) {
    attackerPower += applySpecialAbility(unitStats[unit] || {}, unitStats[unit]) * count;
  }

  for (const [unit, count] of Object.entries(defender)) {
    defenderPower += (unitStats[unit]?.defense || 0) * count;
  }

  return attackerPower > defenderPower
    ? { winner: "attacker", loot: Math.floor((attackerPower - defenderPower) / 2) }
    : { winner: "defender" };
}

// Yeni Test Senaryoları
const extendedScenarios = [
  {
    attacker: { knight: 10 },
    defender: { spear: 15 },
    description: "Şövalyeler vs Mızraklılar - Şövalyeler mızraklılara karşı ne kadar etkili?"
  },
  {
    attacker: { lightCavalry: 15, archer: 10 },
    defender: { sword: 20 },
    description: "Hafif Süvariler ve Okçular vs Kılıçlılar - Hafif süvariler ve okçuların uzaktan saldırıları ne kadar etkili?"
  },
  {
    attacker: { heavyCavalry: 5, lightCavalry: 10 },
    defender: { spear: 25 },
    description: "Zırhlı ve Hafif Süvariler vs Mızraklılar - Süvariler yoğun savunmaya karşı ne yapabilir?"
  },
  {
    attacker: { knight: 10, archer: 15 },
    defender: { sword: 10, spear: 10 },
    description: "Şövalyeler ve Okçular vs Kılıçlılar ve Mızraklılar - Karışık saldırı ve savunma gücü."
  },
  {
    attacker: { axe: 20, lightCavalry: 10 },
    defender: { archer: 10, spear: 10 },
    description: "Baltacılar ve Hafif Süvariler vs Okçular ve Mızraklılar - Hızlı ve güçlü saldırılar."
  },
];

// Testleri çalıştır
extendedScenarios.forEach((scenario, index) => {
  const result = calculateBattle(scenario.attacker, scenario.defender);
  console.log(`Test ${index + 1}: ${scenario.description}`);
  console.log("Sonuç:", result);
  console.log("---");
});