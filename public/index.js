

fetch('../dados/atividades.json')
.then(response => response.json())
            .then(dados => {
                CarregarAndamento(dados.atuais);
            })
            .catch(error => {
                console.error('Erro ao carregar JSON:', error);
                document.getElementById('andamento').innerHTML = 
                    '<p>Erro ao carregar dados.</p>';
            });

function CarregarAndamento(atividades) {
    const andamento = document.getElementById('andamento');
    let html = '';
    atividades.forEach(atividade => {
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
}