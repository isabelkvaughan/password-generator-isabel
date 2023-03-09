// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var passwordLength = prompt("How many characters should your password contain? (8-128)");
  if (passwordLength === null) {
    return;
  }
  passwordLength = parseInt(passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a number between 8 and 128.");
    return;
  }

  var lowerCase = confirm("Do you want to include lowercase characters?");
  var upperCase = confirm("Do you want to include uppercase characters?");
  var numericCharacters = confirm("Do you want to include numeric characters?");
  var specialCharacters = confirm ("Do you want to include special characters?");
  
  if (!lowerCase && !upperCase && !numericCharacters && !specialCharacters) {
    alert("Please select at least one character type.");
    return;
  }

  var characters = "";
  if (lowerCase) {
    characters += "qwertyuiopasdfghjklzxcvbnm";
  }
  if (upperCase) {
    characters += "QWERTYUIOPASDFGHJKLZXCVBNM";
  }
  if (numericCharacters) {
    characters += "1234567890";
  }
  if (specialCharacters) {
    characters += "{}[]\|;',./:<>?!@#$%^&*()_+-=~";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
