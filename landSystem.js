// Arsa Sistemi: Satın alma ve bonus mekanikleri
class Land {
  constructor(type, owner = null) {
    this.type = type; // Örneğin: "forest", "mountain", "river"
    this.owner = owner;
    this.bonus = this.calculateBonus();
  }

  calculateBonus() {
    if (this.type === "forest") {
      return { wood: 5 }; // Orman bonusu
    } else if (this.type === "mountain") {
      return { iron: 5 }; // Dağ bonusu
    } else if (this.type === "river") {
      return { clay: 5 }; // Nehir bonusu
    }
    return {};
  }

  transferOwnership(newOwner) {
    this.owner = newOwner;
  }
}

module.exports = Land;