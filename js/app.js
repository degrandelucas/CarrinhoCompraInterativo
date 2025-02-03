window.onload = function(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '';
    document.getElementById('quantidade').value = 0;
}


function limpar(){
    let carrinho = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total');
    carrinho.innerHTML = '';
    valorTotal.innerHTML = '';
}

function adicionar(){
    let produtoSelecionado = document.getElementById('produto').value;
    let nomeProduto = produtoSelecionado.split(" - R$")[0];
    let precoProduto = parseFloat(produtoSelecionado.split(" - R$")[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let carrinho = document.getElementById('lista-produtos');
    let subtotal = 0;

    if (!isNaN(quantidade) && quantidade > 0) { 
        subtotal = quantidade * precoProduto;
        carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`;
    } else {
        alert("Digite uma quantidade válida!");
    }    
}