var formulario = document.getElementById("form-login")
var pass= document.getElementById("pass-login")
var nombre = document.getElementById("nombre-login")
var email = document.getElementById("email-login")
var errorMostrar = document.getElementById("error-login").style.display = "none";
var fecha = document.getElementById("fecha-login")

var expMay = RegExp("[A-Z]")
var expMin = RegExp("[a-z]")
var expNum = RegExp("[0-9]")
var expEmail = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)


// var exPass = RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}")
formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    var error = ""



    if(!pass.value.match(expMay)){
        error += "EL PASSWORD TIENE QUE TENER UNA MAYUSCULA\n "
    }
    if(!pass.value.match(expMin)){
        error += "EL PASSWORD TIENE QUE TENER UNA MINUSCULA\n "
    }
    if(!pass.value.match(expNum)){
        error += "EL PASSWORD TIENE QUE TENER UN NUMERO\n "
    }
    
    if(expEmail.test(email.value)){
       // email.style.cssText = "color:black;"
    } else {   
       // email.style.cssText = "color:red;"
        error += "DIRECION NO VALIDA ejemplo de email valido: xxxx@gmail.COM\n "
        
    }


    if(buscarUsuario(nombre.value)){
        error += "USUARIO YA UTILIZADO\n"
    }

    
    if (error == "") {
        alert("Bienvenido "+ nombre.value)
        window.comunicacion.registroValido([nombre.value, pass.value, email.value, fecha.value]);
        errorMostrar.style.display = "none";

    } else {     
       errorMostrar = document.getElementById("error-login")
       errorMostrar.style.display = "inline";
       //alert(error)
       errorMostrar.innerHTML = error
    }
})





