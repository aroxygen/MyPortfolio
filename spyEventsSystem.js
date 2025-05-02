class SpyEvent {
  constructor(eventName, duration) {
    this.eventName = eventName; // Etkinlik adı
    this.duration = duration; // Süre (saniye)
    this.active = false;
  }

  startEvent() {
    this.active = true;
    console.log(`${this.eventName} etkinliği başladı!`);
    setTimeout(() => {
      this.active = false;
      console.log(`${this.eventName} etkinliği sona erdi.`);
    }, this.duration * 1000);
  }
}

// Örnek Kullanım
const spyEvent = new SpyEvent("Casusların Günü", 300);
spyEvent.startEvent();