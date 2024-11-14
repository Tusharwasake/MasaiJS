
function userData(){
    fetch("https://dummyjson.com/users")
    .then(function(response){
        return response.json()
    })
    .then(function(data){

        allUser(data.users)
    })
    .catch(function(error){
        console.error("something went wrong");
        
    })
};


function allUser(people){
    const users = document.getElementById("container");
    users.innerHTML = ""; 
    people.forEach(element => {
        const userElement = document.createElement("div");
        
        userElement.className = "users";

        userElement.innerHTML=
        `
            <h1>Name: ${element.firstName}, middle:${element.maidenName}, Last: ${element.lastName}</h1>
            <p>${element.email}</p>
        `
        users.appendChild(userElement)

        
    });
    
}





