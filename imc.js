var botaoCalcular = document.getElementById('calculo');
var botaoApagar = document.getElementById('limpar');
var destaque = document.getElementById('destaque');
var resultado = document.getElementById('resultado');
botaoCalcular.addEventListener('click', calcular);
botaoApagar.addEventListener('click', limpar);

function calcular(){    
    var altura = document.getElementById('altura').value;
    var massa = document.getElementById('massa').value;

    if( altura !== '' && massa !== '') {  
        var imc = massa / (altura  * altura);       
        calculo(imc);
    } else {
        alert('Dados incorretos, digite novamente');
        document.getElementById('altura').focus();
    }
}

function calculo(imc) {
    var condicao = '';
    var cor = '';
       
    if (imc < 16) {
        condicao = 'Magreza grave';
        cor = 'red';
    } else if (imc >= 16 && imc < 17) {
        condicao = 'Magreza moderada';
        cor = 'orange';
    } else if (imc >= 17 && imc < 18.50) {
        condicao = 'Magreza leve';
        cor = 'blue';
    } else if (imc >= 18.50 && imc < 25) {
        condicao = 'Saudável';
        cor = 'green';
    } else if (imc >= 25 && imc < 30) {
        condicao = 'Sobrepeso';
        cor = 'blue';
    } else if (imc >= 30 && imc < 35) {
        condicao = 'Obesidade Grau I';
        cor = 'orange';
    } else if (imc >= 35 && imc < 40) {
        condicao = 'Obesidade Grau II';
        cor = 'red';
    } else if (imc >= 40) {
        condicao = 'Obesidade Grau III';
        cor = 'red';
    }

    resultado.innerText = 'Seu IMC é: ' + imc.toFixed(2);
    destaque.innerText = condicao;
    destaque.style.color = cor;                                                                                                         
}

function limpar(){
    resultado.innerText = '';
    destaque.innerText='';
}


