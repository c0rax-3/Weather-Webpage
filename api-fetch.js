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
          weather: fullWeatherData.days[0].conditions,
          precipitation: fullWeatherData.days[0].precip,
          snow: fullWeatherData.days[0].snow,
          date: fullWeatherData.days[0].datetime,
          temperature: fullWeatherData.days[0].temp,
        };
        return weatherData;
      })
      .then((weatherData)=>{
        console.log(weatherData)
      })
      .catch((reason) => {
        console.error(reason);
      });
  }
}
