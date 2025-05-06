const unitStats = {
  spear: { 
    attack: 18, // Saldırı gücü artırıldı (15 → 18)
    defense: 35, // Savunma gücü korunuyor
    special: "antiCavalry" // Süvariye karşı güçlü
  },
  sword: { attack: 25, defense: 15 },
  axe: { 
    attack: 28, // Saldırı gücü düşürüldü (30 → 28)
    defense: 10 // Savunma gücü korunuyor
  },
  archer: { 
    attack: 20, 
    defense: 25, 
    special: "quickAim" // Hareketli birimlere karşı ekstra etkili
  },
  knight: { attack: 50, defense: 40, special: "criticalStrike" },
  lightCavalry: { attack: 40, defense: 20, special: "flanking" },
  heavyCavalry: { 
    attack: 60, 
    defense: 45, // Savunma gücü düşürüldü (50 → 45)
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
    ? { winner: "attacker", loot: Math.floor((attackerPower - defenderPower) / 3) } // Ganimet bölme oranı artırıldı (2 → 3)
    : { winner: "defender" };
}

// Test Senaryoları
const scenarios = [
  {
    attacker: { knight: 5, lightCavalry: 10 },
    defender: { spear: 20, archer: 15 },
    description: "Şövalyeler ve Hafif Süvariler vs Güçlendirilmiş Mızraklılar ve Okçular"
  },
  {
    attacker: { lightCavalry: 15, archer: 10 },
    defender: { spear: 25 },
    description: "Hafif Süvariler ve Okçular vs Süvariye Karşı Daha Güçlü Mızraklılar"
  },
  {
    attacker: { heavyCavalry: 8, axe: 15 },
    defender: { spear: 15, archer: 10 },
    description: "Zırhlı Süvariler ve Baltacılar vs Güçlendirilmiş Mızraklılar ve Okçular"
  },
];

// Testleri çalıştır
scenarios.forEach((scenario, index) => {
  const result = calculateBattle(scenario.attacker, scenario.defender);
  console.log(`Test ${index + 1}: ${scenario.description}`);
  console.log("Sonuç:", result);
  console.log("---");
});