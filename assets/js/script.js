// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);

// arrays to be called
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specChar = ['!', ',', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '"',];
var alphaUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var alphaLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var characters = [];

// function to generate password with all requirements are met
function generatePassword() {
  // prompt pw length?
  var passwordLength = prompt("How many characters would you like your password to have?");
  // add while loop to limit characters to between 8-128
  while(passwordLength <= 7 || passwordLength >= 129) {
    alert("You must enter a number between 8 and 128.");
    passwordLength = prompt("How many characters would you like your password to have?");
  }
  alert("You have chosen " + passwordLength + " characters.");
  // call on characterType values
  characterType();

  var passwordRandom = "";
  // for loop to present new password with given values
  for (i = 0; i < passwordLength; i++) {
    // use math random for value
    passwordRandom = passwordRandom + characters[Math.floor(Math.random() * characters.length)];
  }
  return passwordRandom;
}

// fucntion to determine which characters to include
function characterType() {
  // reset password field value for next password
  characters = [];
  // confirm pw character type (4)
  // include numbers?
  var includeNumbers = confirm("Would you like to include numbers?");    
  // if yes === alert "you have chosen to include numbers in your password."
  if (includeNumbers) {
    alert("You have chosen to include numbers in your password.");
    //concat characters picked with complimentary array
    characters = characters.concat(numbers);
    // else === alert "you have chosen not to include numbers characters in your password."
  } else {
    alert("You have chosen not to include numbers in your password.");
  }
  // include special characters?
  var includeSpecChar = confirm("Would you like to include special characters?");
  // if yes === alert "you have chosen to include special characters in your password."
  if (includeSpecChar) {
    alert("You have chosen to include special characters in your password.");
    //concat characters picked with complimentary array
    characters = characters.concat(specChar);
  // else === alert "you have chosen not to include special characters in your password."
  } else {
    alert("You have chosen not to include special characters in your password.");
  }
  // include uppercase?
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  // if yes === alert "you have chosen to include uppercase letters in your password."
  if (includeUppercase) {
    alert("You have chosen to include uppercase letters in your password.");
    //concat characters picked with complimentary array
    characters = characters.concat(alphaUpperCase);
  // else === alert "you have chosen not to include uppercase letters in your password."
  } else {
    alert("You have chosen not to include uppercase letters in your password.");
  }
  // include lowercase?
  var includeLowercase = confirm("Would you like to include lowercase letters?");
  // if yes === alert "you have chosen to include lowercase letters in your password."
  if (includeLowercase) {
    alert("You have chosen to include lowercase letters in your password.");
    //concat characters picked with complimentary array
    characters = characters.concat(alphaLowerCase);
  // else === alert "you have chosen not to include lowercase letters in your password"
  } else {
    alert("You have chosen not to include lowercase letters in your password.");
  }
  // recursive loop to confirm characterType
  if (includeNumbers === false && includeSpecChar === false && includeUppercase === false && includeLowercase === false) {
    alert("You must choose at least one character type.");
    // call on characterType to run through prompts again
    characterType();
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // reset password field to new password after requesting another password
  if (writePassword === true) {
    generatePassword();
  }
}

function copyPassword() {
  // Get the text field
  var copyText = document.getElementById("password");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}