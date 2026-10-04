import { ApiFetch } from "./api-fetch.js";
import { showReadableData } from "./display.js";

const location = document.querySelector(".location");
const startDate = document.querySelector(".startDate");
const endDate = document.querySelector(".endDate");
const submitButton = document.querySelector(".submit");
const locationRetrieved = document.querySelector(".locationRetrieved");
const backButton = document.querySelector(".back");
const forwardButton = document.querySelector(".forwards");

const weatherApi = new ApiFetch("ZAK5CDFTNMMDMY556PVDS5GNQ");

submitButton.addEventListener("click", () => {
  const locationInput = location.value;
  const startDateInput = startDate.value;
  const endDateInput = endDate.value;
  locationRetrieved.textContent = locationInput.value;
  weatherApi
    .getForecastDates(locationInput, startDateInput, endDateInput)
    .then(showReadableData);
});

backButton.addEventListener("click", () => {});

forwardButton.addEventListener("click", () => {});
