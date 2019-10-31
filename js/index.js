
var numeroSimple
var listaDeNumeros = [[], [], [], []]
var contador = 1

for (var indexX = 0; indexX < 4; indexX++) {
  for (let indexY = 0; indexY < 4; indexY++) {
    numeroSimple = document.createElement('div')
    numeroSimple.className = 'numero'
    numeroSimple.appendChild(document.createTextNode(contador))
    listaDeNumeros[indexX][indexY] = contador
    document.getElementById('contenedorDelJuego').appendChild(numeroSimple)
    contador++
  }
}

function manejarPush(direccion) {
  function verificarSiguienteNumero(numeroSeleccionado, numeroSiguiente) {
    if(numeroSeleccionado === numeroSiguiente) {
      unirNumeros()
    }
    else if(numeroSeleccionado !== numeroSiguiente) {
      detenerMovimiento()
    }
    else if(numeroSiguiente === 0) {
      moverNumero()
    }

  }

  function unirNumeros() {

  }

  function detenerMovimiento() {

  }

  function moverNumero() {

  }



  function manejarmovimientos ( direccion ) { 
    for (let direccionUno = 0; direccionUno < 4; direccionUno++) {
      
      for (let direccionDos = 0; direccionDos < 4; direccionDos++) {
        if (direccionDos != 0) {

          listaDeNumeros[direccionUno][direccionDos] = 
        }
      }
      
    }
  }
  switch (direccion) {
    case 'ArrowUp':
        
      break;
  }
}

document.addEventListener('keydown', function(event) {
  console.log('event: ', event);

})
