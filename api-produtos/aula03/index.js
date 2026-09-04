import Produto from "./Produto.js";
import { formatarMoeda } from "./formatarMoeda.js";   //first class, modules, midwares, rotas

//console.log(formatarMoeda(7.67));
const produto = new Produto ({id:1, nome:'Mouse', preco:89.9, estoque:3 });

console.log(`${produto.nome}: ${formatarMoeda(produto.preco)}`);

produto.retirar(1);
console.log(produto);

produto.retirar(1);
console.log(produto);






