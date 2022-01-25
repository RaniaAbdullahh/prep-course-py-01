'use strict';

function Drink(name,ingredients,isCold,isHot,imgUrl){
  this.name = name;
  this.ingredients = ingredients;
  this.imagePath =imgUrl;
  this.isCold = isCold;
  this.isHot = isHot;
  this.price = 0;
  
}


Drink.prototype.calculatePrice = function(min,max){
  this.price = getRandomNumber(min,max);
};




Drink.prototype.render = function(){
  // document.write(`<p>${this.name} is added to the menu & its price is ${this.price}</p>`)//js interpolation
  let mySection = document.getElementById('drink');
  //create the element
  // append it to its parent 
  // add text content to the element || attributes 
  let divEl = document.createElement('div');
  mySection.appendChild(divEl);

  let h4El = document.createElement('h4');
  divEl.appendChild(h4El)
  h4El.textContent = this.name;

  let pEl = document.createElement('p');
  divEl.appendChild(pEl);
  if(this.isHot&& this.isCold){
    pEl.textContent = `${this.name} is available Hot and Cold and it has the following ingredients :`;
  }else if (this.isHot){
    pEl.textContent = `${this.name} is available Hot only and it has the following ingredients :`;
  }else{
    pEl.textContent = `${this.name} is available Cold only and it has the following ingredients :`;
  }
  
  let ulEL = document.createElement('ul');
  divEl.appendChild(ulEL);
  for(let i =0;i<this.ingredients.length;i++){
    let liEl = document.createElement('li');
    ulEL.appendChild(liEl);
    liEl.textContent = this.ingredients[i];
  }

  let imgEl = document.createElement('img');
  divEl.appendChild(imgEl);
  imgEl.setAttribute('src', this.imagePath)

  imgEl.setAttribute('alt',this.name);

}

/// HTML Events /////

let drinkForm= document.getElementById('drinkForm');
drinkForm.addEventListener('submit', addNewDrink);

function addNewDrink(event){
  event.preventDefault();
  let name = event.target.name.value;
  let imgurl = event.target.imgurl.value;
  let ingredients = event.target.ingredients.value.split(',');
  let isCold = event.target.isCold.checked;
  let isHot = event.target.isHot.checked;
  // console.log(name,imgurl,ingredients,isCold,isHot);

  let newDrink = new Drink(name,ingredients,isCold,isHot,imgurl);
  newDrink.calculatePrice(2,10);
  newDrink.render();
  console.log(newDrink);
}







const espresso = new Drink('espresso',['espresso'],false,true,'./images/espresso.PNG');
const latte = new Drink('latte',['espresso','milk','whipped milk'],true,true,'./images/latte.PNG');
const mocha = new Drink('mocha',['espresso milk', 'whipped cream','chocolate syrub'],true,true,'./images/mocha.PNG');


espresso.calculatePrice(2,10);
latte.calculatePrice(2,10);
mocha.calculatePrice(2,10);

espresso.render();
latte.render();
mocha.render();

//DOM manipulation 
//1. methods
//document.getElementById
//document,getElementBYTagName
//document.getElementByClassName
// document.createElement

//2.properties 
//innerHTML

// let h1El = document.getElementById('h1');
// console.log(h1El);
// console.log(h1El.textContent);
// h1El.textContent+= 'LTUC ' ;
// h1El.style = 'color :blue';










// to create new Element :
//1. create the Element 
//2.append the new eement to its parent 
// 3. add the content for my new Element 
// let section = document.getElementById('drink');
// let pEl = document.createElement('p');
// section.appendChild(pEl);
// pEl.textContent = 'Hello Python Course'





function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}