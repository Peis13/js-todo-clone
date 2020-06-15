// Creare una lista di cose da fare
// dove posso aggiungere/eliminare elementi alla lista

$(document).ready(function() {

  // Inizializzo un array con delle cose da fare predefinite
  var todo = [
    'Fare la spesa',
    'Portare a spasso il cane',
    'Andare dal barbiere'
  ];

  // Aggiungo ogni elemento dell'array 'todo' alla lista dell' html
  for (var i = 0; i < todo.length; i++) {
    aggiungiElemento(todo[i]);
  }

  // Evento click sul tasto 'AGGIUNGI' che appende
  // il valore inserito nell'input alla lista dell'html
  $('#aggiungi').click(
    function() {
      var newTodo = $('#testo').val();
      aggiungiElemento(newTodo);
    }
  );

  // Alla pressione del tasto Invio della tastiera
  // appende il valore inserito nell'input alla lista dell'html
  $('#testo').keypress(
    function(event) {
      if ((event.which === 13) || (event.keyCode === 13)) {
        var newTodo = $('#testo').val();
        aggiungiElemento(newTodo);
      }
    }
  );

  // Evento click sullo span 'elimina' in forma esplicita
  // per eliminare gli elementi dalla lista html
  $(document).on('click', '.elimina', function() {
    $(this).parent().remove();
  })

  // FUNZIONI //
  function aggiungiElemento(nuovoElemento) {
    var elemento = $('.template .elemento').clone().prepend(nuovoElemento);
    $('.todo-list ul').append(elemento);
    $('#testo').val('');
  }
});
