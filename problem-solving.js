// Problem - 1

var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits.indexOf('Banana'));
fruits[1] = 'Mango';
console.log (fruits);
var remove = fruits.pop();
console.log (remove);
console.log (fruits);
fruits.push('Watermelon');
console.log (fruits);

// Problem - 2

var myScore = 85;
var tomsScore = 66;
var janesScore = 95;
var petersScore = 56;
var johnsScore = 40;

score = myScore;

if (score >= 80 && score <= 100){
    console.log ("You got 'A+' grade")
} else if (score >= 60 && score <= 79){
    console.log ("You got 'B' grade")
} else if (score >= 50 && score <= 59){
    console.log ("You got 'C' grade")
} else if (score >= 40 && score <= 49){
    console.log ("You got 'D' grade")
} else if (score >=1 && score <=39){
    console.log ("You got 'F' grade")
} else {
    console.log ("Pleade input the valid marks to get result")
}

// Problem - 3

let num1 = 13;
let num2 = 79;
let num3 = 45;

if (num1 >= num2 && num1 >= num3) {
    console.log("The largest number is " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("The largest number is " + num2);
} else {
    console.log("The largest number is " + num3);
}
