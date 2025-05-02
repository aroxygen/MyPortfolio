class Building {
  constructor(name, type, baseEffect = 0) {
    this.name = name;
    this.type = type;
    this.level = 1;
    this.baseEffect = baseEffect;
    this.upgradeCost = { wood: 100, clay: 80, iron: 50 };
    this.upgradeTime = 120;
  }

  calculateUpgradeCost() {
    return {
      wood: this.upgradeCost.wood * this.level,
      clay: this.upgradeCost.clay * this.level,
      iron: this.upgradeCost.iron * this.level,
    };
  }

  upgrade(resources) {
    const cost = this.calculateUpgradeCost();
    if (
      resources.wood >= cost.wood &&
      resources.clay >= cost.clay &&
      resources.iron >= cost.iron
    ) {
      resources.wood -= cost.wood;
      resources.clay -= cost.clay;
      resources.iron -= cost.iron;

      this.level += 1;
      console.log(`${this.name} seviyesi ${this.level} oldu!`);
    } else {
      console.log('Yetersiz kaynak!');
    }
  }
}

module.exports = Building;