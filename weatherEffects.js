// İklim ve Hava Durumu
function applyWeatherEffects(weather, attackerPower, defenderPower) {
  if (weather === "rain") {
    attackerPower *= 0.9; // Yağmur saldırıyı etkiler
    defenderPower *= 1.1; // Savunmayı güçlendirir
  } else if (weather === "fog") {
    attackerPower *= 0.8; // Sis saldırıyı daha da zayıflatır
  }
  return { attackerPower, defenderPower };
}

// Örnek Kullanım
const weather = "rain";
let powers = applyWeatherEffects(weather, 200, 150);
console.log("Hava Durumu Etkileri:", powers);