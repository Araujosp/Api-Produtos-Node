const original = {
    id:1,
    nome:'Mouse',
    estoque: 8
};

//operador spread ...

const atualizado = {...original, estoque:5};

console.log({original, atualizado});

const {nome, estoque} = atualizado;

console.log(`${nome} possui ${estoque} unidade(s)`);

//template string só exibe informações simples, ele não consegue converter objetos ou coleções (arrays)

console.log (`o conteudo de atualizado é: ${atualizado}`);
console.log ('o conteudo de ataualizado é: ', atualizado);
