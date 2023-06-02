var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '<', '>', ',', '.', '?', '/'];

// we put the needed char sets into array so they can be fetched later in the code

function userInput () {

    var amount = parseInt(prompt('Please provide character length'))
    var includeLowercase = confirm('Click OK to include lowercase letters');
    var includeUppercase = confirm('Click OK to include uppercase letters');
    var includeNumbers = confirm('Click OK to include numbers');
    var includeSpecial = confirm('Click OK to include special characters');

    // we store the return value from the user in variables (amounts, includeLowercase...)

    return [amount, includeLowercase, includeUppercase, includeNumbers, includeSpecial];

    // We return the function userInput in an array
}

var choices = userInput();

// We then store that userInput function into a variable called 'choices'. 'userInput' value is replaced by the value of return, which is an array, so when referencing choices later, we are referencing the array returned in userInputs

function generatePass () {

    // Create an empty string within a variable where the randomised characters will be stored. That variable is the one we will be printing. Also create an empty array so that we can use conditionals to .concat the user's choices into a new array

    var pass = '';
    var allPossibleChars = [];

    // get the user choices that are now inside the 'choices' variable, by assigning each item from the choices array to a variable

    var charAmount = choices[0]
    var includeLowercase = choices[1]
    var includeUppercase = choices[2]
    var includeNumbers = choices[3]
    var includeSpecial = choices[4]

    // We need to use conditionals so that we can create a new array with the updated user choices. This can be done with if statements, and then if true, .concat that char set into the new array
    // NOTE **** using 'allPossibleChars =' is basically saying we are taking our original empty array where we want our new data stored, and we are replacing it with the allPossibleChars.concat(lower), instead of the .concat doing what it naturally does, and giving us a new array 

    if (includeLowercase) {
        allPossibleChars = allPossibleChars.concat(lowercase);
    }
    if (includeUppercase) {
        allPossibleChars = allPossibleChars.concat(uppercase);
    }
    if (includeNumbers) {
        allPossibleChars = allPossibleChars.concat(numbers);
    }
    if (includeSpecial) {
        allPossibleChars = allPossibleChars.concat(specialChars);
    }

    // Create a for loop with the new array, that loops for the length of the amount user input, and that will generate a random character from the user chosen char sets each time into our empty string

    for (var count = 0; count < charAmount; count++) {

    }
}

// Call the function

var pass = generatePass();

// console.log(pass);