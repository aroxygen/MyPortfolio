class Tribute {
  constructor(demandingClan, payingClan, amount, resourceType) {
    this.demandingClan = demandingClan; // Vergi talep eden klan
    this.payingClan = payingClan; // Vergi ödeyen klan
    this.amount = amount; // Talep edilen miktar
    this.resourceType = resourceType; // Kaynak tipi ("gold", "wood", vb.)
    this.status = "Pending"; // "Pending", "Paid", "Refused"
  }

  // Vergi ödemesi
  payTribute() {
    if (this.payingClan.resources[this.resourceType] >= this.amount) {
      this.payingClan.resources[this.resourceType] -= this.amount;
      this.demandingClan.resources[this.resourceType] += this.amount;
      this.status = "Paid";
      console.log(
        `${this.payingClan.name} ${this.amount} ${this.resourceType} ödedi.`
      );
    } else {
      console.log(
        `${this.payingClan.name} ${this.amount} ${this.resourceType} ödeyemedi!`
      );
    }
  }

  // Vergi reddedildiğinde
  refuseTribute() {
    this.status = "Refused";
    console.log(
      `${this.payingClan.name}, ${this.demandingClan.name} klanının vergisini reddetti!`
    );
    // Opsiyonel: Savaş ilanı tetiklenebilir.
  }
}

// Örnek Kullanım
const demandingClan = {
  name: "Güçlü Klan",
  resources: { gold: 1000, wood: 500 },
};
const payingClan = {
  name: "Zayıf Klan",
  resources: { gold: 200, wood: 300 },
};

const tribute = new Tribute(demandingClan, payingClan, 100, "gold");
tribute.payTribute();
console.log("Vergi Durumu:", tribute.status);