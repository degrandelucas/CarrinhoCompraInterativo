let listaProdutos = [];

function limpar(){
    let carrinho = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total');
    carrinho.innerHTML = '';
    valorTotal.innerHTML = '';
    listaProdutos = [];
}

function adicionar(){
    let produtoSelecionado = document.getElementById('produto').value;
    listaProdutos.push(produtoSelecionado);
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = listaProdutos.join('<br>');
}