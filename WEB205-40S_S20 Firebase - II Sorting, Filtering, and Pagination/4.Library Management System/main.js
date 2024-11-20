// // Factory function 

// function iphone(model,storage,color){
//     return{
            
//         model:model,
//         storage:storage,
//         color:color,
//         getInfo(){
//             return `${this.model} with ${this.storage}GB storage in ${this.color} color`
//         }
//     }

// }


// console.log(iphone("iphone12",256,"red"))



// // constructor function

// function CreateIphone(model,storage,color){
//     this.model = model,
//     this.storage = storage,
//     this.color = color,
//     this.getinfo = function(){
//         return `${this.model} with ${this.storage}GB storage in ${this.color} color`
//     }
// }

// let constructorFunction = new CreateIphone("iphone12",256,"red")

// console.log(constructorFunction.getinfo())



// // create a book librabry 

// // Factor function 
// function books(title,author,yearPublication){
//     return{
//         title:title,
//         author:author,
//         yearPublication:yearPublication,
//         isOld(){
//             let currentYear = new Date().getFullYear();
//             return currentYear - this.yearPublication>10 
//             // return `${title} is written by ${author} and was published in ${yearPublication} `
//         }
//     }
// }

// let b1 = books("Million dollor weekend","Noah Kagan",2017);

// console.log(b1.isOld());


// // constructor Function

// function CreateBooks(title,author,yearPublication){
//     this.title = title,
//     this.author = author,
//     this.yearPublication = yearPublication
//     this.isOld = function(){
//         let currentYear = new Date().getFullYear();
//         return currentYear - this.yearPublication>10;
//     }

// }


// let newBooks = new CreateBooks("Million dollor weekend","Noah Kagan",2007)

// console.log(newBooks.isOld())


// //  class function for book 


// class CreateBooks2{
//     constructor(title,author,yearPublication){
//         this.title = title,
//         this.author = author,
//         this.yearPublication = yearPublication
//         this.isOld = function(){
//             let currentYear = new Date().getFullYear();
//             return currentYear - this.yearPublication>10;
//         }
//     }
// }


// let bc1 = new CreateBooks2("Million dollor weekend","Noah Kagan",2017);
// console.log(bc1.isOld())




// function createEmployee(firstName,lastName,position){
//     return{
//         firstName:firstName,
//         lastName:lastName,
//         position:position,
//         getDetails(){
//             return `${this.firstName} ${this.lastName} - ${this.position}`
//         }
//     }
// }

// let employee = createEmployee('Tushar',"Wasake","Finance");

// console.log(employee)


// Drawback of this it will try create object method every time


// Refactor using ProtoType


// function CreateEmployeeProto(firstName,lastName,position){
//     let employeeinfo = {
//         firstName:firstName,
//         lastName:lastName,
//         position:position,
//     };
//     employeeinfo.__proto__ = empProto;
//     return employeeinfo
// }

// const empProto ={
//     getDetails(){
//         return `${this.firstName} ${this.lastName} - ${this.position}`
//     }
// }

// let employeeProto = new CreateEmployeeProto('Tushar',"Wasake","Finance");

// console.log(employeeProto)



// object create prototype 

// const empProtoType = {
//     getDetails(){
//         return `${this.firstName} ${this.lastName} - ${this.position}`
//     }
// }


// function CreateEmployeeProto(firstName,lastName,position){
//     let employee = Object.create(empProtoType);
//     employee.firstName = firstName;
//     employee.lastName = lastName;
//     employee.position = position;
//     return employee;
    
// }


// let employeeProto = CreateEmployeeProto('Tushar',"Wasake","Finance");

// console.log(employeeProto)




//  object set prototype


// function CreateEmployeeProto(firstName,lastName,position){
//     let employee = {
//         firstName,
//         lastName,
//         position,
//     };
//     Object.setPrototypeOf(employee,empProtoType);
//     return employee;
    
// }

// const empProtoType = {
//     getDetails(){
//         return `${this.firstName} ${this.lastName} - ${this.position}`
//     }
// }

// let employeeProto = CreateEmployeeProto('Tushar',"Wasake","Finance");

// console.log(employeeProto)




class CreateEmployee{
    constructor(firstname,lastname,position){
        this.firstname = firstname;
        this.lastname = lastname;
        this.position = position;
    }
    getDetails(){
            return `${this.firstName} ${this.lastName} - ${this.position}`
        
    }
}

let employeeClass = new CreateEmployee('Tushar',"Wasake","Finance");

console.log(employeeClass);

