let users = [
    {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    },
    {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    },
    {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    },
    {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    },
    {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    },
    {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    },
    {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    },
    {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    },
    {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    },
    {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    },
];




document.addEventListener('DOMContentLoaded',function(){

    const userCarts = document.getElementById("userCarts");

        users.forEach(user=>{
            
            const cart = document.createElement('div');
            cart.className = 'cart';
            cart.innerHTML =
            `
                <h4>${user.name}</h4>
                <p>${user.email}</p>
                <button onclick="addToCart(${user.id},users)">Add to cart</button>

            `;

            userCarts.appendChild(cart);

        });
    });



// localStorage.setItem('name',"tusharwasake");
// localStorage.setItem('name2',"tushar new");

// var myData = localStorage.getItem('name')
// console.log('myData:',myData)

// localStorage.removeItem('name')

// localStorage.clear()



function addToCart(userId,users) {
    // Implementation for adding to cart
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const user = users.find(u => u.id === userId);
    if (!cart.some(u => u.id === userId)) {
        cart.push(user);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}