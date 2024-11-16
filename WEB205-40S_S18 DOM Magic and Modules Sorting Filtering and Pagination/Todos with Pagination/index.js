
let API_URL = 'https://jsonplaceholder.typicode.com/todos';
let todosPerPage = 10;
let currentPage = 1;

document.getElementById("fetchTodos").addEventListener('click',()=>{
    fetchTodos(currentPage);
    createPagination();
});

function fetchTodos(page){
    fetch(`${API_URL}?_page=${page}&_limit=${todosPerPage}`)
    .then(response=>response.json())
    .then(data=>{
        displayTodos(data);
    })
    .catch(error=>console.error('error fetching todos',error));
}

function displayTodos(todos){
    const todolist = document.getElementById('todolist');
    // todolist.innerHTML = "";
    todoItem.innerHTML = " ";
    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
          <span>${todo.title}</span>
          <input type="checkbox" ${todo.completed ? 'checked' : ''} disabled>
        `;
        todoList.appendChild(todoItem);
      });     
}

function createPagination(){
    const pagination = document.getElementById('pagination');
    pagination.innerHTML='';
    for(let i =1;i<=20;i++){
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click',()=>{
            currentPage = i
            fetchTodos(currentPage)
        });
        pagination.appendChild(button)
    }
}
















// function todolist(urlValue){
    
//     // fetch("https://jsonplaceholder.typicode.com/todos")
//     urlValue.then(response=>
//         {
//             return response.json();
//         })
//     .then(data=>{
//         listToDo(data);   
//     })
//     .catch(error=>{
//         console.error("error was catch")
//     })

// }


// function listToDo(data){

//     const selectList = document.getElementById("dolist");

//     data.forEach(element => {

//         const insideDiv = document.createElement("div");
//         insideDiv.className="newClass";

//         insideDiv.innerHTML = 
  
//         `
//             <h4>${element.title} <input type="checkbox" value=""></h4>

       
                
//         `;

//         selectList.appendChild(insideDiv);

//     });


// }
// let pagevalue = document.querySelector(".page").value;


// function pageClick(num){
//     console.log("Hello World")
    
//     console.log(num)
//     let pageLink = `https://jsonplaceholder.typicode.com/todos/${num}`;

//     // console.log(pageLink)
//     todolist(pageLink)



// }



