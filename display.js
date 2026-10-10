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
const hoursChart = ["0:00", "1:00", "2:00", "3:00", "4:00",
               "5:00", "6:00", "7:00", "8:00", "9:00",
               "10:00", "11:00", "12:00", "13:00", "14:00",
               "15:00", "16:00", "17:00", "18:00", "19:00",
               "20:00", "21:00", "22:00", "23:00",]
const precipChart = new Chart(".precipChart", {
    type: "bar",
    data: {
        labels: hoursChart,
        datasets: [{
            backgroundColor: "blue",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 34]
        }]
    }
})

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

export {showReadableData}
