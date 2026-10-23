function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

function dateToYYYYMMDD(date) {
  const isoDate = date.toISOString();
  return isoDate.slice(0, 10);
}

function validateForecastInput(location, startDate, endDate) {
  const normalisedLocation = location.trim();
  if (normalisedLocation === "") {
    throw new Error("wrong location format: location cannot be empty");
  }

  let normalisedStartDate = new Date(startDate.trim());
  let normalisedEndDate = new Date(endDate.trim());
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

  return {
    normalisedLocation,
    normalisedStartDate: dateToYYYYMMDD(normalisedStartDate),
    normalisedEndDate: dateToYYYYMMDD(normalisedEndDate),
  };
}

export { validateForecastInput };
