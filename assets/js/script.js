let nome = document.querySelector('#nome')

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 7) {
        nome.style.border = '2px solid red'
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        nome.style.border = '3px solid green'
        txtNome.innerHTML = ''
        
    }
}
let email = document.querySelector('#email')

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        email.style.border = '2px solid red'
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    } else {
        email.style.border = '2px solid green'
        txtEmail.innerHTML = ''
        
    }
}

let txtMsg = document.querySelector('#txtMsg')
function validaMsg() {
    
    if (msg.value.length < 15) {
        msg.style.border = '2px solid red'
        txtMsg.innerHTML = 'Mensagem muito pequena, digite mais :)'
        txtMsg.style.color = 'red'
    } else {
        msg.style.border = '2px solid green'
        txtMsg.innerHTML = ''
        
    }
}

function mensagem() {
    if (txtMsg == null || email == null || nome == null) {
        console.log("1")
        alert("Obrigado pelo contato :)")
    } else{
        console.log("2")
        alert("Mensagem não enviada, preencha todos os campos")
        
    }
   
}

let openLogin = document.getElementById('login')
function modalLogin() {
   openLogin.style.display ='Block';
   document.body.style.overflow = 'hidden';  
}

let fecha = document.getElementById('login')
function fechaLogin() {
   fecha.style.display ='none';
     
}



 