var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var indicadorDeColor = document.getElementById('indicador-de-color');
// Variable para guardar el elemento 'color-personalizado.
var colorPersonalizado = document.getElementById('color-personalizado');

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

/* 
Función que recorra la lista de colores nombreColores, 
y por cada color crea un elemento div y le asigne un 
background-color: color y la clase color-paleta. 
*/
function generarPaletaDeColores() {
  for (let i = 0; i < nombreColores.length; i++) {
    let nuevoElemento = document.createElement('div');
    nuevoElemento.style.backgroundColor = nombreColores[i];
    nuevoElemento.className = 'color-paleta';
    paleta.appendChild(nuevoElemento);
  }
}

/*
Función que genera la grilla de pixeles en la que se va a dibujar.
*/
function generarGrillaPixeles() {
  for (let i = 0; i < 1750; i++) {
    let nuevoElemento = document.createElement('div');
    grillaPixeles.appendChild(nuevoElemento);
  }
}

/* Guia 2 - Paso 1
Función que selecciona un color de la paleta y al realizar un click 
lo muestra en el indicador de color.
*/

function seleccionarColorGrilla(e) {
  indicadorDeColor.style.backgroundColor = e.target.style.backgroundColor;
}
function copiarColorDePaleta() {
  paleta.childNodes.forEach(function (element) {
    element.addEventListener('click', seleccionarColorGrilla);
  })
}
// Guia 2 -Paso 2
function seleccionarColorPaleta(e) {
  e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
}
// Función que pinta un pixel al hacer click en un cuadro de la grilla de colores.
function pintarGrilla() {
  grillaPixeles.childNodes.forEach(function (element) {
    element.addEventListener('click', seleccionarColorPaleta);
  })
}

// Guia 2 - Paso 3
// Función que modifica el color del indicador de colores con el seleccionado en la grilla.
function pintarIndicadorDeColores() {
  colorPersonalizado.addEventListener('change', function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorDeColor.style.backgroundColor = colorActual;
  })
}

/* Guia 2 - Paso 4 y 5
*  Esta función realiza la validacion de si el mouse esta presionado o no, 
*  si lo está pinta los pixeles, en caso contrario no.
*/
function pintarGrillaEnMovimiento() {
  let estaPresionado = false;
  grillaPixeles.addEventListener('mousedown', function () {
    estaPresionado = true;
  });
  grillaPixeles.addEventListener('mouseup', function () {
    estaPresionado = false;
  });
  grillaPixeles.addEventListener('mousemove', function (e) {
    if (estaPresionado == true) {
      seleccionarColorPaleta(e)
    }
  })
}

// Guia 3 - Paso 1
// Borrado animado de pixeles
function animarPixeles() {
  var $pixelBorrado = $("#grilla-pixeles div").animate({ "background-color": "#ffffff" }, 2500);
}
function borrarPixeles() {
  $("#borrar").click(animarPixeles);

}

// Guia 3 - Paso 2
//cargar superheroes
function cargarSuperheroes() {
  $("#batman").click(function () {
    cargarSuperheroe(batman);
  });

  $("#wonder").click(function () {
    cargarSuperheroe(wonder);
  });

  $("#flash").click(function () {
    cargarSuperheroe(flash);
  });

  $("#invisible").click(function () {
    cargarSuperheroe(invisible);
  });
}

// Guia 3 - paso 3
// Guarda imagen dibujada
function guardarImagen (){
  $("#guardar").click(function() {
    guardarPixelArt();
  });
}

window.onload = function () {
  generarGrillaPixeles();
  generarPaletaDeColores();
  copiarColorDePaleta();
  pintarIndicadorDeColores();
  pintarGrilla();
  pintarGrillaEnMovimiento();
  borrarPixeles();
  cargarSuperheroes();
  guardarImagen();
}


