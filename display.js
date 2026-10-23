import { fahrenheitToCelcius } from "./temperature-utils.js";

const date = document.querySelector(".date");
const tempmax = document.querySelector(".tempmax");
const tempmin = document.querySelector(".tempmin");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const conditions = document.querySelector(".conditions");
const description = document.querySelector(".description");
const precipChartElement = document.querySelector(".precipChart")

const hoursChart = Array(24)
  .fill(null)
  .map((_, i) => `${i}:00`);

const precipChart = new Chart(precipChartElement, {
  type: "bar",
  data: {
    labels: hoursChart,
    datasets: [
      {
        label: "Precipitation (mm)",
        backgroundColor: "blue",
        data: Array(24).fill(0),
      },
    ]
  },
  options: {
      maintainAspectRatio: false,
    } 
});

precipChart.canvas.parentNode.style.height = '200px';
precipChart.canvas.parentNode.style.width = '500px'

function showDayData(weatherData, dayIndex) {
  const day = weatherData.days[dayIndex];
  date.textContent = `Date: ${day.datetime}`;
  tempmax.textContent = `Temperature Max: ${fahrenheitToCelcius(day.tempmax)}`;
  tempmin.textContent = `Temperature Min: ${fahrenheitToCelcius(day.tempmin)}`;
  temp.textContent = `Temperature Average: ${fahrenheitToCelcius(day.temp)}`;
  humidity.textContent = `Humidity: ${day.humidity}`;
  conditions.textContent = `Conditions: ${day.conditions}`;
  description.textContent = `Description: ${day.description}`;

  const hourPrecip = day.hours.map((hour) => hour.precip);
  precipChart.data.datasets[0].data = hourPrecip;
  precipChart.update();
}

export { showDayData };
