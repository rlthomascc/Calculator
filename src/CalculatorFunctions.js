

//The following functions are for Multiplication, Division, Addition, and Subtraction.

//These functions are only available to handle 2 numbers at a time.

function addition(arr){
return arr.reduce(function(i, elem){
return i + elem
}, 0);
};

function subtraction(num1, num2){
return num1 - num2
};

function multiplication(arr){
return arr.reduce(function(i, elem){
return elem * i
}, 1);
};

function division(arr){
return arr.reduce(function(i, elem){
return elem / i
}, 0);
};

var add = console.log(addition([]));
var subtract = console.log(subtraction());
var multiply = console.log(multiplication([]));
var divide = console.log(division());
