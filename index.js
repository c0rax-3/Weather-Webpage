import { ApiFetch } from "./api-fetch.js";

const location = document.querySelector(".location");
const startDate = document.querySelector(".startDate");
const endDate = document.querySelector(".endDate");
const submitButton = document.querySelector(".submit");
const locationRetrieved = document.querySelector(".locationRetrieved")

function showReadableData(location, startDate, endDate) {
  const date = document.querySelector(".date")
  const tempmax = document.querySelector(".tempmax")
  const tempmin = document.querySelector(".tempmin")
  const temp = document.querySelector(".temp")
  const humidity = document.querySelector(".humidity")
  const precip = document.querySelector(".precip")
  const preciptype = document.querySelector(".preciptype")
  const precipprob = document.querySelector(".precipprob")
  const windspeed = document.querySelector(".windspeed")
  const conditions = document.querySelector(".conditions")
  const description = document.querySelector(".description")
  const weatherApi = new ApiFetch("ZAK5CDFTNMMDMY556PVDS5GNQ");
  const weatherPromise = weatherApi.getForecastDates(location, startDate, endDate)
  weatherPromise.then((weatherData)=>{
    console.log(weatherData)
    weatherData.days.map((day)=>{
      date.textContent = `Date: ${day.datetime}`
      tempmax.textContent = `Temperature Max: ${(day.tempmax - 32) * 5/9}`
      tempmin.textContent = `Temperature Min: ${(day.tempmin - 32) * 5/9}`
      temp.textContent = `Temperature Average: ${(day.temp - 32) * 5/9}`
      humidity.textContent = `Humidity: ${day.humidity}`
      precip.textContent = `Precipitation: ${day.precip}`
      preciptype.textContent = `Precipitation Type: ${day.preciptype}`
      precipprob.textContent = `Precipitation Probability: ${day.precipprob}`
      windspeed.textContent = `Windspeed: ${day.windspeed}`
      conditions.textContent = `Conditions: ${day.conditions}`
      description.textContent = `Description: ${day.description}`
    })
  })
}

submitButton.addEventListener("click", () => {
  const locationInput = location.value;
  const startDateInput = startDate.value;
  const endDateInput = endDate.value;
  locationRetrieved.textContent = locationInput.value
  showReadableData(locationInput, startDateInput, endDateInput);
})
