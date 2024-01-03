function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-form-input");
  let city = searchInput.value;

  let apiKey = "6ot20ada7f719432a222baf96f0e9bb0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let currentTemp = Math.round(response.data.temperature.current);
  let city = response.data.city;

  let currentTempValue = document.querySelector(".current-weather-temp-value");
  currentTempValue.innerHTML = currentTemp;

  let currentCity = document.querySelector(".current-weather-city");
  currentCity.innerHTML = city;
}

let searchCityForm = document.querySelector("#search-form");
searchCityForm.addEventListener("submit", search);
