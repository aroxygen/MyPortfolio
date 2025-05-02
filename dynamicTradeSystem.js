// Ticaret Mallarının Dinamik Değeri
class TradeMarket {
  constructor() {
    this.goods = {
      wood: { basePrice: 100, currentPrice: 100 },
      clay: { basePrice: 120, currentPrice: 120 },
      iron: { basePrice: 150, currentPrice: 150 },
    };
    this.demandMultiplier = {
      wood: 1.0,
      clay: 1.0,
      iron: 1.0,
    };
  }

  // Pazar fiyatlarını güncelle
  updateMarketPrices() {
    for (const good in this.goods) {
      const demand = this.demandMultiplier[good];
      this.goods[good].currentPrice = Math.floor(
        this.goods[good].basePrice * demand
      );
    }
    console.log('Pazar fiyatları güncellendi:', this.goods);
  }

  // Talebi değiştirme
  changeDemand(good, multiplier) {
    if (this.demandMultiplier[good]) {
      this.demandMultiplier[good] = multiplier;
      console.log(
        `${good} için talep çarpanı değiştirildi: ${multiplier}`
      );
    } else {
      console.log('Geçersiz ticaret malı.');
    }
  }

  // Ticaret malını satın alma
  buyGoods(good, amount, playerResources) {
    const totalCost = this.goods[good].currentPrice * amount;
    if (playerResources.gold >= totalCost) {
      playerResources.gold -= totalCost;
      console.log(
        `${amount} birim ${good} satın alındı. Harcanan altın: ${totalCost}`
      );
    } else {
      console.log('Yetersiz altın!');
    }
  }
}

module.exports = TradeMarket;

// Örnek Kullanım
const market = new TradeMarket();
market.updateMarketPrices();
market.changeDemand('wood', 1.5); // Odun talebi arttı
market.updateMarketPrices();