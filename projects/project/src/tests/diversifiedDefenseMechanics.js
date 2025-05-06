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
  },
  // Yeni Savunma Birimleri
  tower: { 
    attack: 15, 
    defense: 60, 
    special: "highGround" // Kuleler yüksek konum avantajına sahip
  },
  wall: { 
    attack: 0, 
    defense: 80, 
    special: "fortification" // Duvarlar tamamen savunmaya odaklı
  },
  catapult: { 
    attack: 40, 
    defense: 10, 
    special: "siegeWeapon" // Kuşatma silahları toplu hasar verir
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
  } else if (unit.special === "highGround") {
    return unit.attack * 1.2; // Kuleler yüksek konum avantajı ile %20 ek saldırı gücü
  } else if (unit.special === "fortification") {
    return unit.defense * 1.5; // Duvarlar savunma gücünü %50 artırır
  } else if (unit.special === "siegeWeapon") {
    return unit.attack * 1.5; // Kuşatma silahları toplu hasar verir
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

// Yeni Test Senaryoları (Savunma Çeşitlendirmesi)
const defenseScenarios = [
  {
    attacker: { knight: 10, lightCavalry: 15, archer: 20 },
    defender: { spear: 20, wall: 10, tower: 5 },
    description: "Şövalyeler, Hafif Süvariler ve Okçular vs Mızraklılar, Duvarlar ve Kuleler"
  },
  {
    attacker: { heavyCavalry: 10, axe: 20, archer: 30 },
    defender: { spear: 25, wall: 5, catapult: 10 },
    description: "Zırhlı Süvariler, Baltacılar ve Okçular vs Mızraklılar, Duvarlar ve Kuşatma Silahları"
  },
  {
    attacker: { axe: 35, lightCavalry: 10 },
    defender: { tower: 10, wall: 15, archer: 20 },
    description: "Baltacılar ve Hafif Süvariler vs Kuleler, Duvarlar ve Okçular"
  },
  {
    attacker: { knight: 10, heavyCavalry: 5, archer: 25 },
    defender: { spear: 30, tower: 10 },
    description: "Şövalyeler, Zırhlı Süvariler ve Okçular vs Mızraklılar ve Kuleler"
  },
  {
    attacker: { lightCavalry: 20, axe: 25, archer: 20 },
    defender: { wall: 20, catapult: 10, spear: 15 },
    description: "Hafif Süvariler, Baltacılar ve Okçular vs Duvarlar, Kuşatma Silahları ve Mızraklılar"
  },
];

// Savunma senaryolarını çalıştır
defenseScenarios.forEach((scenario, index) => {
  const result = calculateBattle(scenario.attacker, scenario.defender);
  console.log(`Test ${index + 1}: ${scenario.description}`);
  console.log("Sonuç:", result);
  console.log("---");
});