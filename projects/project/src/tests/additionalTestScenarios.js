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

  // Sonuç hesaplama (Ganimet düşürülmüş oranda hesaplanıyor)
  return attackerPower > defenderPower
    ? { winner: "attacker", loot: Math.floor((attackerPower - defenderPower) / 3) }
    : { winner: "defender" };
}

// Yeni Test Senaryoları
const newScenarios = [
  {
    attacker: { knight: 10, archer: 20 },
    defender: { spear: 30, sword: 10 },
    description: "Şövalyeler ve Okçular vs Mızraklılar ve Kılıçlılar"
  },
  {
    attacker: { lightCavalry: 15, axe: 25 },
    defender: { spear: 20, archer: 15 },
    description: "Hafif Süvariler ve Baltacılar vs Mızraklılar ve Okçular"
  },
  {
    attacker: { heavyCavalry: 10, sword: 20 },
    defender: { spear: 25, archer: 20 },
    description: "Zırhlı Süvariler ve Kılıçlılar vs Mızraklılar ve Okçular"
  },
  {
    attacker: { knight: 5, lightCavalry: 15, archer: 30 },
    defender: { spear: 40, sword: 20 },
    description: "Şövalyeler, Hafif Süvariler ve Okçular vs Mızraklılar ve Kılıçlılar"
  },
  {
    attacker: { axe: 30, archer: 30 },
    defender: { spear: 30, sword: 30 },
    description: "Baltacılar ve Okçular vs Mızraklılar ve Kılıçlılar"
  },
];

// Yeni senaryoları çalıştır
newScenarios.forEach((scenario, index) => {
  const result = calculateBattle(scenario.attacker, scenario.defender);
  console.log(`Test ${index + 1}: ${scenario.description}`);
  console.log("Sonuç:", result);
  console.log("---");
});