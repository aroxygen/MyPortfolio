function calculateBattle(attacker, defender) {
  // Örnek birim istatistikleri
  const unitStats = {
    spear: { attack: 10, defense: 20 },
    sword: { attack: 25, defense: 15 },
    axe: { attack: 30, defense: 10 },
    archer: { attack: 20, defense: 25 }
  };

  let attackerPower = 0;
  let defenderPower = 0;

  // Saldırgan gücünü hesapla
  for (const [unit, count] of Object.entries(attacker)) {
    attackerPower += (unitStats[unit].attack * count);
  }

  // Savunma gücünü hesapla
  for (const [unit, count] of Object.entries(defender)) {
    defenderPower += (unitStats[unit].defense * count);
  }

  // Sonuç Hesaplama
  let result;
  if (attackerPower > defenderPower) {
    result = {
      winner: 'attacker',
      loot: Math.floor((attackerPower - defenderPower) / 2),
      attackerLoss: Math.floor(defenderPower / 10),
      defenderLoss: defenderPower
    };
  } else {
    result = {
      winner: 'defender',
      loot: 0,
      attackerLoss: attackerPower,
      defenderLoss: Math.floor(attackerPower / 10)
    };
  }

  return result;
}

// Örnek Kullanım
const attacker = { spear: 100, sword: 50, axe: 20 };
const defender = { spear: 80, archer: 40 };

const battleResult = calculateBattle(attacker, defender);
console.log('Savaş Sonucu:', battleResult);