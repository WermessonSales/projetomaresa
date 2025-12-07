document.addEventListener('DOMContentLoaded', function() {
    const selectEspecialidade = document.getElementById('medico_especialidade');
    let carregado = false; // Evita múltiplas chamadas

    selectEspecialidade.addEventListener('focus', function() {
        if (!carregado) {
            fetch('http://localhost:3001/projeto-maresa/especialidade') 
                .then(response => response.json())
                .then(dados => {
                    // Limpa opções
                    selectEspecialidade.innerHTML = '<option value="" disabled selected>Carregando...</option>';
                    
                    // Assume array [{id:1, nome:"Cardiologia"}, ...]
                    dados.forEach(item => {
                        const option = new Option(item.descricao);
                        selectEspecialidade.appendChild(option);
                    });
                    
                    carregado = true;
                })
                .catch(error => {
                    console.error('Erro:', error);
                    selectEspecialidade.innerHTML = '<option value="" disabled selected>Erro ao carregar</option>';
                });
        }
    });
});
