function showDate(date) {
  let days = ["Sun", "Mon", "Tue", "wed", "Thu", "Fri", "Sat"];

  let currentDay = days[date.getDay()];
  let currentHour = date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinute = date.getMinutes();
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }
  let dateResult = `${currentDay} ${currentHour}:${currentMinute}`;
  return dateResult;
}

let currentDay = document.querySelector("#current-day");
currentDay.innerHTML = showDate(new Date());

let celcius = document.querySelector("#celcius");
let fahrenheit = document.querySelector("#fahrenheit");
let currentTemperature = document.querySelector("#current-temperature");

function showWeather(response) {
  let showCity = document.querySelector("#city");
  showCity.innerHTML = response.data.name;
  let showTemp = document.querySelector("#temp");
  showTemp.innerHTML = Math.round(response.data.main.temp);
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "eed8d05fec3c6b3131b11e69c0d16b90";
  let units = "metric";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

function submitHere(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = city;
  searchCity(city);
}

function getlocation(location) {
  let apiKey = "eed8d05fec3c6b3131b11e69c0d16b90";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentLocation(getLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", submitHere);
