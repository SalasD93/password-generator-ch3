// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specChar = ['!', ',', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '"',];
var alphaUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var alphaLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
console.log(numbers, specChar, alphaUpperCase, alphaLowerCase);

// onlick generate password ---->

// prompt pw length?
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to have?");

  while(passwordLength <= 7 || passwordLength >= 129) {
    alert("You must enter a number between 8 and 128.");
    passwordLength = prompt("How many characters would you like your password to have?");
  }

  alert("You have chosen " + passwordLength + " characters.")

  characterType();
}


// use math random for value

// confirm pw character type (4)
var characterType = function() {
  var characters = [];
  // include numbers?
  var includeNumbers = confirm("Would you like to include numbers?");    
  // if yes === alert "you have chosen to include numbers in your password."
  if (includeNumbers) {
    alert("You have chosen to include numbers in your password.");
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
    characters = characters.concat(alphaLowerCase);
  // else === alert "you have chosen not to include lowercase letters in your password."
  } else {
    alert("You have chosen not to include lowercase letters in your password.");
  }
  
  // recursive loop to confirm characterType
  if (includeNumbers === false && includeSpecChar === false && includeUppercase === false && includeLowercase === false) {
    alert("You must choose at least one character type.");
    characterType();
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// if all requirements of character type are met
  // choose the characters that were confirmed
    // pull from chracters strings
        // randomize
// concat the characters with the character 'type' confirmed in character 'type' value