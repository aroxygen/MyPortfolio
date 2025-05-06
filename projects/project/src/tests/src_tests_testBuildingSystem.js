const Building = require('../models/buildingSystem');

test('Bina yükseltme testi', () => {
  const building = new Building('Savunma Kulesi', 'Defense', 10);
  const resources = { wood: 500, clay: 400, iron: 300 };

  building.upgrade(resources);

  expect(building.level).toBe(2);
  expect(resources.wood).toBe(400);
  expect(resources.clay).toBe(320);
  expect(resources.iron).toBe(250);
});