import { ApiFetch } from "./api-fetch.js";
import { showDayData } from "./display.js";

const location = document.querySelector(".location");
const startDate = document.querySelector(".startDate");
const endDate = document.querySelector(".endDate");
const submitButton = document.querySelector(".submit");
const locationRetrieved = document.querySelector(".locationRetrieved");
const backButton = document.querySelector(".back");
const forwardButton = document.querySelector(".forwards");

const weatherApi = new ApiFetch("ZAK5CDFTNMMDMY556PVDS5GNQ");

let currentWeatherData = 0;
let currentPage = 0

submitButton.addEventListener("click", () => {
  const locationInput = location.value;
  const startDateInput = startDate.value;
  const endDateInput = endDate.value;
  locationRetrieved.textContent = locationInput.value;
  weatherApi
    .getForecastDates(locationInput, startDateInput, endDateInput)
    .then((weatherData)=>{
      currentWeatherData = weatherData
      showDayData(weatherData, currentPage)
    })
});

backButton.addEventListener("click", () => {
  if (currentPage > 0) { 
    currentPage = currentPage - 1;
    showDayData(currentWeatherData, currentPage);
  }
});

forwardButton.addEventListener("click", () => {
  if (currentPage < currentWeatherData.days.length - 1) {
    currentPage = currentPage + 1;
    showDayData(currentWeatherData, currentPage);
  }
});