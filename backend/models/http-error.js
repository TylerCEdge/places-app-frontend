class HttpError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.code = errorCode;
    console.log(message, "\n", "ERROR CODE:", errorCode);
  }
}
module.exports = HttpError;
