let numero = Number(prompt('Digite um numero:'));



const tituloNumero = document.getElementById('Numb');
const numeroInteiro = document.getElementById('intnum');
const naoNumero = document.getElementById('naoNumero');
const menorNum = document.getElementById('menorNum');
const raizNum = document.getElementById('raizq');
const roundUp = document.getElementById('roundUp');
const numeroDec = document.getElementById('casaDecimal');





tituloNumero.innerHTML ='';
raizNum.innerHTML += (`A raiz quadrada de ${numero} é ${Math.sqrt(numero)}`);
numeroInteiro.innerHTML += (`O numero ${numero} é inteiro? ${Number.isInteger(numero)}`);
naoNumero.innerHTML += (`O numero ${numero} é NaN? ${Number.isNaN(numero)}`);
menorNum.innerHTML += (`O numero ${numero} arredondado pro menor valor é ${Math.floor(numero)}`);
roundUp.innerHTML += (`O numero ${numero} arredondado pro maior valor é ${Math.ceil(numero)}`);
numeroDec.innerHTML += (`O numero ${numero} com duas casas decimais fica assim: ${numero.toFixed(2)}`);






