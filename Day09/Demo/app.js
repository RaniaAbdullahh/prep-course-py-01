'use strict';

function Drink(name,ingredients,isCold,isHot,imgUrl){
  this.name = name;
  this.ingredients = ingredients;
  this.imagePath =imgUrl;
  this.isCold = isCold;
  this.isHot = isHot;
  this.price = 0;
  this.calculatePrice(2,10);
  Drink.allDrinks.push(this);
 
  
}


Drink.allDrinks = [];
Drink.prototype.calculatePrice = function(min,max){
  this.price = getRandomNumber(min,max);
};
                



function render(){
 
  let mySection = document.getElementById('drink');
 

  for(let i =0; i<Drink.allDrinks.length;i++){
    let drink = Drink.allDrinks[i];
    console.log(drink);
    let divEl = document.createElement('div');
    mySection.appendChild(divEl);
  
    let h4El = document.createElement('h4');
    divEl.appendChild(h4El)
     h4El.textContent =drink.name;
  
    let pEl = document.createElement('p');
    divEl.appendChild(pEl);
    if(drink.isHot&& drink.isCold){
      pEl.textContent = `${drink.name} is available Hot and Cold and it has the following ingredients :`;
    }else if (drink.isHot){
      pEl.textContent = `${drink.name} is available Hot only and it has the following ingredients :`;
    }else{
      pEl.textContent = `${drink.name} is available Cold only and it has the following ingredients :`;
    }
    
    let ulEL = document.createElement('ul');
    divEl.appendChild(ulEL);
    for(let j =0;j<drink.ingredients.length;j++){
      let liEl = document.createElement('li');
      ulEL.appendChild(liEl);
      liEl.textContent =drink.ingredients[j];
    }
  
    let imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src',drink.imagePath)
  
     imgEl.setAttribute('alt',drink.name);

  }

  let tableEL = document.createElement('table');
  mySection.appendChild(tableEL);

  let trEl = document.createElement('tr');
  tableEL.appendChild(trEl);

  let thEL = document.createElement('th');
  trEl.appendChild(thEL);
  thEL.textContent= "Drink Name"

  let th1EL = document.createElement('th');
  trEl.appendChild(th1EL);
  th1EL.textContent= "Drink price"

  for(let i=0; i<Drink.allDrinks.length;i++){
    let drink = Drink.allDrinks[i];
    // console.log(drink);
    let trEl = document.createElement('tr');
    tableEL.appendChild(trEl);

    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = drink.name;

    let td1El = document.createElement('td');
    trEl.appendChild(td1El);
    td1El.textContent = drink.price;

  }
  // let h2el = document.createElement('h2');
  // mySection.appendChild(h2el);
  // h2el.textContent = 'Hello Everyone'



}





const espresso = new Drink('espresso',['espresso'],false,true,'./images/espresso.PNG');
const latte = new Drink('latte',['espresso','milk','whipped milk'],true,true,'./images/latte.PNG');
const mocha = new Drink('mocha',['espresso milk', 'whipped cream','chocolate syrub'],true,true,'./images/mocha.PNG');

// espresso.render();
// latte.render();
// mocha.render();



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
  render();
  settingItem();
  // console.log(newDrink);


}

function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log( Drink.allDrinks);


render();


///JSON data ///
/*JSON stands for JavaScript Object Notation

JSON is a text format for storing and transporting data

JSON is "self-describing" and easy to understand */


'{"name":"John", "age":30, "car":null}'

////local storage //////

//1. set date : save the data in local storage 

function settingItem(){
  let data = JSON.stringify(Drink.allDrinks);// convert the data to JSON format 
  localStorage.setItem('drinks',data)


}


//2. get date : take the data from local storage 

function gettingItem(){
  let stringObj = localStorage.getItem('drinks');
  // console.log(stringObj);
  let parsObj = JSON.parse(stringObj);
  // console.log(parsObj);
  if (parsObj !== null){
    Drink.allDrinks = parsObj
  }

  render();

}
gettingItem()


/// total Salary = summation for all employees salaries 
/// avg salary =  total Salary/ # employees 