// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// onlick generate password ---->
generateBtn.addEventListener("click", function writePassword() {
  // prompt pw length?
  var passwordLength = prompt("How many characters would you like your password to have?");
  if (passwordLength) {
    // alert you have chosed '' characters
    alert("You have chosen " + passwordLength + " characters.");
  } else {
    alert("You must enter a number between 8 and 128.");
    writePassword();
  }
  // confirm pw character type (4)
  // include numbers?
  var includeNumbers = confirm("Would you like to include numbers?");    
  // if yes === alert "you have chosen to include numbers in your password."
  if (includeNumbers) {
    alert("You have chosen to include numbers in your password.");
    // else === alert "you have chosen not to include numbers characters in your password."
  } else {
    alert("You have chosen not to include numbers in your password.");
  }

  // include special characters?
  var includeSpecChar = confirm("Would you like to include special characters?");
  // if yes === alert "you have chosen to include special characters in your password."
  if (includeSpecChar) {
    alert("You have chosen to include special characters in your password.");
  // else === alert "you have chosen not to include special characters in your password."
  } else {
    alert("You have chosen not to include special characters in your password.");
  }

  // include uppercase?
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  // if yes === alert "you have chosen to include uppercase letters in your password."
  if (includeUppercase) {
    alert("You have chosen to include uppercase letters in your password.");
  // else === alert "you have chosen not to include uppercase letters in your password."
  } else {
    alert("You have chosen not to include uppercase letters in your password.");
  }

  // include lowercase?
  var includeLowercase = confirm("Would you like to include lowercase letters?");
  // if yes === alert "you have chosen to include lowercase letters in your password."
  if (includeLowercase) {
    alert("You have chosen to include lowercase letters in your password.");
  // else === alert "you have chosen not to include lowercase letters in your password."
  } else {
    alert("You have chosen not to include lowercase letters in your password.");
  }

  // if one character type confirmed, exit loop
    // generate password matching criteria
    // write password to #password textContent
  // else one character type !confirmed
    // alert "must choose at least one character type"
    // run prompt loop again === onclick function
});

var characters = {
  numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  specialCharacters: ['!', ',', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '"',],
  alphaUpperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  alphaLowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
};
console.log(characters);

writePassword();