 // O javascript é um manipulador do Dom (ou seja, html)


function enviarInformacoes() {
    let messageSuccess = document.querySelector(".messageSuccess");
    //console.log (typeof(messageSuccess)); para saber o tipo da variável. Dessa forma tem um retono no console (f12) dizendo se é um inteiro, um flutuante ou um objeto ou outros, nos caso aqui retorna um objeto.

    let mensagem = document.getElementById("message").value;
    let email = document.getElementById("email").value;
    messageSuccess.style.display="none"; // aqui pegamos o elemento messageSuccess (que agora é um objeto JS), estamos atribuindo no atributo style um display none (uma propriedade)   ---- isso consigo fazer com qualquer atribuido com id, com class, com type por que ele é um manipulador de Html
  
  
  
  
  // apartir daqui começa a validação
      if (!validaMensagem(mensagem)) {      // o ponto de exclamação é para negar a condição --- ou seja, o returno para cair no if tem que ser falso /// o validaMensagem é a funçao criada
        return  
    }
    if (!validaEmail(email)) { //o email eu passei por parametro 
        return 
    }   
    messageSuccess.textContent = "Obrigado pelo contato, " + email;
    messageSuccess.style.display="block";
    let messageError = document.querySelector(".messageError");
    messageError.style.display="none";
}
function validaMensagem(mensagem) {
    let messageError = document.querySelector(".messageError");
    
    if (mensagem.length < 1 ) {
        messageError.style.display="block";
        messageError.textContent = "Erro no envio: Insira uma mensagem";
        
        return false
    } 
    return true
}
function validaEmail(email) {
       let messageError = document.querySelector(".messageError");
    if (email.length < 1 ) {
        messageError.textContent = "Erro no envio: Endereço de email inválido" ;
        messageError.style.display="block";
        return false
}

    if (email.search("@") < 1 || email.search(".com") < 1) {
        messageError.textContent = "Erro no envio: Endereço de email inválido";
        messageError.style.display="block";
        return false
    }

    let arrayemail = email.split("@");

    let user = arrayemail[0];

    let arraydomain = arrayemail[1].split(".");

    if (user.length < 1 || user.length > 32) {
        messageError.textContent = "Erro no envio: Endereço de email inválido 4";
        messageError.style.display="block";
        return false
    }

    if (arraydomain[0].length < 1 || arraydomain[0].length > 16) {
        messageError.textContent = "Erro no envio: Endereço de email inválido 5";
        messageError.style.display="block";
        return false
    }
    return true
}
