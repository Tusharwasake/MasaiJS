// fetch("https://www.themealdb.com/api.php?ref=apilist.fun")


function getCategoryData(){
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(function(response){
        // console.log(response.json())
        return response.json()
    })
    .then(data => {
        // console.log(data); 
        data.meals.forEach(element => {
            console.log(element)
        });
     
    })
    .catch(function(Error){
        return Error;   
    })

};


function getIngredientData(){
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
    .then(response=>{
        console.log(response)
        return response.json()
    })
    .then(IngredientData=>{
        console.log(IngredientData)
        IngredientData.meals.forEach(function(Ingredient){
            console.log(Ingredient)
        })
    })
    
}


let getCategoryDataButton = document.getElementById("get-category-data");
let getIngredientDataButton = document.getElementById("getIngredientData");

getCategoryDataButton.addEventListener("click",getCategoryData)
getIngredientDataButton.addEventListener("click",getIngredientData)
