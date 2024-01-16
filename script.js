//BOTÃO ADICIONAR TAREFA

function botaoAdicionar() {
    
    var container = document.querySelector('div.container');

    var listaTarefas = document.querySelector('ul#listaTarefas');

    var inputTarefa = document.querySelector('input#adicionarTarefa');
    var novaTarefa = inputTarefa.value;

    if(novaTarefa.trim() !== "") {
        var novoItem = document.createElement("li")
        novoItem.textContent = novaTarefa;

        //Criar botao remover quando adicionar nova tarefa
        var botaoRemover = document.createElement("button");
        botaoRemover.innerHTML = '<span class="material-symbols-outlined remover-icon">delete</span>';
        botaoRemover.onclick = function() {
            removerTarefa(this);
        }
        botaoRemover.style.display ='inline'

        //Criando nova tarefa
        listaTarefas.appendChild(novoItem);
        novoItem.appendChild(botaoRemover)

        //Limpar quando adicionar
        inputTarefa.value = "";

        
        //adicionando classe "clicavel" ao novoItem 
        novoItem.classList.add('clicavel');
        novoItem.addEventListener('click', function() {
        this.classList.toggle('clicada')
           });


    } else {
        alert('Digite uma tarefa para adicionar!')
    } 
    
  
}


    //FUNÇÃO REMOVER TAREFA
    function removerTarefa(botaoRemover) {
        var novoItem = botaoRemover.parentElement;
        novoItem.remove();
    }

    //Adicionando ouvinte de evento ao pressionar a tecla 'ENTER'
    document.querySelector('input#adicionarTarefa').addEventListener('keyup', function(enter) {
        if(enter.keyCode === 13) {
            botaoAdicionar();
        }
    })





