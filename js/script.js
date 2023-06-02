var oldStudentData = ['Matthew', 'FSF']
var studentData = {
    name: 'Matthew',
    course: 'FSF',
    university: 'Rutgers',
    location: 'Jersey',
    age: 26,
    someFunc: function () {
        console.log('crazy!');
    },
    printInfo: function () {
        console.log('Name:', this.name);
    }
};

studentData.someFunc();
studentData.printInfo();

// var studentName = students[0];

// var studentCourse = students[1];

// to pull the value from an object, state the object name (studentData), and then . notation and the property name (.name)

// var studentName = studentData.name;
// var studentCourse = studentData.course;

// console.log(studentData.age);

// arrays store lists of data - objects store organised data