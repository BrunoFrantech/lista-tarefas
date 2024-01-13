//BOTÃO ADICIONAR TAREFA

function botaoAdicionar() {
    
    var container = document.querySelector('div.container');

    var listaTarefas = document.querySelector('ul#listaTarefas');

    var inputTarefa = document.querySelector('input#adicionarTarefa');
    var novaTarefa = inputTarefa.value;

    if(novaTarefa.trim() !== "") {
        var novoItem = document.createElement("li")
        novoItem.textContent = novaTarefa;

        listaTarefas.appendChild(novoItem);

        //Limpar quando adicionar
        inputTarefa.value = "";

    } else {
        alert('Digite uma tarefa para adicionar!')
    }    

}

//Adicionando ouvinte de evento ao pressionar a tecla 'ENTER'
    document.querySelector('input#adicionarTarefa').addEventListener('keyup', function(enter) {
        if(enter.keyCode === 13) {
            botaoAdicionar();
        }
    })