// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var passwordLength = prompt("Choose password length between 8 and 128 characters...");
  if (passwordLength === null) {
    return;
  }
  passwordLength = parseInt(passwordLength);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
