var name = "Jessie";
// var name = "Larry";
const numberOfStates = 50;
var result = 5 + 4;

if (name[0] == "L") {
    alert("Back of the line!");
    // console.log("Back of the line!");
}
else {
    alert("Next!");
    // console.log("Next!");
}

// This is a comment. 

function sayHello() {
    alert("Hello World!");
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + " you aren't old enough to view this page!")
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

var vegetables = ["Spinach", "Corn", "Tomatoes", "Potatoes"];
for (var i=0; i<vegetables.length; i++) {
    console.log(vegetables[i]);
}

// PROBLEM 14 VERSION 1
var person1 = {
    name: "Kaitlyn",
    age: 24
};

var person2 = {
    name: "Josh",
    age: 25
};

var person3 = {
    name: "Scott",
    age: 18
};

var person4 = {
    name: "Alex",
    age: 20
};

var person5 = {
    name: "Allison",
    age: 26
};

var people = [person1, person2, person3, person4, person5];


// PROBLEM 14 VERSION 2
function makePersonObject(name, age) {
    var personObject = {
        name: name,
        age: age
    }
    return personObject;
}

var kaitlyn = makePersonObject("Kaitlyn", 23);
var josh = makePersonObject("Josh", 25);
var scott = makePersonObject("Scott", 18);
var alex = makePersonObject("Alex", 20);
var allison = makePersonObject("Allison", 26);

var arrayOfPeople = [kaitlyn, josh, scott, alex, allison];

// Loop for version 1
for (var i=0; i<people.length; i++) {
    var currentPerson = people[i]; // This way, people[i] is only evaluated once - saving time.
    checkAge(currentPerson.name, currentPerson.age);
}

// Loop for version 2
for (var i=0; i<arrayOfPeople.length; i++) {
    var currentPerson = arrayOfPeople[i]; // This way, arrayOfPeople[i] is only evaluated once - saving time.
    checkAge(currentPerson.name, currentPerson.age);
}

// PROBLEM 16 VERSION 1 - includes white space
function getLengthV1(word) {
    if (typeof word == "number") {
        return word.length;
    }
    else {
        alert("Please enter a string.");
    }
}

// PROBLEM 16 VERSION 2 - excludes white space
function getLengthV2(word) {
    // need to make sure word is a string before trying to ge the length of it...
    var count = 0;
    for (var i=0; i<word.length; i++) {
        if (!isWhiteSpace(word[i])) {
            count++;
        }
    }
    return count;
}

// var result1 = getLengthV1(5);
var result1 = getLengthV1("Hello World");
if (isEven(result1)) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}

function isEven(num) {
    return num % 2 == 0;
}

function isWhiteSpace(character) {
    // upper case ascii 65-90   lower case ascii 97-122
    return !(character.charCodeAt(0) > 64 && character.charCodeAt(0) < 91) || (character.charCodeAt(0) > 96 && character.charCodeAt(0) < 122);
}