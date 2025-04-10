document.addEventListener('DOMContentLoaded', function(){
const botaoacessiblidade = this.document.getElementById('botaoacessiblidade')
const opcoesDeAcessiblidade= document.getElementById('opcoes-acessiblidade')

botaoacessiblidade.addEventListener(`click`, function(){
botaoacessiblidade.classlist.toggle('rotacao-botao');
opcoesDeAcessiblidade.classList.toggle('apresenta-lista')

})

    const aumentaFonteBotao = document.getElementById('botao-acessibilidade');
    const diminuiFonteBotao = document.getElementById('opcoes-acessibilidade');


    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });

});