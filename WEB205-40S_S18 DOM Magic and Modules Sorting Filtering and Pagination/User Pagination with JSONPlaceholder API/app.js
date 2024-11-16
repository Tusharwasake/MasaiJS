let api = "https://jsonplaceholder.typicode.com/users";
let currentPage =1;
let usersPerPageLimit = 100


document.getElementById("userList").addEventListener("click", function () {
    fetchUsers(currentPage);
    createPagination();
});


function fetchUsers(currentPage){

    fetch( `${api}?_page=${currentPage}&_limit=${usersPerPageLimit}`)
    .then(function(response){
        return response.json();
    })
    .then(data=>{
        displayData(data);
        console.log(data)
        
    })
    .catch(error=>{
        console.error("error while catch",error);
    })

}


function displayData(data){
    const userDiv = document.getElementById("container");
    userDiv.innerHTML = '';
    data.forEach(function (distribute){
      
        const insidediv =document.createElement("div");
        insidediv.classList.add("users")
        insidediv.innerHTML=
        `
        <h4>${distribute.name}</h4>
        <p>${distribute.email}</p>
        `
        userDiv.appendChild(insidediv)

    })
}


function createPagination(){
    const pagination = document.getElementById(`pagination`);
    pagination.innerHTML ="";
    for(let i =1; i<=5;i++){
        const button = document.createElement("button")
        button.textContent = i;
        button.addEventListener('click',()=>{
            currentPage = i
            fetchUsers(currentPage)
        })
        pagination.appendChild(button)
    }

}

