function salvar(){
    let nome = document.getElementById("nome").value;
    let descricao = document.getElementById("descricao").value;
    let preco = document.getElementById("preco").value;

    let item = JSON.stringify({
        nome: nome,
        descricao: descricao,
        preco: preco
    });

    let produtos = localStorage.getItem("produtosBrowser");

    produtos = JSON.parse(produtos);

    if (produtos === null){
        produtos = []
    }

    produtos.push(item);
    console.log(produtos);
    localStorage.setItem("produtosBrowser", JSON.stringify(produtos));

    alert("Produto cadastrado com sucesso!");

    //Limpar Input do Usuário

    document.getElementById("nome").value = "" ;
    document.getElementById("descricao").value = "" ;
    document.getElementById("preco").value = "" ;
}

//Função para excluir
function excluir(indice){
    let produtos = localStorage.getItem("produtosBrowser");
    produtos = JSON.parse(produtos);

    produtos.splice(indice, 1);
    localStorage.setItem("produtosBrowser", JSON.stringify(produtos));

    location.reload();
}

function validar () {
    let nome = forms.nome;

    //verificar se o campo está vazio
    if(nome.value == ""){
        alert("Nome não informado!");
        return false;
        nome.focus();
    }
    return true;
}
