let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener("click", function(){
    let input = document.getElementById("userInput").value;
    if (input == number) {
        output.innerHTML = `Doğru tahmin, sayı ${number} idi!`
    }

    else if (input < number){
        output.innerHTML = `Düşük tahmin ettin. Yukarı çık!`
    }

    if (input > number){
        output.innerHTML = `Yüksek tahmih ettin. Aşağı in!`
    }
})