var testString = "Hello Tasmania"
var requiredString = "ɐıuɐɯsɐ┴ oןןǝH"

Tinytest.add('FlipText - Flip ' + testString + ' to ' + requiredString + '.', function (test) {
  test.equal(requiredString, flipText(testString));
});
