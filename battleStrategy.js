// Saldırı Stratejileri
function applyStrategy(strategy, attackerPower, defenderPower) {
  if (strategy === "fast") {
    attackerPower *= 1.2;
    defenderPower *= 1.1;
  } else if (strategy === "tactical") {
    attackerPower *= 0.8;
    defenderPower *= 0.9;
  }
  return { attackerPower, defenderPower };
}