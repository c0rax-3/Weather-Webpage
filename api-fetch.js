export class ApiFetch {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services";
  }

  getForecastDates(location, startDate, endDate) {
    const url = `${this.baseURL}/timeline/${location}/${startDate}/${endDate}?key=${this.apiKey}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        return response.json();
      })
      .then((fullWeatherData) => {
        const weatherData = {
          address: fullWeatherData.resolvedAddress,
          timezone: fullWeatherData.timezone,
          timezoneOffset: fullWeatherData.tzoffset,
          days: fullWeatherData.days.map((day) => {
            return {
              datetime: day.datetime,
              datetimeEpoch: day.datetimeEpoch,
              tempmax: day.tempmax,
              tempmin: day.tempmin,
              temp: day.temp,
              humidity: day.humidity,
              precip: day.precip,
              preciptype: day.preciptype,
              precipprob: day.precipprob,
              windspeed: day.windspeed,
              conditions: day.conditions,
              description: day.description,
              icon: day.icon,
              hours: day.hours,
            };
          }),
        };
        return weatherData;
      })
      .then((weatherData) => {
        console.log(weatherData);
      })
      .catch((reason) => {
        console.error(reason);
      });
  }
}
const myclass = new ApiFetch("ZAK5CDFTNMMDMY556PVDS5GNQ")
console.log(myclass.getForecastDates("London", "2026-09-26", "2026-09-27"))