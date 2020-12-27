$('#form-contato').submit(function(){
    var nome = $('#nome');
    var email = $('#email');
    var mensagem = $('#mensagem');
    var erro = $('.alert');
    var campo = $('#campo-erro');
  
    // removendo o elemento da tela sempre que tentar submeter o formulario
    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');
  
    // valida o campo nome
    if (nome.val() == '') {
      erro.removeClass('d-none');
      campo.html('nome'); // nome do campo que não foi preenchido!
      nome.focus();
      nome.addClass('is-invalid');
      return false;
    }
    // valida o campo e-mail
    if (email.val() == '') {
      erro.removeClass('d-none');
      campo.html('e-mail'); // nome do campo que não foi preenchido!
      email.focus();
      email.addClass('is-invalid');
      return false;
    }  
    // valida o campo mensagem
    if (mensagem.val() == '') {
      erro.removeClass('d-none');
      campo.html('mensagem'); // nome do campo que não foi preenchido!
      mensagem.focus();
      mensagem.addClass('is-invalid');
      return false;
    }  
    
    // se chegar aqui pode enviar os dados!
    return true;
  });







  $(document).ready(function() {
    // Test for placeholder support
      $.support.placeholder = (function(){
          var i = document.createElement('input');
          return 'placeholder' in i;
      })();
  
      // Hide labels by default if placeholders are supported
      if($.support.placeholder) {
          $('.form-label').each(function(){
              $(this).addClass('js-hide-label');
          });  
  
          // Code for adding/removing classes here
          $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
              
              // Cache our selectors
              var $this = $(this),
                  $label = $this.parent().find("label");
            
              switch(e.type) {
                case 'keyup': {
                   $label.toggleClass('js-hide-label', $this.val() == '');
                } break;
                case 'blur': {
                  if( $this.val() == '' ) {
                      $label.addClass('js-hide-label');
                  } else {
                      $label.removeClass('js-hide-label').addClass('js-unhighlight-label');
                  }
                } break;
                case 'focus': {
                  if( $this.val() !== '' ) {
                      $label.removeClass('js-unhighlight-label');
                  }
                } break;
                default: break;
              }
              // previous implementation with ifs
              /*if (e.type == 'keyup') {
                  if( $this.val() == '' ) {
                      $parent.addClass('js-hide-label'); 
                  } else {
                      $parent.removeClass('js-hide-label');   
                  }                     
              } 
              else if (e.type == 'blur') {
                  if( $this.val() == '' ) {
                      $parent.addClass('js-hide-label');
                  } 
                  else {
                      $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                  }
              } 
              else if (e.type == 'focus') {
                  if( $this.val() !== '' ) {
                      $parent.removeClass('js-unhighlight-label');
                  }
              }*/
          });
      } 
  });