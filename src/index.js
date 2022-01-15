// Day Time //
let now = new Date();
function formatDateTime(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[now.getDay()];
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let today = document.querySelector("#current-date-time");
  today.innerHTML = `${day}, ${hour}:${minutes}`;
}
formatDateTime();

// Search Engine //

function searchCity(city) {
  let apiKey = `974a674da0c7eec22aa4769f587dfc4c`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function displayWeatherCondition(response) {
  document.querySelector("h1").innerhtml = response.data.name;
  document.querySelector("#temperature").innerhtml = Math.round(
    response.data.main.temp
  );
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-location-form").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = `974a674da0c7eec22aa4769f587dfc4c`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentLocation);

let form = document.querySelector("#search-button");
form.addEventListener("submit", handleSubmit);
