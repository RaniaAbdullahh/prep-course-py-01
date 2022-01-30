const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const recipeData = require('./data.json');

///// endpoints ///server for food recipes 

app.get('/',helloWorldHandler);
app.get('/recipes',recipesHandler)
app.get('*',notFoundHndler)
//constructor
function Recipe(id,title,readyInMinutes,summary,instructions,image){
    this.recipeid = id;
    this.recipetitle = title;
    this.recipereadyInminute = readyInMinutes;
    this.summary = summary;
    this.instructions = instructions;
    this.image = image
}




function helloWorldHandler(req,res){
    return res.status(200).send("Hello from my server ");

}



function recipesHandler(req,res){
    let recipes=[];
    recipeData.data.map(recipe =>{
        let oneRecipe = new Recipe(recipe.id, recipe.title,recipe.readyInMinutes,recipe.summary,recipe.instructions,recipe.image)
        recipes.push(oneRecipe)
    })
    console.log(recipes)
    return res.status(200).json(recipes)
}

function notFoundHndler(req,res){
    return res.status(404).send('huh????')
}

//// IP adress any local machine : 127.0..01 (localhost): port 3000,5500, 8080 
//localhost:3000

app.listen(3000, ()=>{

    console.log('listening to port 3000')
})

// npm init -y 
// npm i express cors 
// server.js 

