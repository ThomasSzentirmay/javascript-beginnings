var users = [
    {
        name: 'JD',
        age: 43
    },
    {
        name: 'Jane',
        age: 35,
        hobbies: ['tennis', 'hiking']
    },
    {
        name: 'Bob',
        healthcare: {
            locations: {
                pharmacy: '555 Cool St',
                emergency: '555 Help Dr',
            },
            medications: {
                amount: 50,
                types: [
                    {
                        bloodPressure: 'Amlodapine',
                        pillSize: '10mg',
                    },
                    {
                        painRelief: 'Tylenol',
                        pillSize: '500mg',
                    },
                ]
            },
        },
        age: 99
    }
];

console.log(users[2].healthcare.medications.types[1].pillSize);





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

// studentData.someFunc();
// studentData.printInfo();

// var studentName = students[0];

// var studentCourse = students[1];

// to pull the value from an object, state the object name (studentData), and then . notation and the property name (.name)

// var studentName = studentData.name;
// var studentCourse = studentData.course;

// console.log(studentData.age);

// arrays store lists of data - objects store organised data