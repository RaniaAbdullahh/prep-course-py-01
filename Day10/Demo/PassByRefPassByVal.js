'use strict';
// 1. primatives // strings,numbers,booleans,null,undefined
//2. reference values // Obj.arrays,functions 

let x = 1;
let y = x;
console.log(y);
y=2;
console.log(x)//1



let person = {
    name : 'rania',
    gender : 'female'
} 


let workdays =['sunday','Monday','tuesday']
let newDays = workdays;

newDays.push('Wednesday')

console.log(workdays);






let person1= {
    name : 'rania',
    gender : 'female'
}

let copyPerson = person1

let person2={
    name : 'raneem',
    gender : 'female'
}




let p1= 2;
if(p1==2){
    let y=p1
    y=5
    console.log(y,p1) 
}




// newPerson.name = 'raneem';
// console.log(newPerson);
// console.log(person);
