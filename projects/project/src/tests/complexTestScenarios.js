const unitStats = {
  spear: { 
    attack: 18, 
    defense: 35, 
    special: "antiCavalry" 
  },
  sword: { 
    attack: 25, 
    defense: 15 
  },
  axe: { 
    attack: 28, 
    defense: 10 
  },
  archer: { 
    attack: 20, 
    defense: 25, 
    special: "quickAim" 
  },
  knight: { 
    attack: 50, 
    defense: 40, 
    special: "criticalStrike" 
  },
  lightCavalry: { 
    attack: 40, 
    defense: 20, 
    special: "flanking" 
  },
  heavyCavalry: { 
    attack: 60, 
    defense: 45, 
    special: "charge" 
  }
};

// Özel yeteneklerin uygulanması
function applySpecialAbility(unit, enemyUnit) {
  if (unit.special === "criticalStrike") {
    return unit.attack * 1.5; // Şövalyeler için kritik vuruş
  } else if (unit.special === "flanking") {
    return unit.attack * 1.2; // Hafif Süvariler için yan saldırı bonusu
  } else if (unit.special === "charge") {
    return (unit.attack + enemyUnit.defense) * 0.8; // Zırhlı Süvariler için şarj saldırısı
  } else if (unit.special === "antiCavalry" && enemyUnit.special && ["flanking", "charge"].includes(enemyUnit.special)) {
    return unit.attack * 1.6; // Mızraklıların saldırı gücü süvariye karşı %60 artırıldı
  } else if (unit.special === "quickAim" && enemyUnit.special && ["flanking", "charge"].includes(enemyUnit.special)) {
    return unit.attack * 1.4; // Okçuların hareketli birimlere karşı gücü %40 artırıldı
  }
  return unit.attack;
}

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
    ? { winner: "attacker", loot: Math.floor((attackerPower - defenderPower) / 3) }
    : { winner: "defender" };
}

// Karmaşık Test Senaryoları
const complexScenarios = [
  {
    attacker: { knight: 8, lightCavalry: 15, archer: 20 },
    defender: { spear: 25, sword: 10, archer: 15 },
    description: "Şövalyeler, Hafif Süvariler ve Okçular vs Mızraklılar, Kılıçlılar ve Okçular"
  },
  {
    attacker: { heavyCavalry: 10, axe: 20, archer: 30 },
    defender: { spear: 30, lightCavalry: 5, knight: 5 },
    description: "Zırhlı Süvariler, Baltacılar ve Okçular vs Mızraklılar, Hafif Süvariler ve Şövalyeler"
  },
  {
    attacker: { axe: 35, lightCavalry: 10 },
    defender: { spear: 25, sword: 15, archer: 20 },
    description: "Baltacılar ve Hafif Süvariler vs Mızraklılar, Kılıçlılar ve Okçular"
  },
  {
    attacker: { knight: 10, heavyCavalry: 5, archer: 25 },
    defender: { spear: 40, sword: 15 },
    description: "Şövalyeler, Zırhlı Süvariler ve Okçular vs Mızraklılar ve Kılıçlılar"
  },
  {
    attacker: { lightCavalry: 20, axe: 25, archer: 20 },
    defender: { spear: 30, knight: 10, sword: 10 },
    description: "Hafif Süvariler, Baltacılar ve Okçular vs Mızraklılar, Şövalyeler ve Kılıçlılar"
  },
];

// Karmaşık senaryoları çalıştır
complexScenarios.forEach((scenario, index) => {
  const result = calculateBattle(scenario.attacker, scenario.defender);
  console.log(`Test ${index + 1}: ${scenario.description}`);
  console.log("Sonuç:", result);
  console.log("---");
});