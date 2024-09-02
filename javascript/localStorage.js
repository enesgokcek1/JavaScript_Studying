//local storage holds and protects data 
localStorage.setItem("myCat", "Tom");
localStorage.setItem("myCar", "Togg");

const cat = localStorage.getItem("myCat")
const car = localStorage.getItem("myCar")

localStorage.removeItem("myCat")
localStorage.removeItem("myCar")


//session storage holds and protects data until close the web page

sessionStorage.setItem('key', 'value');
sessionStorage.setItem("color", "blue")


let value = sessionStorage.getItem('key');
let color = sessionStorage.getItem("color")


sessionStorage.removeItem('key');
sessionStorage.removeItem("color")

//local storage example

let user = { userName: "enes salih gokcek", userAge: "22", isActive: true }
console.log(user)

localStorage.setItem("userInfo", JSON.stringify(user))

let userInfo = localStorage.getItem("userInfo")
console.log(userInfo)

const PASSWORDS = { userPassword: 2723, userLocalPassword: 8345 }
localStorage.setItem("userPassword", JSON.stringify(PASSWORDS))



// Retrieve data from local storage

const developer =
{
    developerName: "Enes Gokcek",
    developerAge: "23"
}

localStorage.setItem("developer", JSON.stringify(developer));


// localStorage'dan JSON string'ini alma
const kullanıcıVerisi = localStorage.getItem('kullanıcı');

// JSON string'ini nesneye çevirme
const kullanıcı = JSON.parse(kullanıcıVerisi);

// Veriyi kullanma
//console.log(kullanıcı.isim); // Çıktı: Enes Salih Gökçek
//console.log(kullanıcı.yaş);  // Çıktı: 30



// saving user theme preferences (LocalStorage example)

document.querySelector("#darkTheme").addEventListener("click", () => {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark")
});

document.querySelector("#lightTheme").addEventListener("click", () => {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
});


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}
else {
    document.body.classList.remove("dark");
}


// shopping cart application (SessionStorage example)

// add product
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// show product
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });
}

// clear product
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
}

// show the product when the loading page
document.addEventListener('DOMContentLoaded', displayCart);








     
// Log in function
function login()
{
let USER_NAME= document.querySelector("#userName").value
let USER_PASSWORD= document.querySelector("#userPassword").value
 localStorage.setItem("User_Name", USER_NAME)
 localStorage.setItem("User_Password", USER_PASSWORD)
displayWelcomeMessage();
 
}

// Login information 
function displayWelcomeMessage()
{
    const userInfo= localStorage.getItem("User_Name")

    if(userInfo)
    {
        document.querySelector("#user").textContent=userInfo;
        document.querySelector("#loginForm").style.display="none";
        document.querySelector("#welcomeMessage").style.display="block";
        
    }
}

// logout function

function logout()
{
    localStorage.removeItem("username");
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('welcomeMessage').style.display = 'none';
    
}

// when the loading page check the user
document.addEventListener('DOMContentLoaded', displayWelcomeMessage);




//excersize

let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent()
{
    this.id == "increase" ? counter += 1 : counter -=1
    localStorage.setItem("counter",counter)
    counterDOM.innerHTML = counter
}
