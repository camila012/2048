
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
