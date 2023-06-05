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


var jane = users.find(function (userObj) {
    if (userObj.name === 'Jane') return true;
})

console.log(jane);

// console.log(users[2].healthcare.medications.types[1].pillSize);

// work your way down the data levels to console log the wanted value
// anytime you use a . and a prop name (.medications), the value before it must be of type object







// var str = 'some string';

// str = str.slice(3);


// console.log(str);
// console.log(str.length);


// every value is an object is JavaScript (OOP)
// why did they use objects for the JS toolset? > we have a value and a toolset (str = 'some string'). and so then if the str is represented by an object, we can easily pull data and info about the string
// if str WASN'T an object, we wouldn't be able to use .length to get the strings length





var jd = {
    name: 'JD',
    age: 43,
    hobbies: ['pickleball', 'fishing'],
    haveBirthday: function () {
        this.age++;
    },
    printSomething: function(txt) {
        console.log(txt);
    },
    printAge: function () {
        console.log(this.age);
    },
    printHobbiesByIndex: function(index) {
        console.log(this.hobbies[index]);
    }
}

jd.printHobbiesByIndex(0);

// jd.printSomething('print me!');

// jd.haveBirthday();

// jd.printAge();


// haveBirthday: function () {    is an anonymous function. it is un-named, but can still be called because the function is stored in the haveBirthday property. The un-named function has a name!
// 'this' is a keyword we can use to reference the parent, instead of typing the parent name before the .















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