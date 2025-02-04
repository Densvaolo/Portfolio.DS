
const apiKey = "154f23834900d6e6bb010da67a8fb75f";
const city = "Stockholm";
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temperature");
const weatherDescription = document.getElementById("weather-description");
const cityName = document.getElementById("city-name");

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=sv`)
  .then(response => response.json())
  .then(data => {
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const city = data.name;


    weatherIcon.src = iconUrl;
    temperature.innerText = `${temp}°C`;
    weatherDescription.innerText = description.charAt(0).toUpperCase() + description.slice(1);
    cityName.innerText = city;
  })
  .catch(error => {
    console.error("Väder API-fel:", error);
  });