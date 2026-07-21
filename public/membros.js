 const membross ={
    "responsavel": {
        "nome": "Educardo do Vale Simões",
        "imagem": "images/simoes.jpg"
    },
    "membros": [
        {
            "nome": "João da Silva",
            "imagem": "..."
        },
         {
            "nome": "João da Silva",
            "imagem": "..."
        },
         {
            "nome": "João da Silva",
            "imagem": "..."
        },
         {
            "nome": "João da Silva",
            "imagem": "..."
        }
    ]
}
        //fetch('dados/atividades.json');
        const membros = document.getElementById('membros');
        let html = '';
        html += `<div class="item_membro"><img src="${membross.responsavel.imagem}"><h1>${membross.responsavel.nome}</h1></div>`;
        membross.membros.forEach(membro => {
            if(membro.imagem === "..."){
                membro.imagem = "images/imagem_membro.png";
            }

            html += `
                <div class="item">
                    <div class="item_membro">
                        <img src="${membro.imagem}">
                        <h1>${membro.nome}</h1>

                    </div>
                </div>
            `;
        });
        html += '<div id="filler"></div>'
        membros.innerHTML = html;

