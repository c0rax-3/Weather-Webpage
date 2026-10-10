function fahrenheitToCelcius(fahrenheit) {
  const celcius = ((fahrenheit - 32) * 5) / 9;
  return Math.round(celcius * 10) / 10;
}

export { fahrenheitToCelcius }
