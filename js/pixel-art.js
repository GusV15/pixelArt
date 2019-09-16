var paleta = document.getElementById('paleta');

var grillaPixeles = document.getElementById('grilla-pixeles');  

var indicadorDeColor = document.getElementById('indicador-de-color');

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
function generarPaletaDeColores(){
  
  for (let i = 0; i < nombreColores.length; i++) {
    let nuevoElemento = document.createElement('div');
    nuevoElemento.style.backgroundColor = nombreColores[i];
    nuevoElemento.className = 'color-paleta';
    paleta.appendChild(nuevoElemento);  
  }
  
}

function generarGrillaPixeles(){
  for (let i = 0; i < 1750; i++) {
    let nuevoElemento = document.createElement('div');
    grillaPixeles.appendChild(nuevoElemento);
  }
}

/*
* Función que selecciona un color de la paleta y lo muestra en el indicador de color,
* al realizar un click.
*/
function copiarColorDePaleta(){
paleta.childNodes.forEach(function(element){
  element.addEventListener('click',seleccionarColor); 
});
}
function seleccionarColor(e){
  indicadorDeColor.style.backgroundColor = e.target.style.backgroundColor;
}

/*
* Función que selecciona un color de la paleta y lo muestra en el indicador de color,
* al realizar un click.
*/
function pintarGrilla(){
  grillaPixeles.childNodes.forEach(function(element){
    element.addEventListener('click',seleccionarColorBis);
  });
}
function seleccionarColorBis(e2){
  e2.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorDeColor.style.backgroundColor = colorActual;

  })
);

var estadoDeMouse;
function detectarEstadoDeMouse(){
  estadoDeMouse = 'noPresionado'
  indicadorDeColor.addEventListener('mouseDown', function(){
    console.log(estadoDeMouse);
  })
  indicadorDeColor.addEventListener('mouseup', function(){
    estadoDeMouse = 'presionado';
    console.log(estadoDeMouse);
  })
}

window.onload = function(){
  generarGrillaPixeles();
  generarPaletaDeColores();
  copiarColorDePaleta();
  pintarGrilla();
  detectarEstadoDeMouse();
}


