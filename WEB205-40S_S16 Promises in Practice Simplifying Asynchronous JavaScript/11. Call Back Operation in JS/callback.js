const num1 = 20;
const num2 = 10;

function addOperation(num1,num2,callback){
    const total = num1 + num2;
    console.log("Addition:", total);
    console.log("Multiplication:", callback(num1, num2));


}


function mulOperation (num1, num2){
    const mul = num1*num2
    return mul
}


addOperation(num1, num2, mulOperation);