// örnek çalışma


let buttonClass = document.querySelector(".buttonProperty") //class çektik
buttonClass.classList.add("bgc-color") // üstüne yeni class eklendi

if (buttonClass.classList.contains("bgc-color")) // özellikle yeni class üstünden css eklendi
{
    buttonClass.style.backgroundColor = "orange";
    buttonClass.style.color = "black";
}

buttonClass.classList.remove(".buttonProperty")//eski class silindi
buttonClass.classList.add("new-class") // yeni class eklendi

if (buttonClass.classList.contains("new-class")) // yeni clas css eklendi
{
    buttonClass.style.backgroundColor = "purple"
    color = "blue"
}



/****************************************************************************************************************/


// ÜRÜN EKLEME LİSTESİ

const urun = document.querySelector("#urun");
const ekle = document.querySelector("#ekle");
const liste = document.querySelector("#liste");

ekle.onclick = function () {
    let liAdd = document.createElement("li");
    liAdd.textContent = urun.value;
    liste.appendChild(liAdd);
    urun.focus();//focus kısmını çözedmedim

} //




/****************************************************************************************************************/



// MY FORM

function validateForm() {
    // Assuming 'fname' is the name of the form, and 'name' is the name of the input field
    let x = document.forms["myForm"]["fname"].value;

    if (x.length < 5) {
        alert("Karakter uzunluğu min 5 olmalı");
        return false; // Prevents form submission
    }
    return true; // Allows form submission
}


/****************************************************************************************************************/



// MY FUNCTION

function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("mfnct").innerHTML = text;
}




/****************************************************************************************************************/



// BUTTON COLOR CHANGE
function buttonColorChange() {
    document.getElementById("color").style.color = "red"
}

function changeText(id) {
    id.innerHTML = "oppss"
}

function displayDate() {
    document.getElementById("dispDate").innerHTML = Date();
}




/****************************************************************************************************************/



//UPPERCASE
function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}





/****************************************************************************************************************/




// MOUSE OVER OUT DOWN UP

document.getElementById("clickBUTTON").onclick = displDate;

function displDate() {
    document.getElementById("cvb").innerHTML = Date();
}



function mouseOver(obj) {
    obj.innerHTML = "thank you :)"
    obj.style.backgroundColor = "green"
}

function mouseOut(obj) {
    obj.innerHTML = "mouse over me"
    obj.style.backgroundColor = "yellow"
}



function mouseDown(hold) {
    hold.innerHTML = "Release Me"
    hold.style.backgroundColor = "red"
}

function mouseUp(hold) {
    hold.innerHTML = "Thank you"
    hold.style.backgroundColor = "green"

}



/****************************************************************************************************************/



//ADD EVENT LİSTENER

document.getElementById("eventListener").addEventListener("click", eventFunction)

function eventFunction() {
    alert("hello world :)")
}



/****************************************************************************************************************/



// SUCCESSİVE(ART ARDA) ADD EVENT LİSTENER FUNCTİON

let x = document.getElementById("myButton");
x.addEventListener("click", functionOne);
x.addEventListener("click", functionTwo);

function functionOne() {
    alert("click one okey")
}

function functionTwo() {
    alert("click two okey")
}



/****************************************************************************************************************/



//add events of different types to the same element

let y = document.getElementById("opButton");
y.addEventListener("click", meFunction)
y.addEventListener("mouseover", mySecondFunction)
y.addEventListener("mouseout", myThirdFunction)

function meFunction() {
    document.getElementById("cvb").innerHTML = "clicked <br>"
    y.innerHTML = "clicked"
}

function mySecondFunction() {
    document.getElementById("cvb").innerHTML = "mouse over <br>"
    y.innerHTML = "mouse over"
}

function myThirdFunction() {
    document.getElementById("cvb").innerHTML = "mouse out <br>"
    y.innerHTML = "mouse out"
}
document.getElementsByClassName



/****************************************************************************************************************/





// GIVE INFO WITH PROMPT 

let namee;

while (true) {
    let deger = window.prompt("rakam gir")


    namee = Number(deger)

    if (!isNaN(namee)) {
        window.alert("geçerli değer girdin.")
        break;
    }
    else {
        window.alert("lütfen geçerli rakam girin.")
    }
}
document.write("girilen deger:" + namee)



/****************************************************************************************************************/



// LASTCHİLD 

let lastChild = document.querySelector("ul#list>li:last-child")
console.log(lastChild)

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "kendi ögem"

ulDOM.append(liDOM) // en sona ekler
ulDOM.prepend(liDOM)



/****************************************************************************************************************/



// DOM a CSS class bilgisi ekleme çıkartma "CLASSLİST"

let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class") //birden fazla class ekleme
greeting.classList.remove("title", "second-class") // class silme
console.log(greeting.classList)






buttonClass.classList.replace("bgc-color", "new-class") // yeni class ile eski class değiştirildi

let firstClassName = buttonClass.classList[0]; // buttondaki classların ilkini yazdır
alert("first class name: " + firstClassName);


alert("is class list contains classList class name ?")// class classList class ını içeriyor mu?
if (buttonClass.classList.contains("classList")) {
    alert("true")
}
else {
    alert("false")
    alert("so contains new-class?")// peki ya new class ı ?

    if (buttonClass.classList.contains("new-class")) {
        alert("yes")
    }
    else {
        alert("no")
    }

}



/****************************************************************************************************************/


// JS DOM EXERCISES, PRACTICE 1
//Clicking on the button the font, font size, and color of the paragraph text will be changed.

function js_style() {
    // Setting font size using JavaScript
    text.style.fontSize = "14pt";
    // Setting font family using JavaScript
    text.style.fontFamily = "Comic Sans MS";
    // Setting text color using JavaScript
    text.style.color = "green";
}



/****************************************************************************************************************/


// JS DOM EXERCISES, PRACTICE 2



function getFormValue() {
    let submitButton = document.getElementById("uhyt")
    let fname = document.getElementById("formFName").value
    let lname = document.getElementById("formLName").value
  
    

    if (fname ==""  || lname =="" ) {   
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }


    
}


const form1 = document.getElementById("form1");
form1.addEventListener("mouseover", getFormValue)



/****************************************************************************************************************/



// JS DOM EXERCISES, PRACTICE 3

function bgcChange()
{
    let clickbtn= document.querySelector("#clickBgc")
    let bgc1 = document.querySelector("#bgc1")
    let bgc2 = document.querySelector("#bgc2")
    bgc1.style.backgroundColor="red"
    bgc2.style.backgroundColor="yellow"
}



/****************************************************************************************************************/


// JS DOM EXERCISES, PRACTICE 4

// Function declaration for getAttributes

function getAttributes()
{
    var w3rHref= document.getElementById("w3r").href;
    alert("the value of the attribute href of the link is : " +w3rHref)
    var w3rType= document.getElementById("w3r").type;
    alert("the value of the attribute type of the link is : " + w3rType)
    var w3rHreflang= document.getElementById("w3r").hreflang;
    alert("the value of the attribute hreflang of the link is : " + w3rHreflang)
    var w3rRel= document.getElementById("w3r").rel;
    alert("the value of the attribute rel of the link is : " + w3rRel)
    var w3rtarget= document.getElementById("w3r").target;
    alert("the value of the attribute target of the link is : " + w3rtarget)
    
}