import { ApiFetch } from "./api-fetch.js";
import { showReadableData } from "./display.js";

const location = document.querySelector(".location");
const startDate = document.querySelector(".startDate");
const endDate = document.querySelector(".endDate");
const submitButton = document.querySelector(".submit");
const locationRetrieved = document.querySelector(".locationRetrieved")
const backButton = document.querySelector(".back")
const forwardButton = document.querySelector(".forwards")

function getWeatherData(location, startDate, endDate) {
  const weatherApi = new ApiFetch("ZAK5CDFTNMMDMY556PVDS5GNQ");
  const weatherPromise = weatherApi.getForecastDates(location, startDate, endDate)
  return weatherPromise
}

submitButton.addEventListener("click", () => {
  const locationInput = location.value;
  const startDateInput = startDate.value;
  const endDateInput = endDate.value;
  locationRetrieved.textContent = locationInput.value
  showReadableData(getWeatherData(locationInput, startDateInput, endDateInput));
})

backButton.addEventListener("click", ()=>{

})

forwardButton.addEventListener("click", ()=>{
  
})
