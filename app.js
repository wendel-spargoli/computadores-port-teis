function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for um string sem nada
    if(campoPesquisa == ""){
        section.innerHTML = "<p>Sem resultado</p>"
        return
    }

    // Atribuindo o texto dos dados para letras minúsculas
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    let nome = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dispositivo na lista de dados (dispositivos)
    for (let dado of dispositivos) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se o título includes campoPesquisa
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

            // então, faça...

            // Constrói o HTML para cada item da pesquisa
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="${dado.link}" target="_blank">${dado.nome}</a>
            </h2>
            <p class="descrição-meta">${dado.descricao}</p>

            <p class="descrição-meta">Quem quiser mais informações sobre o PC portátil, acesse a página oficial para mais detalhes</p>
            <a href="${dado.link}" target="_blank">Site oficial</a>
        </div>
    `;

        }
                
    }

    if (!resultados) {
        resultados = "<p>Sem resultados</p>"
    }

    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
}