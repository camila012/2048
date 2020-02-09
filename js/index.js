
var numeroSimple
var listaDeNumeros = [[], [], [], []]
var contador = 0

function iniciarJuego() {
  
  for (var indexX = 0; indexX < 4; indexX++) {
    for (let indexY = 0; indexY < 4; indexY++) {
      numeroSimple = document.createElement('div')
      numeroSimple.className = 'numero'
      listaDeNumeros[indexX][indexY] = { id: contador, ejeX: indexX, ejeY: indexY, numero: 0 }
      numeroSimple.appendChild(document.createTextNode(listaDeNumeros[indexX][indexY].numero))
      document.getElementById('contenedorDelJuego').appendChild(numeroSimple)
      contador++
    }
  }

  document.addEventListener('keydown', function(event) {
    manejarMovimientos(event.key)
  })

  asignarNumerosIniciales()

}

function asignarNumerosIniciales() {

  for (let i = 0; i < 2; i++) {
    insertarNumeroAleatorio()
  }
  
}

function insertarNumeroAleatorio() {
  var numeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  var valorAleatorio = (valorUno, valorDos) => numeroAleatorio(0, valorDos) < valorUno ? valorUno : valorDos
  var indexX, indexY, valor

  indexX = numeroAleatorio(0, 4)
  indexY = numeroAleatorio(0, 4)
  while(verificarCampo(indexX, indexY).numero !== 0) {
    indexX = numeroAleatorio(0, 4)
    indexY = numeroAleatorio(0, 4)
  }
  valor = valorAleatorio(2, 4)
  asignarValores(indexX, indexY, valor)
}

function asignarValores(indexX, indexY, valor) {
  listaDeNumeros[indexX][indexY].numero = valor
  var contenedor = document.getElementById('contenedorDelJuego')
  var idListaDeNumeros = listaDeNumeros[indexX][indexY].id
  contenedor.children[idListaDeNumeros].innerHTML = valor
  contenedor.children[idListaDeNumeros].className = `numero cuadro-${valor}`
}

function verificarCampo(indexX, indexY) {
  return listaDeNumeros[indexX][indexY];
}

function manejarPush(valorInicialDireccionDos, condicionDeCiclo, repeticionDeCiclo, condicionDeMovimiento, repeticionDeMovimiento, asignacionPrimerValor, asignacionSegundoValor) {
  function verificarSiguienteNumero(primerNumero, segundoNumero) {
    var numeroSeleccionado = primerNumero.numero
    var numeroSiguiente = segundoNumero.numero

    if(numeroSeleccionado === 0) return

    if(numeroSeleccionado === numeroSiguiente) {
      unirNumeros(primerNumero, segundoNumero)
      verificarMovimientoValido = true
    }
    else if(numeroSiguiente === 0) {
      moverNumero(primerNumero, segundoNumero)
      verificarMovimientoValido = true
    }

  }

  function unirNumeros(primerNumero, segundoNumero) {
    asignarValores(segundoNumero.ejeX, segundoNumero.ejeY, primerNumero.numero + segundoNumero.numero)
    asignarValores(primerNumero.ejeX, primerNumero.ejeY, 0)
  }

  function moverNumero(primerNumero, segundoNumero) {
    asignarValores(segundoNumero.ejeX, segundoNumero.ejeY, primerNumero.numero)
    asignarValores(primerNumero.ejeX, primerNumero.ejeY, 0)
  }

  var primerValor, segundoValor
  
  var vd2 = valorInicialDireccionDos
  var cdc = condicionDeCiclo
  var rdc = repeticionDeCiclo
  var cdm = condicionDeMovimiento
  var rdm = repeticionDeMovimiento
  var a1v = asignacionPrimerValor
  var a2v = asignacionSegundoValor

  var verificarMovimientoValido = false
  for (var direccionUno = vd2; cdc(direccionUno); direccionUno = rdc(direccionUno)) {
    for (var direccionDos = vd2; cdc(direccionDos); direccionDos = rdc(direccionDos)) {
      if (direccionDos != vd2) {
        for (let movimiento = direccionDos; cdm(movimiento, vd2); movimiento = rdm(movimiento)) {
          eval('primerValor = ' + a1v)
          eval('segundoValor = ' + a2v)
          verificarSiguienteNumero(primerValor, segundoValor)
        }
      }
    }

  }
  if(verificarMovimientoValido) insertarNumeroAleatorio()

}


function manejarMovimientos(direccion) {
  switch (direccion) {
    case 'ArrowUp':
      var vd2 = 0
      var cdc = direccion => direccion < 4
      var rdc = direccion => direccion + 1
      var cdm = (movimiento, valor) => movimiento > valor
      var rdm = movimiento => movimiento - 1
      var a1v = 'listaDeNumeros[movimiento][direccionUno]'
      var a2v = 'listaDeNumeros[movimiento-1][direccionUno]'

      manejarPush(vd2, cdc, rdc, cdm, rdm, a1v, a2v);

      break;

    case 'ArrowDown':
      var vd2 = 3
      var cdc = direccion => direccion >= 0
      var rdc = direccion => direccion - 1
      var cdm = (movimiento, valor) => movimiento < valor
      var rdm = movimiento => movimiento + 1
      var a1v = 'listaDeNumeros[movimiento][direccionUno]'
      var a2v = 'listaDeNumeros[movimiento+1][direccionUno]'

      manejarPush(vd2, cdc, rdc, cdm, rdm, a1v, a2v);

      break;

    case 'ArrowLeft':
      var vd2 = 0
      var cdc = direccion => direccion < 4
      var rdc = direccion => direccion + 1
      var cdm = (movimiento, valor) => movimiento > valor
      var rdm = movimiento => movimiento - 1
      var a1v = 'listaDeNumeros[direccionUno][movimiento]'
      var a2v = 'listaDeNumeros[direccionUno][movimiento-1]'

      manejarPush(vd2, cdc, rdc, cdm, rdm, a1v, a2v);

      break;

    case 'ArrowRight':
      var vd2 = 3
      var cdc = direccion => direccion >= 0
      var rdc = direccion => direccion - 1
      var cdm = (movimiento, valor) => movimiento < valor
      var rdm = movimiento => movimiento + 1
      var a1v = 'listaDeNumeros[direccionUno][movimiento]'
      var a2v = 'listaDeNumeros[direccionUno][movimiento+1]'

      manejarPush(vd2, cdc, rdc, cdm, rdm, a1v, a2v);

      break;
  }
}

iniciarJuego();
