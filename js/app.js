let listaProdutos = [];

function limpar(){
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';
    listaProdutos = [];
}

function adicionar(){
    let produtoSelecionado = document.getElementById('produto').value;
    listaProdutos.push(produtoSelecionado);
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = listaProdutos.join('<br>');
}