'use strict';

// each drink shiuld has :
// - name
// - ingrediants 
// - image 
// - cold 
// - hot 
// - price 

function Drink(name,ingreadiants,isCold,isHot,price){
    this.name = name;
    this.ingreadiants = ingreadiants;
    this.imagePath = `./images/${this.name}.PNG`;
    this.isCold=isCold;
    this.isHot = isHot;
    this.price = price
}

const espresso = new Drink('espresso',['espresso'],false,true,2);
const latte = new Drink('latte',['espresso','milk','wipped milk'],true,true,5);
const mocha = new Drink('mocha',['espresso milk','wipped cream','choc syrub'],true,true,3);

Drink.prototype.render = function(){
    document.write(`<p>${this.name} is added to the menu</p>`)//js interpolation
}


espresso.render();
latte.render();
mocha.render();


// function number :
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  //Tax = (randomSalary*tax persentage)
  // netSalary = randomSalary - Tax 
  