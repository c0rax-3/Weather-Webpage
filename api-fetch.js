class ApiFetch {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services";
  }

  getForecastDates(location, startDate, endDate) {
    const url =`${this.baseURL}/timeline/${location}/${startDate}/${endDate}?key=${this.apiKey}`
    fetch(url).then((response)=>{
        console.log(response)
    }).catch((reason)=>{
        console.error(reason)
    })
  }
}
