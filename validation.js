function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

function dateToYYYYMMDD(date) {
  const isoDate = date.toISOString();
  return isoDate.slice(0, 10);
}

function validateForecastInput(location, startDate, endDate) {
  const startDateLimit = new Date("January 1, 1970 00:00:00");
  const normalisedLocation = location.trim();
  if (normalisedLocation === "") {
    throw new Error("wrong location format: location cannot be empty");
  }

  let normalisedStartDate = new Date(startDate.trim());
  let normalisedEndDate = new Date(endDate.trim());
  console.log(normalisedStartDate);
  if (!isValidDate(normalisedStartDate)) {
    throw new Error("Invalid start date");
  }
  if (!isValidDate(normalisedEndDate)) {
    throw new Error("Invalid end date");
  }
  if (normalisedEndDate < normalisedStartDate) {
    const endTemp = normalisedEndDate;
    normalisedEndDate = normalisedStartDate;
    normalisedStartDate = endTemp;
  }
  if (normalisedStartDate < startDateLimit) {
    throw new Error("Invalid start date: start date cannot precede Jan 1 1970");
  }
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  if (normalisedEndDate - normalisedStartDate > millisecondsPerDay * 10) {
    throw new Error("Invalid date range: date range cannot exceed 10 days")
  }
  return {
    normalisedLocation,
    normalisedStartDate: dateToYYYYMMDD(normalisedStartDate),
    normalisedEndDate: dateToYYYYMMDD(normalisedEndDate),
  };
}

export { validateForecastInput };
