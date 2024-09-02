// hackerrank if else example
function hackerButton() {
    let hackerInput = document.querySelector("#hackerrankIfElse").value
    let number = parseInt(hackerInput, 10);

    if (isNaN(number)) {
        document.getElementById('message').innerHTML = "Geçerli bir sayı girin.";
        return;
    }

    if (number % 2 === 0) {
        document.getElementById('message').innerHTML = number + " çift bir sayıdır.";
    } else {
        document.getElementById('message').innerHTML = number + " tek bir sayıdır.";
    }
}



// hackerrank if else example 2

function hackerButton2()
{
    let getValue= document.querySelector("#getValue").value
    let valueBetween= parseInt(getValue,10);

    if (isNaN(valueBetween))
    {
        document.querySelector("#message2").innerHTML = "girilen değer sayı değildir"
        return;
    }

    if(valueBetween >=2 && valueBetween<=5 )
    {
        document.querySelector("#message2").innerHTML = "girilen değer 2 ve 5 aralığındadır"
    }
    else if (valueBetween >=6 && valueBetween<=20)
    {
        document.querySelector("#message2").innerHTML = "girilen değer 6 ve 20 arasındadır"
    }
    else if (valueBetween <=1)
    {
        document.querySelector("#message2").innerHTML = "girilen değer 1 veya daha küçük sayıdır"
    }
    else
    {
        document.querySelector("#message2").innerHTML = "girilen değer 20 ve üzeridir"
    }

}