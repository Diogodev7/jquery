$(document).ready(function() {
    // Evento de submissão do formulário
    $('#task-form').on('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      // Captura o valor do campo de entrada
      const taskText = $('#task-input').val();
  
      // Adiciona a tarefa como um item de lista
      $('#task-list').append(`<li>${taskText}</li>`);
  
      // Limpa o campo de entrada
      $('#task-input').val('');
    });
  
    // Evento de clique para riscar a tarefa
    $('#task-list').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });
  