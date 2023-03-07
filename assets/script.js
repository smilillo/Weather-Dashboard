
let apiKey = "8171c8961d2b42a50f614d8d11709150";
// let city;
// let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
// fetch(queryURL)

function getCurrentWeather(data) {
  let currentTemp = weather.main.temp;
  let currentWind - weather.wind.speed;
  let currentHumidity = weather.main.humidity;
  let iconURL = "https://openweathermap.org/img/wn/10d@2x.png";
  }

function getForecast() {
  // Create Cards for 5 Days
  let cardContainer = document.createElement("div");
  let cardTitle = document.createElement("h3");
  cardTitle.textContent = "5-Day Forecast: ";
  cardContainer.append(cardTitle);
  
  let forecastTemp = document.createElement("h4");
  let forecastWind = document.createElement("h4");
  let forecastHumidity = document.createElement("h4");
  let forecastIcon = "https://openweathermap.org/img/wn/10d@2x.png";
}

// Search History List + Local 
// 
 
