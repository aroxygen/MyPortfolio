class PeaceTreaty {
  constructor(clanA, clanB, duration) {
    this.clanA = clanA; // Birinci klan
    this.clanB = clanB; // İkinci klan
    this.duration = duration; // Anlaşma süresi (saniye)
    this.startTime = Date.now();
    this.endTime = this.startTime + duration * 1000; // Bitiş zamanı
    this.status = "Active"; // "Active", "Expired", "Broken"
  }

  // Barış antlaşmasının durumunu kontrol et
  checkStatus() {
    const currentTime = Date.now();
    if (currentTime >= this.endTime) {
      this.status = "Expired";
      console.log(
        `Barış antlaşması sona erdi: ${this.clanA.name} ve ${this.clanB.name}`
      );
    }
    return this.status;
  }

  // Barış antlaşmasını boz
  breakTreaty(breakingClan) {
    this.status = "Broken";
    console.log(
      `${breakingClan.name} barış antlaşmasını erken bozdu! Cezalar uygulanıyor.`
    );
    // Cezalar: itibar kaybı veya kaynak kaybı
    breakingClan.reputation -= 10;
    breakingClan.resources.gold -= 100;
  }
}

// Örnek Kullanım
const clanA = { name: "Savaşçılar", reputation: 50, resources: { gold: 500 } };
const clanB = { name: "Barışçılar", reputation: 60, resources: { gold: 600 } };

const treaty = new PeaceTreaty(clanA, clanB, 86400); // 24 saatlik barış
console.log("Barış Antlaşması Durumu:", treaty.checkStatus());

// 5 saniye sonra erken bozma
setTimeout(() => {
  treaty.breakTreaty(clanA);
  console.log("Barış Antlaşması Durumu:", treaty.checkStatus());
}, 5000);