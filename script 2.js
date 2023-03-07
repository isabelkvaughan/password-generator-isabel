// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("How many characters should your password contain? (8-128)");
  if (passwordLength === null) {
    return; // User clicked Cancel
  }
  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }
  var includeLowercase = confirm("Do you want to include lowercase characters?");
  var includeUppercase = confirm("Do you want to include uppercase characters?");
  var includeNumeric = confirm("Do you want to include numeric characters?");
  var includeSpecial = confirm("Do you want to include special characters?");
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type to include in the password.");
    return;
  }
  var charSet = "";
  if (includeLowercase) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumeric) {
    charSet += "0123456789";
  }
  if (includeSpecial) {
    charSet += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




parseInt is a built-in function in JavaScript that parses a string argument and returns an integer. In the code snippet I provided, parseInt is used to convert the string entered by the user as the password length prompt into an integer.

For example, if the user enters "12" as the password length, parseInt("12") would return the number 12, which can then be used in the rest of the code. Without parsing the string as an integer, the value entered by the user would be treated as a string, which could lead to unexpected behavior when used in mathematical calculations or comparisons.