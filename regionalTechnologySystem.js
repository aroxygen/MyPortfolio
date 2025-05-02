// Bölgesel Teknolojiler
class RegionalTechnology extends Technology {
  constructor(name, category, cost, timeToResearch, region, requirements = []) {
    super(name, category, cost, timeToResearch, requirements);
    this.region = region; // Teknolojinin aktif olduğu bölge
  }

  // Bölge kontrolü
  isAvailableInRegion(region) {
    return this.region === region;
  }
}

// Örnek Kullanım
const mountainMining = new RegionalTechnology(
  'Mountain Mining Efficiency',
  'Production',
  { wood: 50, gold: 100 },
  10,
  'Mountain'
);

const forestLogging = new RegionalTechnology(
  'Forest Logging Efficiency',
  'Production',
  { wood: 200, gold: 50 },
  15,
  'Forest'
);

const currentRegion = 'Mountain';

if (mountainMining.isAvailableInRegion(currentRegion)) {
  mountainMining.startResearch(playerResources);
} else {
  console.log(`${mountainMining.name} bu bölgede kullanılamaz.`);
}

if (forestLogging.isAvailableInRegion(currentRegion)) {
  forestLogging.startResearch(playerResources);
} else {
  console.log(`${forestLogging.name} bu bölgede kullanılamaz.`);
}