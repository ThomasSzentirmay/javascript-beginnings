var students = ["John", "FSF", "Jamil", "FSF", "Roman", "FSF"]




for (var index = 0; index < students.length; index += 2) {
    printStudentInfo(students[index], students[index + 1])
}



function printStudentInfo(studentName, studentCourse) {
    // console.log("Welcome to the class!");
    console.log("Name:", studentName);
    console.log("Course:", studentCourse);
    // console.log("Please utilize office hours for help!");
}






// We create an argument to pass through the function eg. students[0] (argument)> studentName (parameter)   students[1] > studentCourse
// The parameters will have the same value as the arguments passed in order
// That argument holds a string value from the students variable at the top of the page
// That argument can then we used in the function as seen in the console.logs
// see function below for clear example



// function printStuff(something, name, age) {
//     console.log(something);
// }

// printStuff("JD", 43, "something")