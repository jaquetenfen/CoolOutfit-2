
var totalCompra = 0;

function  adicionar_produto(produto, preco){
    if(preco > 0){
        totalCompra = totalCompra + preco;
        alert("Produto " + produto + " que custa " + preco + " foi adicionado ao carrinho\n. Total em compras: " + totalCompra);
    }
    else {
        alert("Este produto está esgotado e não foi adicionado ao carrinho")
    }
}