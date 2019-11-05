
var numeroSimple
var listaDeNumeros = [[], [], [], []]
var contador = 0

for (var indexX = 0; indexX < 4; indexX++) {
  for (let indexY = 0; indexY < 4; indexY++) {
    numeroSimple = document.createElement('div')
    numeroSimple.className = 'numero'
    listaDeNumeros[indexX][indexY] = { id: contador, numero: 0 }
    numeroSimple.appendChild(document.createTextNode(listaDeNumeros[indexX][indexY].numero))
    document.getElementById('contenedorDelJuego').appendChild(numeroSimple)
    contador++
  }
}

// console.table(listaDeNumeros)
// console.log("('contenedorDelJuego')", )

function asignarValores(indexX, indexY, valor) {
  listaDeNumeros[indexX][indexY].numero = valor
  var contenedor = document.getElementById('contenedorDelJuego')
  var idListaDeNumeros = listaDeNumeros[indexX][indexY].id
  contenedor.children[idListaDeNumeros].innerHTML = valor
}

function manejarPush(direccion) {
  function verificarSiguienteNumero(numeroSeleccionado, numeroSiguiente) {
    if(numeroSeleccionado === numeroSiguiente) {
      unirNumeros()
    }
    else if(numeroSeleccionado !== numeroSiguiente) {
      detenerMovimiento()
    }
    else if(numeroSigreduiente === 0) {
      moverNumero()
    }

  }

  function unirNumeros() {
    console.log('unir numero');
    
  }

  function detenerMovimiento() {
    console.log('detener numero');

  }

  function moverNumero() {
    console.log('mover numero');

  }
}


function manejarMovimientos(direccion) { 
  switch (direccion) {
    case 'ArrowUp':
      console.log('arriba');
      
      break;
  
    case 'ArrowDown':
      console.log('abajo');
    
      break;
  
    case 'ArrowLeft':
      console.log('izquierda');
    
      break;
  
    case 'ArrowRight':
      console.log('derecha');
    
      break;
  
  }
  for (let direccionUno = 0; direccionUno < 4; direccionUno++) {
    
    for (let direccionDos = 0; direccionDos < 4; direccionDos++) {
      if (direccionDos != 0) {
        
        // listaDeNumeros[direccionUno][direccionDos] = 
      }
    }
    
  }
}

document.addEventListener('keydown', function(event) {
  manejarMovimientos(event.key)
})
