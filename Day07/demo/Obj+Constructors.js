'use strict';

////Objects/////
// js collections of key-value pairs;
// objects,array,function
/*
{
    key1 : value1,
    key2 : value2,
    key3 : value3

}
*/
//properties
let person = {
    firstName : 'Rania',
    lastName : 'Abullah',
    age : 25,
    gender : 'female'
}

// console.log(person);/
//methods
let person1 = {
    firstName : 'Rania',
    lastName : 'Abullah',
    age : 25,
    gender : 'female',
    fullName : function (){
        let name = this.firstName + this.lastName
        return name
    }
}
//to reach to a property or a methon (dot notation)
// console.log(person1.firstName);
// console.log(person1.fullName());

//to add extra property or extra method (bracets notation)

person1['Hight'] = 170;



person1['weight'] = function (){
    // console.log('this is my weight');
}

// console.log(person1);
// person1.weight();
// console.table(person1);

/////DRY/////
///********constructor***********/////


function Person (firstName,lastName,age,gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; 
    this.gender = gender

}

let person10 = new Person('Rania','Abdullah',25,'female');
console.log('my object',person10);
let person12 = new Person('Raghad','Abdulhadi',23,'female');

console.log('my object',person12);

////prototype

Person.prototype.fullName = function(){
    let name = this.firstName + this.lastName
    return name
}
person12.fullName()
console.log(person10);

console.log(person12);

Person.prototype.extraAge = function(){
    let extraAge = 10 + this.age;
    return extraAge
}


console.log(person12.extraAge());

//////////********DOM*********///////////







