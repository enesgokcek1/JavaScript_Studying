
    //*** 8 ürün alan koliye tüm ürünler sığıyor mu?

    let productPiece = 17
    let packegStorage = 8
    console.log("son koliye kalan ürün sayısı:", productPiece % packegStorage)
    console.log("oluşan koli sayısı:", 16 / 8)



    // ********** Boolean Veri Turu ile Calismak ********** 

    // 0 ve 1'i Anlamak ->
    let isActive = false // 0
    isActive = true // 1
    console.log(isActive)


    let userName;
    let isUserName = Boolean(userName)
    console.log(isUserName)

    Boolean("asd") // true
    Boolean("0") // true
    Boolean("") // false

    userName = "user"

    console.log("User Name:", Boolean(userName))


    // 0 ,-0, null, false, NaN, undefined, ("") ->
    Boolean(0) //  false
    Boolean(-0) // false
    Boolean(-0.1) // true
    Boolean(0 === 0) // true

    // Not: Karar Yapilari Kisminda Tekrar Anlatilacak
    Boolean(userName.length > 0) // true




    let number = "343"
    console.log("number: ", (number))

    let number3 = "asda"
    number3.toUpperCase()
    console.log(number3, typeof (number3))



    //Değişken türünü kontrol etme ve değiştirme

    let name = "34"
    let age = 22
    const id = 2330003344
    let phone = "22345"
    let date = "23"



    console.log("what is name typeof: ",
        typeof (name)
    )

    console.log("what is typeof age: ",
        typeof (age)
    )

    console.log("what is typeof id:",
        typeof (id)
    )

    console.log("what is typeof phone:",
        typeof (phone)
    )

    //metni sayıya çevir

    convertPhone = parseInt(phone)
    console.log("phone convert: ", convertPhone, typeof (convertPhone))


    convertToName = parseInt(name)
    console.log("convert name to ınt:", convertToName, typeof (convertToName))


    convertToDate = Number(date)
    console.log("convert date to NUMBER: ", convertToDate, typeof (convertToDate))


    //Template literals

    let names = "aho"
    let surname = "asd"
    let ages = 33
    let dates = "01/11/2011"
    let debth = 3349

    console.log(`Hello ${names} ${surname} 
                        your age ${ages}
                        and your birt date ${dates}
                        your debth ${debth}
                        have a nice day, see you again`)







    //string metodları çalışamsı

    let music = "elmas armut kuş asdjasjd jasdj asdjasj ja sdj"
    console.log(music.length)

    let musicAd = "asjdja"
    let musicSoy = 23123

    console.log(music.replace("ten more days", "lofi"))
    console.log(musicAd.concat("", musicSoy))
    console.log(music.charCodeAt(1))
    console.log(music.search(""))
    console.log(music.replace("elmas", "kastar"))
    console.log(music.includes("elma"))



    let url = "www.kodluyoruz.org";



    console.log(url.indexOf("."))
    urlDomain = url.slice(4)
    console.log(urlDomain)

    /*Soru 1: language adında bir değişken oluşturun ve değerini "JavaScript" olarak atayın. 
    Konsola yazdırın ve length metodunu kullanarak dizgenin uzunluğunu da konsola yazdırın.*/

    let language = "JavaScript"
    console.log(language)
    console.log(language.length)



    /* Soru 2:
    text adında bir değişken oluşturun ve değerini "Learn JavaScript" olarak atayın.
    indexOf metodunu kullanarak "JavaScript" kelimesinin başladığı indeksi bulun ve konsola yazdırın.*/

    let text = "Learn JavaScript"
    console.log(text.indexOf("JavaScript"))



    /* Soru 3:
    message adında bir değişken oluşturun ve değerini "Coding is fun!" olarak atayın.
    lastIndexOf metodunu kullanarak "is" kelimesinin son geçtiği indeksi bulun ve konsola yazdırın.*/

    let message = "Coding is fun"
    console.log(message.lastIndexOf("is"))

    /*Soru 4:
    sentence adında bir değişken oluşturun ve değerini "Hello, world!" olarak atayın.
    search metodunu kullanarak "world" kelimesinin başladığı indeksi bulun ve konsola yazdırın. */

    let sentence = "Hello, world!"
    console.log(sentence.search("world"))


    /*Soru 5:
    data adında bir değişken oluşturun ve değerini "JavaScript Programming" olarak atayın.
    slice metodunu kullanarak "Programming" kelimesini alın ve konsola yazdırın. */


    let data = "JavaScript programming"
    let dataLastIndexOf = data.lastIndexOf("programming")
    console.log("data last index: ", dataLastIndexOf)
    console.log(data.slice(11))


    /*Soru 6:
    text adında bir değişken oluşturun ve değerini "Hello JavaScript" olarak atayın. 
    replace metodunu kullanarak "JavaScript" kelimesini "TypeScript" ile değiştirin ve konsola yazdırın.*/

    let txt = "Hello JavaScript"
    console.log(txt.replace("JavaScript", "TypeScript"))


    /* Soru 7:
    greeting adında bir değişken oluşturun ve değerini "HELLO" olarak atayın. 
    toLowerCase metodunu kullanarak bu dizgeyi küçük harfe dönüştürün ve konsola yazdırın.*/

    let greeting = "HELLO"
    console.log(greeting.toLowerCase)


    /*Soru 8:
    text adında bir değişken oluşturun ve değerini "hello world" olarak atayın. 
    toUpperCase metodunu kullanarak bu dizgeyi büyük harfe dönüştürün ve konsola yazdırın. */

    let head = "hello world"
    console.log(head.toUpperCase)


    /*Soru 9:
    url adında bir değişken oluşturun ve değerini "https://www.kodluyoruz.org" olarak atayın. 
    "www" olmadan domain adı olarak "kodluyoruz.org"u almak için replace metodunu kullanın ve konsola yazdırın. */

    let Url = "https://www.kodluyoruz.org"
    console.log(Url.replace("https://www.kodluyoruz.org", "https://.kodluyoruz.org"))

    /*Soru 10:
    text adında bir değişken oluşturun ve değerini "one,two,three" olarak atayın. 
    split metodunu kullanarak bu dizgeyi virgüllerle ayırın ve bir dizi olarak konsola yazdırın */

    let header = "one, two, three"
    console.log(header.split(","))


