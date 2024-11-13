
// console.log(localStorage.getItem('cart'))

const cart = JSON.parse(localStorage.getItem('cart'))




document.addEventListener('DOMContentLoaded',function(){
    const userAdded = document.getElementById('dataCart')

    cart.forEach(data=>{
        const newCart =  document.createElement('div');
        newCart.className ='newCartData'

        newCart.innerHTML =
        `
        <h4>${data.name}</h4>
        <p>${data.email}</p>
        <button onclick="deleteItem(${data.id},cart)">DELETE BUTTON</button>
        `;
        userAdded.appendChild(newCart);

    });
   
    
});


function deleteItem(userId,cart){
    // const cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(user=> user.id !== userId);
    localStorage.setItem('cart',JSON.stringify(cart));
    location.reload();


   
}

