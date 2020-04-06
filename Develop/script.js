
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var special = "*^&%#$@!()-_+=?/\[]{}<>".split("");

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


//characters 

function promptForType(question) {
  let response = prompt(question).toLowerCase();
  do {
    if (response === "yes") {
      return true;
    }

    else if (response === "no") {
      return false;
    }

    else {
      response = prompt("Please try again. " + question).toLowerCase();
    }

  } while (true);

}


//length

function promptForLength() {
  let userResponse = prompt("Number of characters? (8 to 128 characters please)");
  let numberResponse = Number(userResponse);

  while (isNaN(numberResponse) || numberResponse < 8 || numberResponse > 128) {
    if (isNaN(numberResponse)) {
      userResponse = prompt("Please enter a number.");
    }

    else if (numberResponse > 128) {
      userResponse = prompt("Exceeded character limit. Please enter less than 128.");
    }

    else if (numberResponse < 8) {
      userResponse = prompt("More characters needed. Please enter more than 8.");
    }

    numberResponse = Number(userResponse);
  }

  return numberResponse;

}



function generatePassword() {
  let useSpecial = false;
  let length = promptForLength();
  let useUpperCase = false;
  let useLowerCase = false;
  let useNumbers = false;



  do {
    useSpecial = promptForType("Would you like to use symbols? (yes or no)");
    useNumbers = promptForType("Would you like to use numbers? (yes or no)");
    useUpperCase = promptForType("Would you like to use upper case letters? (yes or no)");
    useLowerCase = promptForType("Would  you like to use lower case letters? (yes or no)");


    if (!useLowerCase && !useNumbers && !useUpperCase && !useSpecial) {

      alert("Please choose a character type.");
    }
  } while (!useLowerCase && !useNumbers && !useUpperCase && !useSpecial);

  let passArray = [];


  if (useSpecial) {
    passArray.splice(0, 0, ...special);
  }

  if (useLowerCase) { passArray.splice(0, 0, ...lowerCase); }

  if (useUpperCase) { passArray.splice(0, 0, ...upperCase); }

  if (useNumbers) { passArray.splice(0, 0, ...numbers); }

  let password = "";
  for (i = 0; i <= length; i++) {
    let randomNum = Math.floor(Math.random() * passArray.length);
    password += passArray[randomNum];
  }

  return password;
}




//write password function

function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = " ";
  var password = generatePassword();
  passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
