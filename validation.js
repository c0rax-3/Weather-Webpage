function validateForecastInput(location, startDate, endDate) {
    const normalisedLocation = location.trim()
    if (normalisedLocation === "") {
        throw new Error("wrong location format: location cannot be empty")
    }

    const normalisedStartDate = startDate.trim()
        
}
