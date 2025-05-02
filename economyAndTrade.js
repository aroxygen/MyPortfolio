// Köy Ekonomisi ve Ticaret
function initiateTrade(giveResource, giveAmount, takeResource, takeAmount) {
  if (window[giveResource] >= giveAmount) {
    window[giveResource] -= giveAmount;
    window[takeResource] += takeAmount;
    return "Takas başarılı!";
  } else {
    return "Yetersiz kaynak!";
  }
}