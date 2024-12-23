let api = "https://jsonplaceholder.typicode.com/users";
let currentPage =1;
let usersPerPageLimit = 5


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

async function fetchDisplayData(){
    const sortCriteria = document.getElementById('sort').value;


    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch data");
        let data = await response.json();

        if(sortCriteria){
            data.sort((a,b)=>{
                // if(a[sortCriteria] > b[sortCriteria]) return -1;
                if(a[sortCriteria] < b[sortCriteria]) return -1;
                return 0;
            })
            console.log(sortCriteria)
            
        }
        displayData(data);
    } catch(error){
        console.log(error)
    }

}



function displayData(data){
    const userDiv = document.getElementById("container");
    userDiv.innerHTML = '';
    data.forEach(function (distribute){
      
        const insidediv =document.createElement("div");
        insidediv.classList.add("users")
        insidediv.innerHTML=
        `
            <h3>${distribute.name}</h3>
            <p>Email: ${distribute.email}</p>
            <p>City: ${distribute.address.city}</p>
            <p>City: ${distribute.id}</p>
        `
        userDiv.appendChild(insidediv)

    })
}


function createPagination(){
    const pagination = document.getElementById(`pagination`);
    pagination.innerHTML ="";
    for(let i =1; i<=3;i++){
        const button = document.createElement("button")
        button.textContent = i;
        button.addEventListener('click',()=>{
            currentPage = i
            fetchUsers(currentPage)
        })
        pagination.appendChild(button)
    }

}

