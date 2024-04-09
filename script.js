async function produtos(){
    const meusProdutos = await fetch ('https://fakestoreapi.com/products?limit=5')
        .then(res=>res.json())
        .then(json=>json)

        return meusProdutos
}
//funcao para receber produtos 
const montaListaProdutos = async () => {
    const recebeProdutos = await produtos()

    //console.log(recebeProdutos);

    let estruturaHTML = ""

    for (let x = 0; x < recebeProdutos.length; x++) {
        estruturaHTML += `

        <div class="card">

                <div class="imagem-produto">
                    <img src="${recebeProdutos[x].image}" alt="${recebeProdutos[x].title}" />
                </div>

                <div class="conteudo-produto">
                    <h3 class="tipo-produto">${recebeProdutos[x].title}</h3>

                    <span class="escricao-produto">${recebeProdutos[x].description}</span>

                    <span class="preco-produto">R$ ${recebeProdutos[x].price}</span>
                </div>

        </div>
        `
    }
    document.querySelector("#cards_produto").innerHTML = estruturaHTML
}
montaListaProdutos()

    


