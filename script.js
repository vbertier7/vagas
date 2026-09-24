//atribuição
let meuNome = "joão";

//redeclaração
meuNome = "pedro";


const deMaior = false;

//const mensagem = `Meu nome é ${meuNome} e tenho ${idade} anos`;
//const mensagem = "Meu nome é "+ meuNome + " e tenho " + idade + " anos";
//console.log(mensagem);

//atribuição - objeto
const usuario = {
    nome: "jose",
    idade: 35
};
console.log(usuario)
console.log(usuario.idade) //35

// const frutas = ["maça", "banana", "morango"];
// console.log(frutas);
// console.log(frutas[1]);

let idade = 28

if (idade >= 18){
    console.log('Maior de idade')
} else {
    console.log('Menor de idade, vai pra casa!')
}

let validaIdade = (idade >= 18) ? 'Maior' : 'Menor';
console.log(validaIdade);


let statusSemaforo = 'vermelho';
switch (statusSemaforo){
    case 'vermelho':
        console.log('Pare!')
        break;
    case 'verde':
        console.log('Siga!')
        break;
    default:
        console.log('Aguarde!')
}



let contador = 0;

while (contador < 3){
    console.log(`O contador é ${contador}`);
    contador++;
}


for (let i = 0; i <5; i++){
    console.log(`o Valor de i é ${i}`)
}


const frutas = ["maça", "tomate", "banana", "morango", "uva"];

for (const fruta of frutas){
    if(fruta == "tomate"){
        continue;
    }
    console.log(fruta);
}


function somar(a, b){
    return a + b;
}

function cnh(idade){
    
    if ( idade >= 16){
        return 'maior de idade';
    }

    return 'menor de idade';
}

function multiTrad(a, b){
    return a*b;
}

const multiplicar = function(a, b){
    return a*b;
}

const multi = (a, b) => a*b;

console.log(multi(10,30));


const botao = document.getElementById('testelink');

botao.addEventListener('click', (event) => {
    alert('cliquei no botao');
    event.preventDefault();
});

const limpar = document.getElementById('btn-limpar');
const filtros = document.getElementsByClassName('filtro');

limpar.addEventListener('click', (event)=>{
    event.preventDefault();

    for (let i = 0; i < filtros.length; i++){
        filtros[i].checked = false;
        console.log(filtros[i].name)
    }

    showAlert('.alert');
})

function showAlert(el){
    const divAlert = document.querySelector(el);
    divAlert.style.display = 'block';
    setTimeout(function() {
        divAlert.style.display = 'none';
    }, 3000)
}
