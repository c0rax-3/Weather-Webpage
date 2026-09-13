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
      .then((weather) => {
        console.log(weather);
      })
      .catch((reason) => {
        console.error(reason);
      });
  }
}
