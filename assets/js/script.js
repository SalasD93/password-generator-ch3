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
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  // prompt pw length?
  var passwordLength = prompt("How many characters would you like your password to have?");
  if (passwordLength) {
    // alert you have chosed '' characters
    alert("You have chosen " + passwordLength + " characters.");
    characterType();
  } else {
    alert("You must enter a number between 8 and 128.");
    prompt("How many characters would you like your password to have?");
  }
});


// use apend to write password value to passwordText

// use math random for value
function generatePassword() {
  var randomPassword = ""

  for (var i = 0; i < passwordLength; i++) {
  randomPassword = randomPassword + type[Math.floor(Math.random () * type.length)];
  console.log(randomPassword);
  }
};


// confirm pw character type (4)
var characterType = function() {
  var type = characters;
  // include numbers?
  var includeNumbers = confirm("Would you like to include numbers?");    
  // if yes === alert "you have chosen to include numbers in your password."
  if (includeNumbers) {
    alert("You have chosen to include numbers in your password.");
    type = characters.numbers;
    // else === alert "you have chosen not to include numbers characters in your password."
  } else {
    alert("You have chosen not to include numbers in your password.");
  }

  // include special characters?
  var includeSpecChar = confirm("Would you like to include special characters?");
  // if yes === alert "you have chosen to include special characters in your password."
  if (includeSpecChar) {
    alert("You have chosen to include special characters in your password.");
    type = characters.specChar;
  // else === alert "you have chosen not to include special characters in your password."
  } else {
    alert("You have chosen not to include special characters in your password.");
  }

  // include uppercase?
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  // if yes === alert "you have chosen to include uppercase letters in your password."
  if (includeUppercase) {
    alert("You have chosen to include uppercase letters in your password.");
    type = chracters.alphaUpperCase;
  // else === alert "you have chosen not to include uppercase letters in your password."
  } else {
    alert("You have chosen not to include uppercase letters in your password.");
  }

  // include lowercase?
  var includeLowercase = confirm("Would you like to include lowercase letters?");
  // if yes === alert "you have chosen to include lowercase letters in your password."
  if (includeLowercase) {
    alert("You have chosen to include lowercase letters in your password.");
    type = characters.alphaLowerCase;
  // else === alert "you have chosen not to include lowercase letters in your password."
  } else {
    alert("You have chosen not to include lowercase letters in your password.");
  }

  // if one character type confirmed, exit loop
  // generate password matching criteria
  // write password to #password textContent
  // else one character type !confirmed
  // alert "must choose at least one character type"
  // run prompt loop again === characterType function
  if (includeNumbers === false && includeSpecChar === false && includeUppercase === false && includeLowercase === false) {
    alert("You must choose at least one character type.");
    characterType();
  } else {
    generatePassword();
  }
};

var characters = {
  numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  specChar: ['!', ',', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '"',],
  alphaUpperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  alphaLowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
};
console.log(characters);

// var randomPassword = [""]

// if all requirements of character type are met
  // choose the characters that were confirmed
    // pull from chracters strings
        // randomize
// concat the characters with the character 'type' confirmed in character 'type' vaue
writePassword();
