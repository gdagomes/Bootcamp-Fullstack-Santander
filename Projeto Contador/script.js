var elementCurrentNumber = document.getElementById("currentnumber");

var currentNumber = 0;

function adicionar(){

    currentNumber = currentNumber + 1;
    elementCurrentNumber.innerHTML = currentNumber;
}

function subtrair(){

    currentNumber = currentNumber - 1;
    elementCurrentNumber.innerHTML = currentNumber;
}


