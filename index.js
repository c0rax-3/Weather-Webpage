import { ApiFetch } from "./api-fetch.js";
import { showDayData } from "./display.js";
import { validateForecastInput } from "./validation.js";

const location = document.querySelector(".location");
const startDate = document.querySelector(".startDate");
const endDate = document.querySelector(".endDate");
const submitButton = document.querySelector(".submit");
const locationRetrieved = document.querySelector(".locationRetrieved");
const backButton = document.querySelector(".back");
const forwardButton = document.querySelector(".forwards");
const errorDisplay = document.querySelector(".error");

const weatherApi = new ApiFetch("ZAK5CDFTNMMDMY556PVDS5GNQ");

let currentWeatherData = 0;
let currentPage = 0;

submitButton.addEventListener("click", () => {
  currentPage = 0;
  errorDisplay.textContent = "";
  const locationInput = location.value;
  const startDateInput = startDate.value;
  let endDateInput = endDate.value;
  if (endDateInput === "") {
    endDateInput = startDateInput;
  }
  const { normalisedLocation, normalisedStartDate, normalisedEndDate } =
    validateForecastInput(locationInput, startDateInput, endDateInput);
  if (errorDisplay.textContent === "") {
    locationRetrieved.textContent = normalisedLocation.value;
    weatherApi
      .getForecastDates(
        normalisedLocation,
        normalisedStartDate,
        normalisedEndDate,
      )
      .then((weatherData) => {
        currentWeatherData = weatherData;
        showDayData(weatherData, currentPage);
      })
      .catch((reason) => {
        errorDisplay.textContent = `${reason} Error: Failed to fetch data, make sure you have inputed your values correctly`;
      });
  }
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
