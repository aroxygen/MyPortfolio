// İklim Sistemi ve Hava Durumu Etkileri
class ClimateAndWeather {
  constructor() {
    this.currentSeason = 'Spring'; // Başlangıç mevsimi
    this.currentWeather = 'Clear'; // Hava durumu
    this.seasonEffects = {
      Spring: { wood: 1.1, food: 1.2 },
      Summer: { wood: 1.0, food: 1.5 },
      Fall: { wood: 1.2, food: 1.0 },
      Winter: { wood: 1.5, food: 0.8 },
    };
    this.weatherEffects = {
      Clear: { production: 1.0, defense: 1.0 },
      Rain: { production: 1.1, defense: 0.9 },
      Storm: { production: 0.8, defense: 0.7 },
      Drought: { production: 0.6, defense: 1.0 },
    };
    this.weatherForecast = []; // Hava durumu tahmini (örneğin, 3 gün sonrası)
  }

  // Mevsim değiştir
  changeSeason() {
    const seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
    const currentIndex = seasons.indexOf(this.currentSeason);
    this.currentSeason = seasons[(currentIndex + 1) % seasons.length];
    console.log(`Yeni mevsim: ${this.currentSeason}`);
  }

  // Hava durumunu değiştir
  changeWeather() {
    const weatherOptions = ['Clear', 'Rain', 'Storm', 'Drought'];
    this.currentWeather =
      weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
    console.log(`Yeni hava durumu: ${this.currentWeather}`);
  }

  // Hava durumu tahmini oluştur
  generateWeatherForecast(days = 3) {
    const weatherOptions = ['Clear', 'Rain', 'Storm', 'Drought'];
    this.weatherForecast = Array.from({ length: days }, () =>
      weatherOptions[Math.floor(Math.random() * weatherOptions.length)]
    );
    console.log(`Hava tahmini: ${this.weatherForecast.join(', ')}`);
  }

  // Mevcut etkileri al
  getCurrentEffects() {
    const seasonEffect = this.seasonEffects[this.currentSeason];
    const weatherEffect = this.weatherEffects[this.currentWeather];
    return {
      productionMultiplier: seasonEffect,
      weatherImpact: weatherEffect,
    };
  }
}

module.exports = ClimateAndWeather;

// Örnek Kullanım
const climateSystem = new ClimateAndWeather();
climateSystem.changeSeason();
climateSystem.changeWeather();
climateSystem.generateWeatherForecast();
console.log('Mevcut Etkiler:', climateSystem.getCurrentEffects());