// Casusluk Mekaniği
function scoutVillage(coords) {
  const scoutSuccess = Math.random() < 0.7; // %70 başarı şansı
  if (scoutSuccess) {
    return {
      defensePower: Math.floor(Math.random() * 200),
      resources: {
        wood: Math.floor(Math.random() * 500),
        clay: Math.floor(Math.random() * 500),
        iron: Math.floor(Math.random() * 500)
      }
    };
  } else {
    return "Casusluk başarısız!";
  }
}