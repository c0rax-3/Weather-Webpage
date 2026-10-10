const date = document.querySelector(".date");
const tempmax = document.querySelector(".tempmax");
const tempmin = document.querySelector(".tempmin");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const precip = document.querySelector(".precip");
const preciptype = document.querySelector(".preciptype");
const precipprob = document.querySelector(".precipprob");
const windspeed = document.querySelector(".windspeed");
const conditions = document.querySelector(".conditions");
const description = document.querySelector(".description");

const hoursChart = Array(24)
  .fill(null)
  .map((_, i) => `${i}:00`);

const precipChart = new Chart(".precipChart", {
  type: "bar",
  data: {
    labels: hoursChart,
    datasets: [
      {
        backgroundColor: "blue",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 34],
      },
    ],
  },
});

function showReadableData(weatherData) {
  weatherData.days.forEach((day) => {
    date.textContent = `Date: ${day.datetime}`;
    tempmax.textContent = `Temperature Max: ${((day.tempmax - 32) * 5) / 9}`;
    tempmin.textContent = `Temperature Min: ${((day.tempmin - 32) * 5) / 9}`;
    temp.textContent = `Temperature Average: ${((day.temp - 32) * 5) / 9}`;
    humidity.textContent = `Humidity: ${day.humidity}`;
    precip.textContent = `Precipitation: ${day.precip}`;
    preciptype.textContent = `Precipitation Type: ${day.preciptype}`;
    precipprob.textContent = `Precipitation Probability: ${day.precipprob}`;
    windspeed.textContent = `Windspeed: ${day.windspeed}`;
    conditions.textContent = `Conditions: ${day.conditions}`;
    description.textContent = `Description: ${day.description}`;
  });
}

export { showReadableData };
