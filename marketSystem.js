// Pazar ve Ticaret Sistemi
class Market {
  constructor() {
    this.listings = []; // Satılık arsa veya kaynaklar
  }

  listForSale(item, price, seller) {
    this.listings.push({ item, price, seller });
  }

  purchase(itemIndex, buyer) {
    const listing = this.listings[itemIndex];
    if (listing) {
      listing.item.transferOwnership(buyer);
      this.listings.splice(itemIndex, 1); // İlana son ver
      return `${buyer} satın aldı: ${listing.item.type}`;
    }
    return "Satın alma başarısız!";
  }
}

module.exports = Market;