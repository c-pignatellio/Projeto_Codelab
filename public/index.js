
    
    const atividades = {
    "atuais": [
        {
            "nome": "CODIFIKIDS",
            "descricao": "..."
        },
        {
            "nome": "Overclock",
            "descricao": "..."
        }
    ],
    "proximas": [
        {
            "nome": "Processo seletivo",
            "inicio": "20/03",
            "fim": "20/04",
            "imagem": "images/FL9uZHC.jpeg.png"
        },
        {
            "nome": "Processo seletivo",
            "inicio": "20/03",
            "fim": "20/04",
            "imagem": "images/JXCWVsa.jpeg.png"
        }
    ]
}

    
        const andamento = document.getElementById('andamento');
        let html = '<h1>Em andamento</h1>';
        atividades.atuais.forEach(atividade => {
            html += `
                <div class="item">
                    <img src="images/icon_atividade.svg.png">
                    <div class="item-text">
                            <h1>${atividade.nome}</h1>
                            <p>${atividade.descricao}</p>
                        </div>
                </div>
            `;
        });
        andamento.innerHTML = html;

        const proximas = document.getElementById('carrossel');
        let htmlProximas = '';
        atividades.proximas.forEach(atividade => {
            htmlProximas += `
                <div class="item">
                    <img src="${atividade.imagem}">
                    <h1>${atividade.nome}</h1>
                    <p>${atividade.inicio} - ${atividade.fim}</p>
                </div>
            `;
        });
        htmlProximas += '<div id="filler"></div>'
        proximas.innerHTML = htmlProximas;
