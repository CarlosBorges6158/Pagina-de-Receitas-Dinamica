// Função para carregar as receitas a partir de um arquivo JSON
function carregarReceitas() {
    fetch('receitas.json') // Substitua 'receitas.json' pelo caminho correto do seu arquivo JSON, se necessário
        .then(response => response.json())
        .then(data => {
            const receitas = data;
            preencheCatalogo(receitas);
        })
        .catch(error => console.error(error));
}

// Função para obter a lista de ingredientes de uma receita em HTML
function getListaIngredientes(receita) {
    const listaIngredientes = receita.ingredientes.map(ingrediente => {
        return `<li>${ingrediente}</li>`;
    }).reduce((accumulator, currentIngredient) => {
        return accumulator + currentIngredient;
    }, '');

    return `<ul>${listaIngredientes}</ul>`;
}

// Função para criar o card de uma receita
function getCard(receita) {
    return `
            <div class="card receita" style="width: 250px; margin: 20px">
            <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
            <div class="card-body receitas">
                <h5 class="card-title">${receita.titulo}</h5>
                <div class="card-text">
                    ${getListaIngredientes(receita)}
                    <hr>
                    ${receita.preparo}
                </div>
            </div>
        </div>
    `;
}

// Função para preencher o catálogo de receitas
function preencheCatalogo(receitas) {
    const pnlCatalogo = document.getElementById("pnlCatalogo");
    for (const receita of receitas) {
        pnlCatalogo.innerHTML += getCard(receita);
    }
}

carregarReceitas();

