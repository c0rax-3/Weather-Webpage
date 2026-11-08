class NetworkError extends Error {
  constructor(errorMsg, response = {}) {
    super(errorMsg);
    this.errorMsg = errorMsg;
    this.errorStatus = response.status;
  }

  checkError() {
    if (this.errorStatus === 200) {
      return "";
    }
    if (this.errorStatus === 404) {
      return "Location Not Found: Please make sure you have inputed correctly";
    }
    if (this.errorStatus === 400) {
      return "Bad Request: Please make sure you have inputed the correct syntax";
    }
    if (this.errorStatus === 408) {
      return "Timed Out: Please check your connection";
    }
    if (this.errorStatus === 429) {
      return "You have reached your request limit for a time period: Please wait and come back later";
    }
    return `Unknown Error: ${this.errorMsg}`;
  }
}

export { NetworkError };
