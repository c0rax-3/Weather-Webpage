import { ApiFetch } from "./weather/api-fetch.js";
import { showDayData , clearError , displayError} from "./weather/display.js";
import { validateForecastInput } from "./weather/validation.js";
import { NetworkError } from "./utils/error.js";

const location = document.querySelector(".location");
const startDate = document.querySelector(".startDate");
const endDate = document.querySelector(".endDate");
const submitButton = document.querySelector(".submit");
const backButton = document.querySelector(".back");
const forwardButton = document.querySelector(".forwards");

const weatherApi = new ApiFetch("ZAK5CDFTNMMDMY556PVDS5GNQ");

let currentWeatherData = 0;
let currentPage = 0;

submitButton.addEventListener("click", () => {
  currentPage = 0;
  clearError()
  const locationInput = location.value;
  const startDateInput = startDate.value;
  let endDateInput = endDate.value;
  if (endDateInput === "") {
    endDateInput = startDateInput;
  }
  try {
    const { normalisedLocation, normalisedStartDate, normalisedEndDate } =
      validateForecastInput(locationInput, startDateInput, endDateInput);
    location.textContent = normalisedLocation;
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
        console.error(reason);
        if (reason instanceof NetworkError) {
          displayError(reason.checkError())
          return;
        }
        displayError(reason);
      });
  } catch (errorMessage) {
    displayError(errorMessage)
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
