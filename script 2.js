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