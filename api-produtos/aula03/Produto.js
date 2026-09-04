export default class Produto {
    //constructor
    constructor({ id, nome, preco, estoque = 0 }) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new TypeError('ID não é um valor inteiro');
        }
        if (typeof nome !== 'string' || nome.trim() === '') {
            throw new TypeError('Nome é obrigatório');
        }
        if (!Number.isFinite(preco) || preco < 0) {
            throw new TypeError('Preço Inválido');
        }
        if (!Number.isInteger(estoque) || estoque < 0 || !Number.isFinite(estoque)) {
            throw new TypeError('Estoque invalido');
        }
        Object.assign(this, { id, nome: nome.trim(), preco, estoque }); //atribui para mais de um item
    }
    retirar(quantidade) {
        if (!Number.isInteger(quantidade) || (quantidade) <= 0) {
            throw new RangeError('Quantidade de saída inválida');
        }

        if (quantidade > this.estoque) {
            throw new RangeError('Estoque insuficiente');
        }
        this.estoque -= quantidade;

    }
}