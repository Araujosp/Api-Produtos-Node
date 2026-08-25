function consultarProduto(id) {
    return new Promise ((resolve, reject) => {setTimeout(() =>{
        if (id === 1)
            resolve ({id:1, nome:'Mouse'});
        else
            reject (new Error(`Produto ${id} não encontrado`));
    }, 80);
});
}//return


consultarProduto(1)
    .then((produto) => console.log('Sucesso: ', produto))
    .catch((erro) => console.error('Falha: ', erro.message));


async function exectuar(id) {
    try{
        const produto = await consultarProduto(id);
        console.log ('Sucesso: ', produto);
    } catch{
        console.error('Falha: ', erro.message);
        ProcessingInstruction.exitCode = 1;  
    }
}

executar (1);