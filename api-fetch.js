export class ApiFetch {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services";
  }

  getForecastDates(location, startDate, endDate) {
    const url = `${this.baseURL}/timeline/${location}/${startDate}/${endDate}?key=${this.apiKey}`;
    return fetch(url)
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
              hours: day.hours.map((hour) => {
                return {
                  datetime: hour.datetime,
                  datetimeEpoch: hour.datetimeEpoch,
                  temp: hour.temp,
                  humidity: hour.humidity,
                  precip: hour.precip,
                  precipprob: hour.precipprob,
                  preciptype: hour.preciptype,
                  windspeed: hour.windspeed,
                  conditions: hour.conditions,
                  icon: hour.icon,
                };
              }),
            };
          }),
        };
        return weatherData;
      })
      .catch((reason) => {
        console.error(reason);
      });
  }
}
