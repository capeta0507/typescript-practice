"use strict";
// ex1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// ex2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// ex3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
