'use strict';

//arrays 
var array = new Array();// second way 
var students = [];// first way 

// console.log(typeof(array),typeof(students));

var data = [1,2,'hello',false];
console.log(data)
var arr = [1,2,['a','b','c'],true];
// console.log(arr);

// console.log(arr[2]);
// console.log(arr[3]);

arr[4]='four';

//arrays methods :
// Push : pushing values to end of the array
arr.push(16);
// console.log(arr);
// pop : remove from the end of an array 
arr.pop();
console.log(arr)
// unshift : add elememt for the beggining of an array 
arr.unshift(100);
console.log(arr);
//shift : to remove an elemet fro m the beginning of an arr 
arr.shift();
console.log(arr);

// to know the lenght of an array :
console.log(arr.length);

//to convert array to a string 

console.log(arr.toString());
////****************************loops**************************/////
// console.log('rania');
// DRY :dont repeate yourself

// for :
/* for([initialization];[condition];[final-expression]){
    //statment 
}
*/ 
// for (var i =0;i<=5;i++){     
//     console.log('rania',i)
// }
// break keyword 
// for (var i =0; i<5;i++){
//     if(i==3){
//         break
//     }
//     console.log(i)
// }
//continue keyword 
// for (var i =0; i<5;i++){
//     if(i==3){
//         continue
//     }
//     console.log(i)
// }

// while :

/*
while(condition){
    statements
}
*/
var number=10
while(number<15){
    console.log(number);
    console.log('first itteration')
    break;
    //statement 
}


// do.. while loop :
do{
    console.log('hello world');
    number ++;
}while(number<12);


// for .. in : zaid 
// for .. of :  ahmad 
/******************functions***********************/
// functions : block of code do for me a spesific task 
//to declare a function : 
//1- function declaration 
function greeting (){
    console.log('hello guys');
}
greeting();// invoke the function 

function square(number){//parameter 
     number =number*number;//9*9
     return   number*3  ;//81*3
}
var x = square(9)// argument 
console.log(x);

// 2.function expression (anonymous functions):

// var saygoodbuye= function (name){
//     alert('good bye '+name);
// }
// console.log(saygoodbuye('raghad '));

// arrow function :(special type of anonymous functions)
let arrowFunc = ()=>{
    console.log('this is an arrow function');
}
arrowFunc();

var square =  (number)=>{
    return number*number
}

var square = number => number*number;
console.log(square(8));
var x = 10;

////**********************scops*****************///

//1. global scop 
// 2. local scop //functions 
// 3. block scop 




// console.log(x)//10
function scoping(){
    var y = 25;//local variable
    // console.log(y)//25
}
// console.log(y)//undefined


  
// console.log(x,r)//undefined



// console.log(y)//undefined 



//     let x = 10 ; 
//     const r = '25';
   
// }

// function sayhi(){
//     var greeting = 'hi Rania';// local variable 
//     for (let i =0; i<3;i++){
//         var greeting = 'hi everyone '// block variable 
        
//     }
//     console.log(greeting);

// }
// sayhi();
//var X

//*******let var cons*******/
//let vs const 

// let x = 10;
// x = 15;

// const x = 10;
// x= 15;

// let x = 10;
// x= 15;
// console.log(x);
// const dataArr=[1,2,3];
// dataArr.push(4);
// dataArr[0]='hello';
// console.log(dataArr);

//**** hoisting***/
// all declarations will move to the top of the scope 

console.log(value);//
var value;



console.log(sum(1,2))//3
function sum(a,b){
    return a+b;
}

// syncrounus func vs asyncronus func 
// sync func   vs      // async func 
 
let a = 10;
let b = 13;
console.log(a,b);


setTimeout(function(){
    console.log('async func',a);

},5000);

console.log(a);
