var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '<', '>', ',', '.', '?', '/'];
var combined = [];

// create a function that gets the amount of chars and and return the amount of characters and booleans for each of the char sets

function userInput () {
    var amount = parseInt(prompt("How many characters would you like?"));
    var includeLowercase = prompt("Click OK to include lowercase letters")
    var includeUppercase = prompt("Click OK to include uppercase letters")
    var includeNumbers = prompt("Click OK to include numbers")
    var includeSpecials = prompt("Click OK to include special characters")

    return[amount, includeLowercase, includeUppercase, includeNumbers, includeSpecials];
}

var choices = userInput()

// Using our choices array, create a function that creates an array of the combined character sets based on the user’s choices (hint - conditionals) and generates a resulting random string of characters in the amount chosen by the user
// The function will return that generated string

function password (choices) {
    var charSet = [];
    var pass = "";

    if (includeLowercase) {
        combinedCharset = combinedCharset.concat(includeLowercase)
    }
    if (includeUppercase) {
        combinedCharset = combinedCharset.concat(includeUppercase)
    }
    if (includeNumbers) {
        combinedCharset = combinedCharset.concat(includeNumbers)
    }
    if (includeSpecials) {
        combinedCharset = combinedCharset.concat(includeSpecials)
    }

    for (var count = 0; count < charSet.length; count++) {
        var = randomIndex(Math.random)
    }
}



