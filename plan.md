Weather APP:

Getting information from the API: 

- Data-Retrieval: Use Fetch API from [timeline-weather-api/](https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=ZAK5CDFTNMMDMY556PVDS5GNQ)

- Queries should be in this format:
/timeline/[location] – forecast queries.
/timeline/[location]/[date1]/[date2] – queries for a specific date range.

- HOW TO MAKE AN API REQUEST using async await
async function getWeather() {
  const apiKey = 'ZAK5CDFTNMMDMY556PVDS5GNQ'; 
  const url = `https://visualcrossing.com{apiKey}`;

//use try function and catch in case it goes wrong so it doesn't break the code
}
JAVASCRIPT:

- Modules (each module should include a class apart from index.js which should handle the api fetch requests)

- index.js 

This module will display the information from apifetch.js. The user should be able to, through the html, to input a location and optional dates. These should be requested to apifetch.js and then index.js should use the .textContent method to convert the information onto the page. 
This module class should have methods: 

displayForecast with arguments (weather, temperature).
    displays forecast for a location on the page
displayForecastDates with arguments (weather,temperature, date1, date2)
    displays forecast for a location across a time period on the page

Weather options (maybe as enums): Sunny, Cloudy, Rain, Thunder, Snow

if necessary just combine index.js and apifetch.js

- apifetch.js 

This module handles the api requests to visual crossing with the format above. This information should be exported to index.js.
Should have methods:
getForecast with arguments (location)
    This should make requests to the api that only specify location. Should return the weather and temperature for today along with the forecast for next 7 days. This should get the information from the user's input on the html.
getForecastDates with arguments (location, date1, date2)
    This should make requests to the api that specify location and time period. Should return the weather and temperature and dates.

- 

HTML/CSS:

Wireframe (home screen): [] = textboxes

                APP NAME

[LOCATION SEARCH BOX] [date1 opt.] [date2 opt.]
              SEARCH BUTTON

Once the search button is clicked, the user should be taken to a separate webpage with this format if no dates were specified: {divs}

LOCATION

Weather right now: (Weather options) (Temperature)

Forecast next 7 days:

{weather icon}{icon}{icon}{icon}{icon}{icon}{icon}
temperature    temp  temp  temp  temp  temp  temp

If dates were specified, it should follow this wireframe (max 7 days):

LOCATION

AVERAGE TEMPERATURE

DATE 1     ------------>  DATE 2
weather                   weather
temp                      temp