function meuFormulario() {
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function dadosPessoais(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const etnia = form.querySelector('.etnia');
        const nacionalidade = form.querySelector('.nacionalidade');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value,
            etnia: etnia.value,
            nacionalidade: nacionalidade.value
        });
        console.log(pessoas);

        resultado.innerHTML += `<p>Usuario:${nome.value}, Sobrenome:${sobrenome.value}, idade do usuario:${idade.value}, peso:${peso.value}, ` +
            ` altura:${altura.value}, etnia:${etnia.value}, nacionalidade:${nacionalidade.value}</p>`;
    };
    form.addEventListener('submit', dadosPessoais);
}

meuFormulario();