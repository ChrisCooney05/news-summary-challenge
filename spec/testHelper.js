function describe(text, func) {
  document.write(`<div>${text}</div>`);
  func(); // takes text and logs to window then runs the function
}

const expect = {
  isTrue: function (expectationToCheck) {
    if (!expectationToCheck) {
      document.write(`<div style='color: red;'>Expectation failed</div><br>`);
      return false;
    } else {
      document.write(`<div style='color: green;'>Test has passed</div><br>`);
      return true;
    } //writes on html if test has passed or failed
  },
};
