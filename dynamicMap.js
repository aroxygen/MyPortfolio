// Dinamik Harita Özellikleri
function applyTerrainEffects(terrain, attackerPower, defenderPower) {
  if (terrain === "forest") {
    defenderPower *= 1.2; // Orman savunmayı artırır
  } else if (terrain === "hill") {
    attackerPower *= 0.9; // Tepelerde saldırı daha zordur
  }
  return { attackerPower, defenderPower };
}