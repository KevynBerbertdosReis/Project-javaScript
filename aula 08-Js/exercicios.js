const nome = 'Kevyn';
const sobrenome = 'dos Reis';
const idade = 21;
const altura = 1.86;
const peso = 80;
let imc; //peso / (altura * altura)
let anoNascimento;


let valorImc = altura * altura / peso;
let anoQueNasceu = 2024 - idade;


console.log(`Meu nome é ${nome} ${sobrenome} tenho ${idade} anos tenho altura de ${altura} e peso: ${peso} kg`)
console.log(`o meu imc é de: ${valorImc}`)
console.log(`o ano em que eu nasci foi: ${anoQueNasceu}`)