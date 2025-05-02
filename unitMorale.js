// Birlik Moral Sistemi
function calculateMorale(baseMorale, recentWins, recentLosses) {
  const moraleBoost = recentWins * 5; // Her kazanç için +5 moral
  const moralePenalty = recentLosses * 10; // Her kayıp için -10 moral
  return Math.max(0, baseMorale + moraleBoost - moralePenalty);
}

// Örnek Kullanım
let morale = calculateMorale(50, 2, 1); // 2 kazanç, 1 kayıp
console.log("Birlik Morali:", morale);