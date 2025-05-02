// Gelişmiş Saldırı Fonksiyonu
function enhancedSendAttack() {
  const coords = document.getElementById('targetCoords').value;
  const spear = parseInt(document.getElementById('sendSpear').value);
  const sword = parseInt(document.getElementById('sendSword').value);
  const axe = parseInt(document.getElementById('sendAxe').value);
  const totalUnits = spear + sword + axe;

  if (!coords.match(/^[0-9]{3}\|[0-9]{3}$/)) {
    document.getElementById('attackStatus').innerText = 'Geçersiz koordinat!';
    return;
  }
  if (totalUnits <= 0) {
    document.getElementById('attackStatus').innerText = 'Birim seçilmedi!';
    return;
  }

  // Örnek birim istatistikleri
  const unitStats = {
    spear: { attack: 10, defense: 20 },
    sword: { attack: 25, defense: 15 },
    axe: { attack: 30, defense: 10 }
  };

  // Saldırgan ve Savunan Taraf Güç Hesaplama
  const attacker = { spear, sword, axe };
  const defender = { spear: Math.floor(Math.random() * 50), sword: Math.floor(Math.random() * 30), axe: Math.floor(Math.random() * 20) };

  let attackerPower = 0;
  let defenderPower = 0;

  for (const [unit, count] of Object.entries(attacker)) {
    attackerPower += (unitStats[unit].attack * count);
  }

  for (const [unit, count] of Object.entries(defender)) {
    defenderPower += (unitStats[unit].defense * count);
  }

  // Savaş Sonucu Hesaplama
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

  // Savaş Raporu
  const report = `[${new Date().toLocaleString()}] ${coords} köyüne saldırı ${result.winner === 'attacker' ? 'başarılı' : 'başarısız'}. 
  Ganimet: ${result.loot} odun. 
  Kaybedilen saldırgan birimleri: ${result.attackerLoss}. 
  Kaybedilen savunan birimleri: ${result.defenderLoss}.`;

  const li = document.createElement('li');
  li.innerText = report;
  document.getElementById('reportList').prepend(li);
  document.getElementById('attackStatus').innerText = 'Sefer gönderildi!';
}