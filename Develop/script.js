// Assignment code here
const key_string = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '1234567890';
  symbol: '!"!#$%^&*()=,.-:;' ?<>';,

  //generate password
function generatePassword(){
  var passwordCharSet ="";
}

    //Get references to generate element var generatePassword()
    {
    var passwordCharSet ="";

    var length =parseInt(window.prompt("Enter a number from 8 to 128 for password length."))
    if (length){

    };
    console.log(length);
    var lowercase =window.confirm ("Would you like to use lowercase letters?");
    if (lowercase==true)

    var uppercase = window.confirm ("Would you lile to use uppercase letters?");
    if (uppercase==true)
    {passwordCharset = +key_strings.uppercase;
    };
    var symbols=widow.confirm("would you like to use symbols?");
    if (symbols) {
      passwordCharSet += key_strings.symbol;
    };
    var numbers = window.comfirm ("Would you like to use numbers?");
  };
  if (numbers){
      passwordCharSet += key_strings.number;
  };
  var password = "";
  for (let i=); i < length, i++) {
      password += passwordCharset[MathFloor{Math.random() * passwordCharSet.length)]
  }
  return password;

  }
    }


      passwordCharset += key_strings.lowercase;
    };
    var upper
  }

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
