import { ApiFetch } from "./weather/api-fetch.js";
import { createEventListeners } from "./weather/user-interaction.js";

const weatherApi = new ApiFetch("ZAK5CDFTNMMDMY556PVDS5GNQ");
createEventListeners(weatherApi)
