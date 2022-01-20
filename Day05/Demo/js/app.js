'use strict';

/*js Data types :
1- value Types (primitives):
a. numbers
b. string
c. symbol
d. undefined
e. Null
2- Reference Types (Objects) :
a.Objects
b.Functions
c.Arrays
*/

// numbers
var num1 = 10;
var num2 = 129.6;
var num3 = 43 + 44;
var num4 = Math.sqrt(3);
console.log(typeof num1,typeof num2,typeof num3,typeof num4);

// strings
var str = 'this is a string';
var sentence = 'my name is ' ;
var theName = 'Rania';
console.log(typeof str);
var allSentence = sentence + '' + theName;
var concatSentence = `Hello ${theName}, welcome to our website`;
console.log(allSentence);

// booleans
var bool = true;
console.log(typeof bool);

//example for null & undefined
var supervisor = null;// I do NOT have a supervisor.(No value)

var supervisor = undefined;
// I may or may not have a supervisor. I either don't know
// if I do or not, or I am choosing not to tell you. It is
// irrelevant or none of your business.(unknown if it has a value or not)


//Logical operations :
let b1 = !false; // true
let b2 = true && false; // false
let b3 = false || true; // true
let b4 = 123 === '456'; // false
let b5 = 14 === 10 + 4; // true

// == vs ===


// popup boxes 
alert('This is alert message.');

var input = prompt('Enter your mail here : ');
console.log('Your mail is : ', input);

var result = confirm('are you Sure');
console.log('Confirm result is : ', result);

// Conditional Statement;

var value=12; 

if (value % 2 == 0) {
  console.log('Even number');
} else {
  console.log('Odd number');
 

var color = prompt('What is your favorite color?');

if (color.toLocaleLowerCase()=='red') {

    console.log('his favorite color is red');

}else if (color.toLocaleLowerCase()=='blue'){
  
  console.log('blue');
}else{
    console.log(color);
};

//switch

/*
switch Expression {
  case  constant 1 :
    statement ;
    break;
  case constant2 :
    statement 
    break;
  default :
    statement ;
    break;     
}
 */
var value1 = 12;
switch (value1 % 2) {
  case 0:
    console.log('Even number');
    break;
  case 1:
    console.log('Odd number');
    break;
  default:
    console.log('Invalid input');

}

// combination bet conditions and popup boxes
var person=prompt('Please enter your name','Harry Potter');

if (person!=null){
  var x='Hello ' + person + ' ! How are you today?';
  alert(x)
}else {
    prompt('please add a valid name ');
}


// sec example

var hour = 10;
if (hour >=6 && hour <12){
  alert ('good morning ');
}
else if (hour>=12 &&<18){
  alert ('good afternoon');
}
else {
  alert('good evening');
}

