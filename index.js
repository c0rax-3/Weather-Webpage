import { ApiFetch } from "./api-fetch.js";

const location = document.querySelector(".location");
const startDate = document.querySelector(".startDate");
const endDate = document.querySelector(".endDate");
const submitButton = document.querySelector(".submit");

function showReadableData(location, startDate, endDate) {
  const weatherApi = new ApiFetch("ZAK5CDFTNMMDMY556PVDS5GNQ");
  const weatherPromise = weatherApi.getForecastDates(location, startDate, endDate)
  weatherPromise.then((weatherData)=>{
    console.log(weatherData)})
}

submitButton.addEventListener("click", () => {
  const locationInput = location.value;
  const startDateInput = startDate.value;
  const endDateInput = endDate.value;
  showReadableData(locationInput, startDateInput, endDateInput);
});
