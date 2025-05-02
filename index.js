// Sistemleri içe aktar
const ClanStorage = require('./clanStorage');
const TrainingCenter = require('./clanTrainingCenter');
const BuildingDefense = require('./clanBuildingDefense');
const Technology = require('./clanDynamicTechnologies');
const ClanMission = require('./clanMissions');
const ClanTournament = require('./clanTournaments');

// 1. Klan Deposu Testi
console.log("\n--- Klan Deposu Testi ---");
const clanStorage = new ClanStorage(5000);
clanStorage.addResources("wood", 1000);
clanStorage.addResources("gold", 500);
console.log("Depo Durumu:", clanStorage.getStorageStatus());
clanStorage.removeResources("wood", 500);
console.log("Depo Durumu:", clanStorage.getStorageStatus());

// 2. Eğitim Merkezi Testi
console.log("\n--- Eğitim Merkezi Testi ---");
const trainingCenter = new TrainingCenter();
trainingCenter.calculateTrainingTime(60); // 60 saniyelik eğitim
trainingCenter.upgrade();
trainingCenter.calculateTrainingTime(60);

// 3. Bina Savunması Testi
console.log("\n--- Bina Savunması Testi ---");
const buildingDefense = new BuildingDefense();
buildingDefense.simulateAttack(150); // 150 gücünde saldırı
buildingDefense.upgrade();
buildingDefense.simulateAttack(150);

// 4. Teknoloji Araştırması Testi
console.log("\n--- Teknoloji Araştırması Testi ---");
const clanResources = { wood: 2000, stone: 2000, gold: 1000 };
const barbarDefenseTech = new Technology(
  "Barbar Saldırısı Önleme",
  { wood: 1000, stone: 1000, gold: 500 },
  5, // 5 saniyelik araştırma
  { defenseBoost: 20 }
);
barbarDefenseTech.startResearch(clanResources);
console.log("Kalan Kaynaklar:", clanResources);

// 5. Klan Görevleri Testi
console.log("\n--- Klan Görevleri Testi ---");
const woodGatheringMission = new ClanMission(
  "Odun Toplama",
  5000,
  { reputation: 10 }
);
woodGatheringMission.contribute(2000);
woodGatheringMission.contribute(3000);

// 6. Klan Turnuvaları Testi
console.log("\n--- Klan Turnuvaları Testi ---");
const tournament = new ClanTournament("Teknoloji Yarışı", { gold: 1000 });
tournament.addParticipant({ name: "Savaşçılar" });
tournament.addParticipant({ name: "Barışçılar" });
tournament.determineWinner();