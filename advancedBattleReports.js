// Gelişmiş Savaş Raporları
function generateBattleReport(attacker, defender, result) {
  const report = `
    📅 Tarih: ${new Date().toLocaleString()}
    🏹 Saldıran Güç: ${result.attackerPower}
    🛡️ Savunan Güç: ${result.defenderPower}
    🎯 Sonuç: ${result.winner === "attacker" ? "Saldırı Başarılı" : "Saldırı Başarısız"}
    💔 Kaybedilen Saldırgan Birimleri: ${result.attackerLoss}
    💔 Kaybedilen Savunan Birimleri: ${result.defenderLoss}
    💰 Ganimet: ${result.loot}
  `;
  console.log(report);
  return report;
}