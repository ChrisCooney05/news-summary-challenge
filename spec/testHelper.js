function describe(text, func) {
  document.write(`<div>${text}</div>`);
  func();
}

const expect = {
  isTrue: function (expectationToCheck) {
    if (!expectationToCheck) {
      document.write(
        `<div style='color: red;'>Expectation failed: ${expectationToCheck} is not truthy</div><br>`
      );
      return false;
    } else {
      document.write(
        `<div style='color: green;'>${expectationToCheck}: Test has passed</div><br>`
      );
      return true;
    }
  },
};
