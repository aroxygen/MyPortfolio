const Building = require('./models/buildingSystem');

const myBuilding = new Building('Savunma Kulesi', 'Defense', 10);
console.log(`${myBuilding.name} başlangıç seviyesi: ${myBuilding.level}`);
myBuilding.upgrade({ wood: 500, clay: 400, iron: 300 });