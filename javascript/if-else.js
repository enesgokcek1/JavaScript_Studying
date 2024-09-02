let price = "100"

// == sadece değer eşitse

console.log(price == 100) //true


// === hem tür hem değerin eşit olması

console.log(price === 100) //false

// != eşit değilse

console.log(price != "100") // false



// ehliyet if else koşulu

let userName = prompt("Kullanıcı adınızı giriniz:")
let age = prompt("yaşınızı giriniz:")
let ehliyetInfo = document.querySelector("#ehliyetInfo")


if (!userName && !age) {
    ehliyetInfo.innerHTML = "kullanıcı adınızı ve yaşınızı girmediniz"
}
else if (!age) {
    ehliyetInfo.innerHTML = "yaşınızı girmediniz"
}
else if (isNaN(age) || age.trim() === "") {
    ehliyetInfo.innerHTML = "Lütfen yaşınızı rakam olarak girin.";
}
else if (!userName) {
    ehliyetInfo.innerHTML = "kullanıcı adınızı girmediniz"
}
else if (userName && age) {
    ehliyetInfo.innerHTML = `kullanıcı adınız ${userName} yaşınız ise ${age}`
}




