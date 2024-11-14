// fetch("https://www.themealdb.com/api.php?ref=apilist.fun")


fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
.then(function(response){
    // console.log(response.json())
    return response.json()
})
.then(data => {
    console.log(data); 
    return data;// Now logs the actual data, not a pending Promise
  })


