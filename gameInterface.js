// Dinamik sayaç fonksiyonu
function startCountdown(element, duration) {
  let remainingTime = duration; // Saniye cinsinden süre
  const interval = setInterval(() => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    element.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(interval);
      element.textContent = "Tamamlandı!";
    }
  }, 1000);
}

// Örnek kullanım
const timers = document.querySelectorAll('.timer');
timers.forEach(timer => {
  const duration = parseInt(timer.dataset.duration); // Veriyi HTML'den al
  startCountdown(timer, duration);
});

// İnşaat hızlandırma butonlarına tıklama
document.querySelectorAll('.boost').forEach(button => {
  button.addEventListener('click', function() {
    alert("İnşaat hızlandırıldı!");
    // Burada backend ile iletişim kurulabilir
  });
});