let contenedorDados = document.getElementById("contenedor-dados");
let dadoGirando = document.getElementById('imagen-dado-carga');
let dadoCarga = "/img/cubilete.gif"
let esperaCarga;
let esperaCargaDado;

// dados
let dado1 = document.getElementById('dado-1');
let dado2 = document.getElementById('dado-2');
let dado3 = document.getElementById('dado-3');
let dado4 = document.getElementById('dado-4');
let dado5 = document.getElementById('dado-5');

let imagenDado1 = "./img/dado-1.png"
let imagenDado2 = "./img/dado-2.png"
let imagenDado3 = "./img/dado-3.png"
let imagenDado4 = "./img/dado-4.png"
let imagenDado5 = "./img/dado-5.png"
let imagenDado6 = "./img/dado-6.png"

let mensajeInstruccion = document.getElementById("mensaje-volver-a-tirar")

let imagenDados = document.getElementsByClassName("imagen-dado");
let bordeDado = "border: 2px solid red"

let contenedorBotones = document.getElementById('contenedor-botones');
let botonesJugada = document.getElementById('botones-jugada')
let contenedorJugada = document.getElementById("botones-jugada-container");
let botonRepite = document.getElementById("vuelve-a-tirar")

let dados = new Array (5);

//botones de categorías
let botonTirada = document.getElementById("boton-dados")

let boton1 = document.getElementById("boton-jugada-1")
let boton2 = document.getElementById("boton-jugada-2")
let boton3 = document.getElementById("boton-jugada-3")
let boton4 = document.getElementById("boton-jugada-4")
let boton5 = document.getElementById("boton-jugada-5")
let boton6 = document.getElementById("boton-jugada-6")
let botonEscalera = document.getElementById("boton-jugada-escalera")
let botonFull = document.getElementById("boton-jugada-full")
let botonPoker = document.getElementById("boton-jugada-poker")
let botonGenerala = document.getElementById("boton-jugada-generala")
let botonDoble = document.getElementById("boton-jugada-doble")

let jug1Puntaje1 = document.getElementById("jug1-puntaje-1")
let jug1Puntaje2 = document.getElementById("jug1-puntaje-2")
let jug1Puntaje3 = document.getElementById("jug1-puntaje-3")
let jug1Puntaje4 = document.getElementById("jug1-puntaje-4")
let jug1Puntaje5 = document.getElementById("jug1-puntaje-5")
let jug1Puntaje6 = document.getElementById("jug1-puntaje-6")
let jug1PuntajeEsc = document.getElementById("jug1-puntaje-escalera")
let jug1PuntajeFul = document.getElementById("jug1-puntaje-full")
let jug1PuntajePok = document.getElementById("jug1-puntaje-poker")
let jug1PuntajeGen = document.getElementById("jug1-puntaje-generala")
let jug1PuntajeDob = document.getElementById("jug1-puntaje-generala-doble")
let jug1Total = document.getElementById("jug1-puntaje-total")

let jug2Puntaje1 = document.getElementById("jug2-puntaje-1")
let jug2Puntaje2 = document.getElementById("jug2-puntaje-2")
let jug2Puntaje3 = document.getElementById("jug2-puntaje-3")
let jug2Puntaje4 = document.getElementById("jug2-puntaje-4")
let jug2Puntaje5 = document.getElementById("jug2-puntaje-5")
let jug2Puntaje6 = document.getElementById("jug2-puntaje-6")
let jug2PuntajeEsc = document.getElementById("jug2-puntaje-escalera")
let jug2PuntajeFul = document.getElementById("jug2-puntaje-full")
let jug2PuntajePok = document.getElementById("jug2-puntaje-poker")
let jug2PuntajeGen = document.getElementById("jug2-puntaje-generala")
let jug2PuntajeDob = document.getElementById("jug2-puntaje-generala-doble")
let jug2Total = document.getElementById("jug2-puntaje-total")

let nombreJugador = document.getElementById("mensaje-turno") 
let botonFinal = document.getElementById("contenedor-boton-fin")
let botonNuevaPartida = document.getElementById("boton-nueva-partida")

let numeroRandom1, numeroRandom2, numeroRandom3, numeroRandom4, numeroRandom5;

let x = 0;
let y = 0;
let z = 1;

let hay1, hay2, hay3, hay4, hay5, hay6, hayEscalera, hayFull, hayPoker, hayGenerala, hayDoble = false;

let aceptarTiro = document.getElementById("acepta-tirada");

let fueModificado = false;

let contenedorGanador = document.getElementById("contenedor-ganador")
let nombreGanador = document.getElementById("nombre-ganador")
let totalFinal1;
let totalFinal2;



// **** funciones para tirada(); ****

function esconderDados () {
    contenedorDados.style = "display:none;"
}

        // modificación del botón "tirar dados!"

function bloquearBotonTirada() {
    botonTirada.setAttribute('disabled', true)
}

function desbloquearBotonTirada() {
    botonTirada.removeAttribute('disabled')
}

        // hace visible los dados

function mostrarCargando() {    
    dadoGirando.style = "display: flex;"
    dadoGirando.src = "./img/cubilete.gif"
}

function mostrarDados () {
    dadoGirando.style = "display: none;"
    contenedorDados.style = "display: flex; padding-top: 5%"
}

        // muestra los dados según números generados aleatoriamente

function tirarDados () {

    numeroRandom1 = Math.floor(Math.random()*(7-1))+1
    numeroRandom2 = Math.floor(Math.random()*(7-1))+1
    numeroRandom3 = Math.floor(Math.random()*(7-1))+1
    numeroRandom4 = Math.floor(Math.random()*(7-1))+1
    numeroRandom5 = Math.floor(Math.random()*(7-1))+1

        
        if (numeroRandom1 == 1) {
            dado1.src = imagenDado1;
            hay1 = true;
        } else if (numeroRandom1 == 2) {
            dado1.src = imagenDado2
            hay2 = true;
        } else if (numeroRandom1 == 3) {
            dado1.src = imagenDado3
            hay3 = true;
        } else if (numeroRandom1 == 4) {
            dado1.src = imagenDado4
            hay4 = true;
        } else if (numeroRandom1 == 5) {
            dado1.src = imagenDado5
            hay5 = true;
        } else {
            dado1.src = imagenDado6
            hay6 = true;
        }

        if (numeroRandom2 == 1) {
            dado2.src = imagenDado1;
            hay1 = true;
        } else if (numeroRandom2 == 2) {
            dado2.src = imagenDado2
            hay2 = true;
        } else if (numeroRandom2 == 3) {
            dado2.src = imagenDado3
            hay3 = true;
        } else if (numeroRandom2 == 4) {
            dado2.src = imagenDado4
            hay4 = true;
        } else if (numeroRandom2 == 5) {
            dado2.src = imagenDado5
            hay5 = true;
        } else {
            dado2.src = imagenDado6
            hay6 = true;
        }
    
        if (numeroRandom3 == 1) {
            dado3.src = imagenDado1;
            hay1 = true;
        } else if (numeroRandom3 == 2) {
            dado3.src = imagenDado2
            hay2 = true;
        } else if (numeroRandom3 == 3) {
            dado3.src = imagenDado3
            hay3 = true;
        } else if (numeroRandom3 == 4) {
            dado3.src = imagenDado4
            hay4 = true;
        } else if (numeroRandom3 == 5) {
            dado3.src = imagenDado5
            hay5 = true;
        } else {
            dado3.src = imagenDado6
            hay6 = true;
        }

        if (numeroRandom4 == 1) {
            dado4.src = imagenDado1;
            hay1 = true;
        } else if (numeroRandom4 == 2) {
            dado4.src = imagenDado2
            hay2 = true;
        } else if (numeroRandom4 == 3) {
            dado4.src = imagenDado3
            hay3 = true;
        } else if (numeroRandom4 == 4) {
            dado4.src = imagenDado4
            hay4 = true;
        } else if (numeroRandom4 == 5) {
            dado4.src = imagenDado5
            hay5 = true;
        } else {
            dado4.src = imagenDado6
            hay6 = true;
        }

        if (numeroRandom5 == 1) {
            dado5.src = imagenDado1;
            hay1 = true;
        } else if (numeroRandom5 == 2) {
            dado5.src = imagenDado2
            hay2 = true;
        } else if (numeroRandom5 == 3) {
            dado5.src = imagenDado3
            hay3 = true;
        } else if (numeroRandom5 == 4) {
            dado5.src = imagenDado4
            hay4 = true;
        } else if (numeroRandom5 == 5) {
            dado5.src = imagenDado5
            hay5 = true;
        } else {
            dado5.src = imagenDado6
            hay6 = true;
        }


    dados = [numeroRandom1, numeroRandom2, numeroRandom3, numeroRandom4, numeroRandom5]
    dados.sort();
    console.log (dados)
}

        // modifica la visualización de los botones "aceptar tirada" y "volver a tirar"

function mostrarBotones() {
    contenedorBotones.style = "display: flex; padding-top: 5%;"
}

function esconderBotones() {
    contenedorBotones.style = "visibility: hidden"
}

        // resetea la selección de dados

function borrarEstilos () {
    dado1.classList.remove('dadoSeleccionado')
    dado2.classList.remove('dadoSeleccionado')
    dado3.classList.remove('dadoSeleccionado')
    dado4.classList.remove('dadoSeleccionado')
    dado5.classList.remove('dadoSeleccionado')
}

    // permiten o evitan que los dados puedan seleccionarse

function bloquearDados() {
    dado1.removeAttribute("onclick");
    dado2.removeAttribute("onclick");
    dado3.removeAttribute("onclick");
    dado4.removeAttribute("onclick");
    dado5.removeAttribute("onclick");
}

function desbloquearDados() {
    dado1.setAttribute("onclick", "cambiarDado1();");
    dado2.setAttribute("onclick", "cambiarDado2();");
    dado3.setAttribute("onclick", "cambiarDado3();");
    dado4.setAttribute("onclick", "cambiarDado4();");
    dado5.setAttribute("onclick", "cambiarDado5();");
}

        // cambia los valores de las existencias de los dados a FALSE para que cada jugada sea independiente

function borrarPrevio() {
    hay1 = false
    hay2 = false
    hay3 = false
    hay4 = false
    hay5 = false
    hay6 = false
    hayEscalera = false
    hayFull = false
    hayPoker = false
    hayGenerala = false
    hayDoble = false 
}

        // cambia el estilo de los botones para que cada jugada sea independiente

function resetearBotones () {
    if (boton1.classList.contains("btn-success") == true) {
        boton1.classList.replace("btn-success", "btn-danger")
    }

    if (boton2.classList.contains("btn-success") == true) {
        boton2.classList.replace("btn-success", "btn-danger")
    }

    if (boton3.classList.contains("btn-success") == true) {
        boton3.classList.replace("btn-success", "btn-danger")
    }

    if (boton4.classList.contains("btn-success") == true) {
        boton4.classList.replace("btn-success", "btn-danger")
    }

    if (boton5.classList.contains("btn-success") == true) {
        boton5.classList.replace("btn-success", "btn-danger")
    }

    if (boton6.classList.contains("btn-success") == true) {
        boton6.classList.replace("btn-success", "btn-danger")
    }

    if (botonEscalera.classList.contains("btn-success") == true) {
        botonEscalera.classList.replace("btn-success", "btn-danger")
    }

    if (botonFull.classList.contains("btn-success") == true) {
        botonFull.classList.replace("btn-success", "btn-danger")
    }

    if (botonPoker.classList.contains("btn-success") == true) {
        botonPoker.classList.replace("btn-success", "btn-danger")
    }

    if (botonGenerala.classList.contains("btn-success") == true) {
        botonGenerala.classList.replace("btn-success", "btn-danger")
    }

    if (botonGenerala.classList.contains("btn-success") == true) {
        botonGenerala.classList.replace("btn-success", "btn-danger")
    }
    
}

function mostrarMensaje () {
    mensajeInstruccion.classList.remove("esconder")
}

        // *** TIRADA**** se activa al presionar "Tirar Dados!" y agrupa las funciones previas, además de setear un Timeout 
        // para la aparición de los dados y los botones "Volver a tirar" y "Aceptar tirada",
        // aumenta el valor de Z, que determina el turno actual

function tirada() {
        borrarPrevio()
        resetearBotones()
        // desbloquearAceptar()
        desbloquearDados() 
        esconderBotones()
        contenedorJugada.classList.add('esconder')
        botonRepite.removeAttribute('disabled')
        borrarEstilos();
        esconderDados();
        mostrarCargando();
        tirarDados();
        esperaCarga = setTimeout(mostrarDados, 1300);
        esperaCarga = setTimeout(mostrarBotones, 1300); 
        esperaCarga = setTimeout(mostrarMensaje, 1300);
        bloquearBotonTirada();  
        z += 1
        console.log(z)
        y = 0
        fueModificado = false;

}

// avisa, según el turno actual, quién juega o si la partida finalizó.

function cambiarNombreJugador() {
    if (z < 23 && z % 2 !== 0) {
        nombreJugador.textContent = "Turno del jugador 1"
    } else if (z < 23 && z % 2 == 0) {
        nombreJugador.textContent = "Turno del jugador 2"
    } else if (z == 23) {
        nombreJugador.textContent = "Fin de la partida!"
    }
}

// seleccionar dados para la tirada

function cambiarDado1 () {
    if (x == 0) {
        dado1.classList.add("dadoSeleccionado")
        x = 1;
    } else if (x == 1) {
        dado1.classList.remove("dadoSeleccionado")
        x = 0;
    }  
}

function cambiarDado2 () {
    if (x == 0) {
        dado2.classList.add("dadoSeleccionado")
        x = 1;
    } else if (x == 1) {
        dado2.classList.remove("dadoSeleccionado")
        x = 0;
    }  
}

function cambiarDado3 () {
    if (x == 0) {
        dado3.classList.add("dadoSeleccionado")
        x = 1;
    } else if (x == 1) {
        dado3.classList.remove("dadoSeleccionado")
        x = 0;
    }  
}

function cambiarDado4 () {
    if (x == 0) {
        dado4.classList.add("dadoSeleccionado")
        x = 1;
    } else if (x == 1) {
        dado4.classList.remove("dadoSeleccionado")
        x = 0;
    }  
}

function cambiarDado5 () {
    if (x == 0) {
        dado5.classList.add("dadoSeleccionado")
        x = 1;
    } else if (x == 1) {
        dado5.classList.remove("dadoSeleccionado")
        x = 0;
    }  
}

// setea la visibilidad del grupo de botones que imprimen el puntaje

function esconderJugada() {
    botonesJugada.style = "display: none;"
}

// muestra la carga del dado que desea cambiarse. luego, cambia el dado y su valor

function mostrarAnimacionDado() {
    if (dado1.classList.contains("dadoSeleccionado") == true){
        dado1.src = "img/cargaDado.gif"
    }
    
    if (dado2.classList.contains("dadoSeleccionado") == true){
        dado2.src = "img/cargaDado.gif"
    }

    if (dado3.classList.contains("dadoSeleccionado") == true){
        dado3.src = "img/cargaDado.gif"
    }
    
    if (dado4.classList.contains("dadoSeleccionado") == true){
        dado4.src = "img/cargaDado.gif"
    }
    
    if(dado5.classList.contains("dadoSeleccionado") == true) {
        dado5.src = "img/cargaDado.gif"
    }

    if (dado1.classList.contains("dadoSeleccionado") == false && dado2.classList.contains("dadoSeleccionado") == false &&
        dado3.classList.contains("dadoSeleccionado") == false && dado4.classList.contains("dadoSeleccionado") == false &&
        dado5.classList.contains("dadoSeleccionado") == false) {
        alert("Por favor, seleccione los dados que desea volver a tirar.")
        y = 0
    }
    
    esperaCargaDado = setTimeout(repetirTiro, 1000)
}

// estas dos funciones forman parte de repetirTiro() --> impide el avance si no hay dados seleccionados y deshabilita según la cantidad de veces que ya se tiró

function loopearSiUnselected () {
    if (dado1.classList.contains("dadoSeleccionado") == false && dado2.classList.contains("dadoSeleccionado") == false &&
        dado3.classList.contains("dadoSeleccionado") == false && dado4.classList.contains("dadoSeleccionado") == false &&
        dado5.classList.contains("dadoSeleccionado") == false) {
        y = 0
    }
}

function limitarTiros() {
    if (y == 1) {
        botonRepite.setAttribute('disabled', true)
    }
}

// permite saber si determinado número salió en la tirada

function chequearExistencia () {
    if (numeroRandom1 == 1 || numeroRandom2 == 1 || numeroRandom3 == 1 || numeroRandom4 == 1 || numeroRandom5 == 1) {
        hay1 = true;
    } else { 
        hay1 = false;
    }

    if (numeroRandom1 == 2 || numeroRandom2 == 2 || numeroRandom3 == 2 || numeroRandom4 == 2 || numeroRandom5 == 2) {
        hay2 = true;
    } else { 
        hay2 = false;
    }

    if (numeroRandom1 == 3 || numeroRandom2 == 3 || numeroRandom3 == 3 || numeroRandom4 == 3 || numeroRandom5 == 3) {
        hay3 = true;
    } else { 
        hay3 = false;
    }

    if (numeroRandom1 == 4 || numeroRandom2 == 4 || numeroRandom3 == 4 || numeroRandom4 == 4 || numeroRandom5 == 4) {
        hay4 = true;
    } else { 
        hay4 = false;
    }

    if (numeroRandom1 == 5 || numeroRandom2 == 5 || numeroRandom3 == 5 || numeroRandom4 == 5 || numeroRandom5 == 5) {
        hay5 = true;
    } else { 
        hay5 = false;
    }

    if (numeroRandom1 == 6 || numeroRandom2 == 6 || numeroRandom3 == 6 || numeroRandom4 == 6 || numeroRandom5 == 6) {
        hay6 = true;
    } else { 
        hay6 = false;
    }
}

// esta función permite cambiar los dados seleccionados

function repetirTiro () {

    loopearSiUnselected();
    limitarTiros();
    
    if (dado1.classList.contains("dadoSeleccionado") == true) {
        

        numeroRandom1 = Math.floor(Math.random()*(7-1))+1

            if (numeroRandom1 == 1) {
                dado1.src = imagenDado1 
            } else if (numeroRandom1 == 2) {
                dado1.src = imagenDado2
            } else if (numeroRandom1 == 3) {
                dado1.src = imagenDado3
            } else if (numeroRandom1 == 4) {
                dado1.src = imagenDado4
            } else if (numeroRandom1 == 5) {
                dado1.src = imagenDado5
            } else {
                dado1.src = imagenDado6
            }
        
    }
    
    if (dado2.classList.contains("dadoSeleccionado") == true) {

        numeroRandom2 = Math.floor(Math.random()*(7-1))+1
        
        if (numeroRandom2 == 1) {
        dado2.src = imagenDado1
        } else if (numeroRandom2 == 2) {
            dado2.src = imagenDado2
        } else if (numeroRandom2 == 3) {
            dado2.src = imagenDado3
        } else if (numeroRandom2 == 4) {
            dado2.src = imagenDado4
        } else if (numeroRandom2 == 5) {
            dado2.src = imagenDado5
        } else {
            dado2.src = imagenDado6
        }

    }
     
    if (dado3.classList.contains("dadoSeleccionado") == true) {

        numeroRandom3 = Math.floor(Math.random()*(7-1))+1

        if (numeroRandom3 == 1) {
            dado3.src = imagenDado1
        } else if (numeroRandom3 == 2) {
            dado3.src = imagenDado2
        } else if (numeroRandom3 == 3) {
            dado3.src = imagenDado3
        } else if (numeroRandom3 == 4) {
            dado3.src = imagenDado4
        } else if (numeroRandom3 == 5) {
            dado3.src = imagenDado5
        } else {
            dado3.src = imagenDado6
        } 

    }
    
    if (dado4.classList.contains("dadoSeleccionado") == true) {

        numeroRandom4 = Math.floor(Math.random()*(7-1))+1
       
        if (numeroRandom4 == 1) {
            dado4.src = imagenDado1
        } else if (numeroRandom4 == 2) {
            dado4.src = imagenDado2
        } else if (numeroRandom4 == 3) {
            dado4.src = imagenDado3
        } else if (numeroRandom4 == 4) {
            dado4.src = imagenDado4
        } else if (numeroRandom4 == 5) {
            dado4.src = imagenDado5
        } else {
            dado4.src = imagenDado6
        }

    }

    if (dado5.classList.contains("dadoSeleccionado") == true) {
        
        numeroRandom5 = Math.floor(Math.random()*(7-1))+1

        if (numeroRandom5 == 1) {
            dado5.src = imagenDado1
        } else if (numeroRandom5 == 2) {
            dado5.src = imagenDado2
        } else if (numeroRandom5 == 3) {
            dado5.src = imagenDado3
        } else if (numeroRandom5 == 4) {
            dado5.src = imagenDado4
        } else if (numeroRandom5 == 5) {
            dado5.src = imagenDado5
        } else {
            dado5.src = imagenDado6
        }

    }
    
    y += 1
    console.log(y)
    
    dados = [numeroRandom1, numeroRandom2, numeroRandom3, numeroRandom4, numeroRandom5]
    dados.sort();
    chequearExistencia ();
    console.log(dados);
    borrarEstilos ();
    fueModificado = true;

}

// deshabilitar los botones según la existencia de dados o de jugadas posibles

function deshabilitarJugadasRealizadas () {
    if (z % 2 == 0) {

        if (jug1Puntaje1.textContent !== "") {
            boton1.setAttribute("disabled", true)
        }
    
        if (jug1Puntaje2.textContent !== "") {
            boton2.setAttribute("disabled", true)
        }
    
        if (jug1Puntaje3.textContent !== "") {
            boton3.setAttribute("disabled", true)
        }
    
        if (jug1Puntaje4.textContent !== "") {
            boton4.setAttribute("disabled", true)
        }
    
        if (jug1Puntaje5.textContent !== "") {
            boton5.setAttribute("disabled", true)
        }
    
        if (jug1Puntaje6.textContent !== "") {
            boton6.setAttribute("disabled", true)
        }
    
        if (jug1PuntajeEsc.textContent !== "") {
            botonEscalera.setAttribute("disabled", true)
        }
    
        if (jug1PuntajeFul.textContent !== "") {
            botonFull.setAttribute("disabled", true)
        }
    
        if (jug1PuntajePok.textContent !== "") {
            botonPoker.setAttribute("disabled", true)
        }
    
        if (jug1PuntajeGen.textContent !== "") {
            botonGenerala.setAttribute("disabled", true)
        }
    
        if (jug1PuntajeDob.textContent !== "") {
            botonDoble.setAttribute("disabled", true)
        }
    
    }
    
    if (z % 2 !== 0) {
        if (jug2Puntaje1.textContent !== "") {
            boton1.setAttribute("disabled", true)
        }
    
        if (jug2Puntaje2.textContent !== "") {
            boton2.setAttribute("disabled", true)
        }
    
        if (jug2Puntaje3.textContent !== "") {
            boton3.setAttribute("disabled", true)
        }
    
        if (jug2Puntaje4.textContent !== "") {
            boton4.setAttribute("disabled", true)
        }
    
        if (jug2Puntaje5.textContent !== "") {
            boton5.setAttribute("disabled", true)
        }
    
        if (jug2Puntaje6.textContent !== "") {
            boton6.setAttribute("disabled", true)
        }
    
        if (jug2PuntajeEsc.textContent !== "") {
            botonEscalera.setAttribute("disabled", true)
        }
    
        if (jug2PuntajeFul.textContent !== "") {
            botonFull.setAttribute("disabled", true)
        }
    
        if (jug2PuntajePok.textContent !== "") {
            botonPoker.setAttribute("disabled", true)
        }
    
        if (jug2PuntajeGen.textContent !== "") {
            botonGenerala.setAttribute("disabled", true)
        }
    
        if (jug2PuntajeDob.textContent !== "") {
            botonDoble.setAttribute("disabled", true)
        }
    }

}

// esta función habilita los botones para imprimir jugadas según la existencia de dados o de jugadas posibles

function habilitarJugadas() {
    if (hay1 == true) {
        boton1.removeAttribute("disabled")
        boton1.classList.replace("btn-danger", "btn-success")
    }

    if (hay2 == true) {
        boton2.removeAttribute("disabled")
        boton2.classList.replace("btn-danger", "btn-success")
    }

    if (hay3 == true) {
        boton3.removeAttribute("disabled")
        boton3.classList.replace("btn-danger", "btn-success")
    }

    if (hay4 == true) {
        boton4.removeAttribute("disabled")
        boton4.classList.replace("btn-danger", "btn-success")
    }

    if (hay5 == true) {
        boton5.removeAttribute("disabled")
        boton5.classList.replace("btn-danger", "btn-success")
    }

    if (hay6 == true) {
        boton6.removeAttribute("disabled")
        boton6.classList.replace("btn-danger", "btn-success")
    }   

    // escalera
    if (hay1 == true && hay2 == true && hay3 == true && hay4 == true && hay5 == true) {
            hayEscalera = true;
            botonEscalera.classList.replace("btn-danger", "btn-success")
    } else if (hay2 == true && hay3 == true && hay4 == true && hay5 == true && hay6 == true){
            hayEscalera = true;
            botonEscalera.classList.replace("btn-danger", "btn-success")
    }

    //full
    if (dados[0] == 1 && dados[1] == 1 && dados[2] == 1 && dados[3] == dados[4]) {
        
        botonFull.removeAttribute('disabled')
        hayFull = true;
        botonFull.classList.replace("btn-danger", "btn-success")

    } else if ((dados[0] == 2 && dados[1] == 2 && dados[2] == 2 && dados[3] == dados[4]) || 
               (dados[0] == dados[1] && dados[2] == 2 && dados[3] == 2 && dados[4] == 2)) {

        botonFull.removeAttribute('disabled')
        hayFull = true;
        botonFull.classList.replace("btn-danger", "btn-success")

    } else if ((dados[0] == 3 && dados[1] == 3 && dados[2] == 3 && dados[3] == dados[4]) ||
               (dados[0] == dados[1] && dados[2] == 3 && dados[3] == 3 && dados[4] == 3)) {

        botonFull.removeAttribute('disabled')
        hayFull = true;
        botonFull.classList.replace("btn-danger", "btn-success")

    } else if ((dados[0] == 4 && dados[1] == 4 && dados[2] == 4 && dados[3] == dados[4]) ||
               (dados[0] == dados[1] && dados[2] == 4 && dados[3] == 4 && dados[4] == 4)) {

        botonFull.removeAttribute('disabled')
        hayFull = true;
        botonFull.classList.replace("btn-danger", "btn-success")


    } else if ((dados[0] == 5 && dados[1] == 5 && dados[2] == 5 && dados[3] == dados[4]) ||
               (dados[0] == dados[1] && dados[2] == 5 && dados[3] == 5 && dados[4] == 5)) {

        botonFull.removeAttribute('disabled')
        hayFull = true;
        botonFull.classList.replace("btn-danger", "btn-success")
    
    } else if ((dados[0] == 6 && dados[1] == 6 && dados[2] == 6 && dados[3] == dados[4]) || 
               (dados[0] == dados[1] && dados[2] == 6 && dados[3] == 6 && dados[4] == 6)) {

        botonFull.removeAttribute('disabled')
        hayFull = true;
        botonFull.classList.replace("btn-danger", "btn-success")
    } 


    // poker
    if (dados[0] == 1 && dados[1] == 1 && dados[2] == 1 && dados[3] == 1 && dados[4] !== 1) {
        botonPoker.removeAttribute('disabled')
        botonPoker.classList.replace("btn-danger", "btn-success")
        hayPoker = true;
    } else if (dados[0] == 2 && dados[1] == 2 && dados[2] == 2 && dados[3] == 2 && dados[4] !== 2) {
        botonPoker.removeAttribute('disabled')
        botonPoker.classList.replace("btn-danger", "btn-success")
        hayPoker = true;
    } else if (dados[0] !== 2 && dados[1] == 2 && dados[2] == 2 && dados[3] == 2 && dados[4] == 2) {
        botonPoker.removeAttribute('disabled')
        botonPoker.classList.replace("btn-danger", "btn-success")
        hayPoker = true;
    } else if (dados[0] == 3 && dados[1] == 3 && dados[2] == 3 && dados[3] == 3 && dados[4] !== 3) {
        botonPoker.removeAttribute('disabled')
        botonPoker.classList.replace("btn-danger", "btn-success")
        hayPoker = true;
    } else if (dados[0] !== 3 && dados[1] == 3 && dados[2] == 3 && dados[3] == 3 && dados[4] == 3) {
        botonPoker.removeAttribute('disabled')
        botonPoker.classList.replace("btn-danger", "btn-success")
        hayPoker = true;
    } else if (dados[0] == 4 && dados[1] == 4 && dados[2] == 4 && dados[3] == 4 && dados[4] !== 4) {
        botonPoker.removeAttribute('disabled')
        botonPoker.classList.replace("btn-danger", "btn-success")
        hayPoker = true;
    } else if (dados[0] !== 4 && dados[1] == 4 && dados[2] == 4 && dados[3] == 4 && dados[4] == 4) {
        botonPoker.removeAttribute('disabled')
        botonPoker.classList.replace("btn-danger", "btn-success")
        hayPoker = true;
    } else if (dados[0] == 5 && dados[1] == 5 && dados[2] == 5 && dados[3] == 5 && dados[4] !== 5) {
        botonPoker.removeAttribute('disabled')
        botonPoker.classList.replace("btn-danger", "btn-success")
        hayPoker = true;
    } else if (dados[0] !== 5 && dados[1] == 5 && dados[2] == 5 && dados[3] == 5 && dados[4] == 5) {
        botonPoker.removeAttribute('disabled')
        botonPoker.classList.replace("btn-danger", "btn-success")
        hayPoker = true;
    } else if (dados[0] == 6 && dados[1] == 6 && dados[2] == 6 && dados[3] == 6 && dados[4] !== 6) {
        botonPoker.removeAttribute('disabled')
        botonPoker.classList.replace("btn-danger", "btn-success")
        hayPoker = true;
    } else if (dados[0] !== 6 && dados[1] == 6 && dados[2] == 6 && dados[3] == 6 && dados[4] == 6) {
        botonPoker.removeAttribute('disabled')
        botonPoker.classList.replace("btn-danger", "btn-success")
        hayPoker = true;
    } 

    // generala 
    if (hay1 == true && hay2 == false && hay3 == false && hay4 == false && hay5 == false && hay6 == false) {
            botonGenerala.removeAttribute("disabled")
            botonGenerala.classList.replace("btn-danger", "btn-success")
            hayGenerala = true;
    } else if (hay1 == false && hay2 == true && hay3 == false && hay4 == false && hay5 == false && hay6 == false) {
            botonGenerala.removeAttribute("disabled")
            botonGenerala.classList.replace("btn-danger", "btn-success")
            hayGenerala = true;
    } else if (hay1 == false && hay2 == false && hay3 == true && hay4 == false && hay5 == false && hay6 == false) {
            botonGenerala.removeAttribute("disabled")
            botonGenerala.classList.replace("btn-danger", "btn-success")
            hayGenerala = true;
    } else if (hay1 == false && hay2 == false && hay3 == false && hay4 == true && hay5 == false && hay6 == false) {
            botonGenerala.removeAttribute("disabled")
            botonGenerala.classList.replace("btn-danger", "btn-success")
            hayGenerala = true;
    } else if (hay1 == false && hay2 == false && hay3 == false && hay4 == false && hay5 == true && hay6 == false) {
            botonGenerala.removeAttribute("disabled")
            botonGenerala.classList.replace("btn-danger", "btn-success")
            hayGenerala = true;
    } else if (hay1 == false && hay2 == false && hay3 == false && hay4 == false && hay5 == false && hay6 == true) {
            botonGenerala.removeAttribute("disabled")
            botonGenerala.classList.replace("btn-danger", "btn-success")
            hayGenerala = true;
    }
}

// con esta función se aceptan los dados de la tirada y se pasa a la eleccion de jugada

function aceptarTirada () {
    habilitarJugadas()     
    contenedorJugada.classList.remove('esconder')
    botonesJugada.style = "display: inline-block; padding-top: 5%"
    bloquearDados();
    deshabilitarJugadasRealizadas();
}

//suma los resultados de las jugadas de cada jugador

function sumaTotalJug1 () {

    jug1Total.textContent = 0 + parseInt(jug1Puntaje1.textContent) + parseInt(jug1Puntaje2.textContent) + parseInt(jug1Puntaje3.textContent) + parseInt(jug1Puntaje4.textContent) + 
                            parseInt(jug1Puntaje5.textContent) + parseInt(jug1Puntaje6.textContent) + parseInt(jug1PuntajeEsc.textContent) + parseInt(jug1PuntajeFul.textContent) + 
                            parseInt(jug1PuntajePok.textContent) + parseInt(jug1PuntajeGen.textContent) + parseInt(jug1PuntajeDob.textContent)

    
                      
}

function sumaTotalJug2() {
    jug2Total.textContent = 0 + parseInt(jug2Puntaje1.textContent) + parseInt(jug2Puntaje2.textContent) + parseInt(jug2Puntaje3.textContent) + parseInt(jug2Puntaje4.textContent) + 
                            parseInt(jug2Puntaje5.textContent) + parseInt(jug2Puntaje6.textContent) + parseInt(jug2PuntajeEsc.textContent) + parseInt(jug2PuntajeFul.textContent) + 
                            parseInt(jug2PuntajePok.textContent) + parseInt(jug2PuntajeGen.textContent) + parseInt(jug2PuntajeDob.textContent)
}


// function bloquearAceptar() {
//     aceptarTiro.disabled = true;
// }


// funcion utilizada al finalizar cada impresión de puntaje

function finTurno () {
    // bloquearAceptar()
    cambiarNombreJugador()
    // sumaTotal()
    esconderJugada()
    esconderDados()
    esconderBotones()

    if (z <= 22) {
        desbloquearBotonTirada()
    }

    if (z == 22) {
        sumaTotalJug1()
    }

    if (z == 23) {
        sumaTotalJug2()
    }

    totalFinal1 = parseInt(jug1Total.textContent)
    totalFinal2 = parseInt(jug2Total.textContent)

    if (z == 23 && totalFinal1 > totalFinal2) {
        contenedorGanador.style = "display: inline;"
        nombreGanador.textContent = "jugador 1!"
    } else if (z == 23 && totalFinal1 < totalFinal2) {
        contenedorGanador.style = "display: inline;"
        nombreGanador.textContent = "jugador 2!"
    }

    
}

//estas funciones imprimen el puntaje correspondiente en la tabla de puntajes

function puntajeUno() {

    let arrayDados = dados.filter(greater)
    let sum = 0

    function greater(dado) {
      return dado == 1; 
    }

    for (let i = 0; i < arrayDados.length; i++) {
        sum += arrayDados[i]
    }

    if (z % 2 == 0) {
        jug1Puntaje1.textContent = sum
    } else {
        jug2Puntaje1.textContent = sum
    }
    finTurno ()

    

    
}

function puntajeDos() {

    let arrayDados = dados.filter(greater)
    let sum = 0

    function greater(dado) {
      return dado == 2; 
    }

    for (let i = 0; i < arrayDados.length; i++) {
        sum += arrayDados[i]
    }

    if (z % 2 == 0) {
        jug1Puntaje2.textContent = sum
    } else {
        jug2Puntaje2.textContent = sum
    }

    finTurno ()


}

function puntajeTres () {

    let arrayDados = dados.filter(greater)
    let sum = 0

    function greater(dado) {
      return dado == 3; 
    }

    for (let i = 0; i < arrayDados.length; i++) {
        sum += arrayDados[i]
    }

    if (z % 2 == 0) {
        jug1Puntaje3.textContent = sum
    } else {
        jug2Puntaje3.textContent = sum
    }
    finTurno ()


}

function puntajeCuatro() {

    let arrayDados = dados.filter(greater)
    let sum = 0

    function greater(dado) {
      return dado == 4; 
    }

    for (let i = 0; i < arrayDados.length; i++) {
        sum += arrayDados[i]
    }

    if (z % 2 == 0) {
        jug1Puntaje4.textContent = sum
    } else {
        jug2Puntaje4.textContent = sum
    }

    finTurno ()


}

function puntajeCinco() {

    let arrayDados = dados.filter(greater)
    let sum = 0

    function greater(dado) {
      return dado == 5; 
    }

    for (let i = 0; i < arrayDados.length; i++) {
        sum += arrayDados[i]
    }
    
    if (z % 2 == 0) {
        jug1Puntaje5.textContent = sum
    } else {
        jug2Puntaje5.textContent = sum
    }

    finTurno ()


}

function puntajeSeis() {

    let arrayDados = dados.filter(greater)
    let sum = 0

    function greater(dado) {
      return dado == 6; 
    }

    for (let i = 0; i < arrayDados.length; i++) {
        sum += arrayDados[i]
    }
    
    if (z % 2 == 0) {
        jug1Puntaje6.textContent = sum
    } else {
        jug2Puntaje6.textContent = sum
    }
    finTurno ()


}

function puntajeEscalera() {
    
    if (hayEscalera == true && z % 2 == 0 && fueModificado == false) {
        jug1PuntajeEsc.textContent = 25
    } else if (hayEscalera == true && z % 2 !== 0 && fueModificado == false) {
        jug2PuntajeEsc.textContent = 25
    } else if (hayEscalera == true && z % 2 == 0) {
        jug1PuntajeEsc.textContent = 20
    } else if (hayEscalera == true && z % 2 !== 0) {
        jug2PuntajeEsc.textContent = 20
    } else if (hayEscalera == false && z % 2 == 0) {
        jug1PuntajeEsc.textContent = 0
    } else if (hayEscalera == false && z % 2 !== 0) {
        jug2PuntajeEsc.textContent = 0
    }  

    finTurno ()


}

function puntajeFull() {
    
    if (hayFull == true && z % 2 == 0 && fueModificado == false) {
        jug1PuntajeFul.textContent = 35
    } else if (hayFull== true && z % 2 !== 0 && fueModificado == false) {
        jug2PuntajeFul.textContent = 35
    } else if (hayFull == true && z % 2 == 0) {
        jug1PuntajeFul.textContent = 30
    } else if (hayFull == true && z % 2 !== 0) {
        jug2PuntajeFul.textContent = 30
    } else if (hayFull == false && z % 2 == 0) {
        jug1PuntajeFul.textContent = 0
    } else if (hayFull == false && z % 2 !== 0) {
        jug2PuntajeFul.textContent = 0
    }  

    finTurno ()


}

function puntajePoker() {
    
    if (hayPoker== true && z % 2 == 0 && fueModificado == false) {
        jug1PuntajePok.textContent = 45
    } else if (hayPoker == true && z % 2 !== 0 && fueModificado == false) {
        jug2PuntajePok.textContent = 45
    } else if (hayPoker == true && z % 2 == 0) {
        jug1PuntajePok.textContent = 40
    } else if (hayPoker == true && z % 2 !== 0) {
        jug2PuntajePok.textContent = 40
    } else if (hayPoker == false && z % 2 == 0) {
        jug1PuntajePok.textContent = 0
    } else if (hayPoker == false && z % 2 !== 0) {
        jug2PuntajePok.textContent = 0
    } 
    
    finTurno ()


}

function puntajeGenerala() {
    
    if (hayGenerala == true && z % 2 == 0 && fueModificado == false) {
        contenedorGanador.style = "display: inline;"
        nombreGanador.textContent = "jugador 1!"
    } else if (hayGenerala == true && z % 2 !== 0 && fueModificado == false) {
        contenedorGanador.style = "display: inline;"
        nombreGanador.textContent = "jugador 2!"
    } else if (hayGenerala == true && z % 2 == 0) {
        jug1PuntajeGen.textContent = 50
    } else if (hayGenerala == true && z % 2 !== 0) {
        jug2PuntajeGen.textContent = 50
    } else if (hayGenerala == false && z % 2 == 0) {
        jug1PuntajeGen.textContent = 0
    } else if (hayGenerala == false && z % 2 !== 0) {
        jug2PuntajeGen.textContent = 0
    } 
    finTurno ()
  

}

function puntajeDoble() {
    
    if (hayGenerala == true && z % 2 == 0 && guardaPuntajeGen.textContent == 50) {
        jug1PuntajeDob.textContent = 100
    } else if (hayGenerala == true && z % 2 !== 0 && guardaPuntajeGen.textContent == 50) {
        jug2PuntajeDob.textContent = 100
    } else if (hayGenerala == false && z % 2 == 0) {
        jug1PuntajeDob.textContent = 0
    } else if (hayGenerala == false && z % 2 !== 0) {
        jug2PuntajeDob.textContent = 0
    } 

    finTurno ()
   
}




