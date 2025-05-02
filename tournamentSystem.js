// Turnuva Sistemi
function startTournament(players) {
  let results = [];
  players.forEach(player => {
    const score = Math.floor(Math.random() * 100);
    results.push({ player, score });
  });
  results.sort((a, b) => b.score - a.score);
  return results;
}

// Örnek Kullanım
const players = ["Player1", "Player2", "Player3"];
let tournamentResults = startTournament(players);
console.log("Turnuva Sonuçları:", tournamentResults);