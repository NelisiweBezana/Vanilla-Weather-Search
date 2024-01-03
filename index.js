function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-form-input");
  let currentCity = document.querySelector(".current-weather-city");
  currentCity.innerHTML = searchInput.value;
}

let searchCityForm = document.querySelector("#search-form");
searchCityForm.addEventListener("submit", showCity);
