var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '<', '>', ',', '.', '?', '/'];
var combined = [];

// create a function that gets the amount of chars and and return the amount of characters and booleans for each of the char sets

function userInput () {
    var amount = parseInt(prompt("How many characters would you like?"));
    var includeLowercase = confirm("Click OK to include lowercase letters")
    var includeUppercase = confirm("Click OK to include uppercase letters")
    var includeNumbers = confirm("Click OK to include numbers")
    var includeSpecials = confirm("Click OK to include special characters")

    return[amount, includeLowercase, includeUppercase, includeNumbers, includeSpecials];
}

var choices = userInput()

// Using our choices array, create a function that creates an array of the combined character sets based on the user’s choices (hint - conditionals) and generates a resulting random string of characters in the amount chosen by the user
// The function will return that generated string

function password (choices) {
    var combinedChars = [];
    var pass = "";

    var includeLowercase = choices[1]
    var includeUppercase = choices[2]
    var includeNumbers = choices[3]
    var includeSpecials = choices[4]

    if (includeLowercase) {
        combinedChars = combinedChars.concat(lowercase)
    }
    if (includeUppercase) {
        combinedChars = combinedChars.concat(uppercase)
    }
    if (includeNumbers) {
        combinedChars = combinedChars.concat(numbers)
    }
    if (includeSpecials) {
        combinedChars = combinedChars.concat(specialCharacters)
    }

    for (var count = 0; count < combinedChars.length; count++) {
        var randomIndex = Math.floor(Math.random() * combinedChars.length);
       
        password += combinedChars[randomIndex];
    }

    return password;
}

var pass = password(choices);

console.log(pass);



