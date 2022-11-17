function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

//Calcula seno

function sen() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = Math.sin(resultado * Math.PI/180);
}

//calcula tangente

function tan() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = Math.tan(resultado * Math.PI/180);
}

//calcula coseno

function cos() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = Math.cos(resultado * Math.PI/180);
}

//calcula potencia

function pot() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado + "**";
}

//calcula fatorial

function fat() {
    var resultado = document.getElementById('resultado').innerHTML;
    var resultadoNum = parseInt(resultado)
    var fat = resultadoNum
    while (resultadoNum > 1) {
        resultadoNum--
        fat = fat * resultadoNum

    }
    if (fat === 0) {
        document.getElementById('resultado').innerHTML = 1
    } else {
        document.getElementById('resultado').innerHTML = fat
    }
}

//calcula euler

function eul() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = (Math.exp(resultado)).toFixed(8);
}

//calcula fibonacci

function fib() {
    var resultado = document.getElementById('resultado').innerHTML;
    var resultadoNum = parseFloat(resultado)
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    var soma = 0
    for (var i = 2; i < resultadoNum; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    for(var i =0;i<fibonacci.length;i++){
        soma+=fibonacci[i];
     }
    document.getElementById('resultado').innerHTML = soma;
}

//calcula o inverso

function inv() {
    var resultado = document.getElementById('resultado').innerHTML;
    var resultadoNum = parseFloat(resultado)
    document.getElementById('resultado').innerHTML = (1/resultadoNum).toFixed(3);
}

//calcula hexadecimal

function hexa() {
    var resultado = document.getElementById('resultado').innerHTML;
    var resultadoNum = parseFloat(resultado)
    var hexaResult = resultadoNum.toString(16)
    document.getElementById('resultado').innerHTML = hexaResult;
}

//calcula octadecimal

function octa() {
    var resultado = document.getElementById('resultado').innerHTML;
    var resultadoNum = parseFloat(resultado)
    var hexaResult = resultadoNum.toString(8)
    document.getElementById('resultado').innerHTML = hexaResult;
}

//calcula binario

function bi() {
    var resultado = document.getElementById('resultado').innerHTML;
    var resultadoNum = parseFloat(resultado)
    var hexaResult = resultadoNum.toString(2)
    document.getElementById('resultado').innerHTML = hexaResult;
}

function pi() {
    document.getElementById('resultado').innerHTML = (Math.PI).toFixed(10);
}

function ln() {
    var resultado = document.getElementById('resultado').innerHTML;
    var resultadoNum = parseFloat(resultado)
    document.getElementById('resultado').innerHTML = (Math.log(resultadoNum)).toFixed(10);
   

}



function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "nenhum"
    }
}
