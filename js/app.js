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
    let divisaoTextoProduto = produtoSelecionado.split(" - R$");
    let nomeProduto = divisaoTextoProduto[0];
    let precoProduto = parseFloat(divisaoTextoProduto[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let subtotal = 0;

    if (!isNaN(quantidade) && quantidade > 0) { 
        let item = {
            quantidade: quantidade,
            produto: nomeProduto,
            preco: precoProduto,
            subtotal: quantidade * precoProduto
        };

        listaProdutos.push(item); // Adiciona o objeto ao array
        console.log(listaProdutos); // Exibe a lista no console
    } else {
        alert("Digite uma quantidade válida!");
    }
    
    // carrinho.innerHTML = listaProdutos.join('<br>');
}