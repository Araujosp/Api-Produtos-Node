const produtos = [
    {
        id:1,
        nome:'Mouse',
        estoque: 22,
        categoria:'periferico'
    },
    {
        id:2,
        nome:'Mouse pad',
        estoque: 55,
        categoria:'periferico'
    },
    {
        id:3,
        nome:'Ipad',
        estoque: 32,
        categoria:'periferico'
    },
    {
        id:4,
        nome:'Headset',
        estoque: 99,
        categoria:'periferico'
    },
    {
        id:5,
        nome:'Laptop',
        estoque: 78,
        categoria:'teste'
    },
    {
        id:6,
        nome:'Linux Mint',
        estoque: 10,
        categoria:'Sistema operacional'
    }       
]

const nome = produtos.map ((nome) =>nome);//percorre todos os itens foreach
console.log(nome);

const perifericos = produtos.filter(({categoria}) =>categoria ==='periferico');//traz somente o que voce trouxe no parametro

console.log (perifericos); 

const sop = produtos.find(({id}) =>id === 2); //um registro especifico
console.log(sop);

const reajustes = produtos.filter(({categoria}) => categoria === 'periferico').map((produto) => ({...produto, preco:produto.preco*1.2}));
