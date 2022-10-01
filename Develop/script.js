var characterLength = 8;
var choiceArr = [];

var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '&', '(', ')', '[', ']', '{', '}'];


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];
  characterLength = parseInt(prompt("How long do you want your password to be? (8-128 characters)"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Input invalid, please define a number between 8 and 128");
    return false;
  }

  if (confirm("Would you like your password to contain: \nLowercase letters?")) {
    choiceArr = choiceArr.concat(lower);
  }
  if (confirm("Would you like your password to contain: \nUppercase letters?")) {
    choiceArr = choiceArr.concat(upper);
  }
  if (confirm("Would you like your password to contain: \nNumbers?")) {
    choiceArr = choiceArr.concat(number);
  }
  if (confirm("Would you like your password to contain: \nSpecial characters?")) {
    choiceArr = choiceArr.concat(special);
  }
  return true;
}

function writePassword() {
  var correctPrompts = getPrompts();

  if(correctPrompts) {
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
