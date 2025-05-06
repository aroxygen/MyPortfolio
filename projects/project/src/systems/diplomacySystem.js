// Diplomasi Sistemi
class Diplomacy {
  constructor() {
    this.agreements = []; // Oyuncular arası anlaşmalar
  }

  // Yeni anlaşma oluştur
  createAgreement(player1, player2, type, duration) {
    const agreement = {
      players: [player1, player2],
      type, // Örneğin: "Non-Aggression", "Trade", "Defense"
      duration, // Anlaşma süresi (örneğin, 7 gün)
      startDate: new Date(),
      status: 'Active',
    };
    this.agreements.push(agreement);
    console.log(`Yeni anlaşma: ${type} (${player1} - ${player2})`);
  }

  // Anlaşmayı boz
  breakAgreement(player1, player2) {
    const agreement = this.agreements.find(
      (a) =>
        a.players.includes(player1) &&
        a.players.includes(player2) &&
        a.status === 'Active'
    );
    if (agreement) {
      agreement.status = 'Broken';
      console.log(
        `Anlaşma bozuldu: ${agreement.type} (${player1} - ${player2})`
      );
      // Ceza mekanizması
      this.applyPenalty(player1, player2);
    } else {
      console.log('Aktif bir anlaşma bulunamadı.');
    }
  }

  // Ceza mekanizması
  applyPenalty(breaker, otherPlayer) {
    console.log(
      `${breaker} anlaşmayı bozduğu için ceza alıyor. (${otherPlayer} ile ilişkiler kötüleşti!)`
    );
    // Ceza mantığı burada uygulanabilir (örneğin, itibar kaybı)
  }

  // Anlaşma durumunu kontrol et
  checkAgreements() {
    const now = new Date();
    this.agreements.forEach((agreement) => {
      const endDate = new Date(
        agreement.startDate.getTime() + agreement.duration * 24 * 60 * 60 * 1000
      );
      if (now > endDate && agreement.status === 'Active') {
        agreement.status = 'Expired';
        console.log(
          `Anlaşma sona erdi: ${agreement.type} (${agreement.players.join(
            ' - '
          )})`
        );
      }
    });
  }
}

module.exports = Diplomacy;

// Örnek Kullanım
const diplomacy = new Diplomacy();
diplomacy.createAgreement('Player1', 'Player2', 'Non-Aggression', 7);
diplomacy.breakAgreement('Player1', 'Player2'); // Anlaşmayı boz
diplomacy.checkAgreements();