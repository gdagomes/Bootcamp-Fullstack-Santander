var elementCurrentNumber = document.getElementById("currentNumber");
var currentNumber = 0;

function adicionar(){

    currentNumber++;

    mostrarnatela();

}

function subtrair(){

    currentNumber--;
   
    mostrarnatela();

}


function mostrarnatela(){
    if (currentNumber >= 0){
        document.getElementById("currentNumber").style.color = "blue";
    }
    else{
        document.getElementById("currentNumber").style.color = "red";
    }

    elementCurrentNumber.innerText = currentNumber;
}
