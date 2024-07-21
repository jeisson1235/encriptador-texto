// Lógica fuente con funciones

function encriptar(texto) {
    // El patrón para encriptar el texto 
    const llaves = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    
    return texto.split('').map(letra => llaves[letra] || letra).join('');
    // let txt = '';
    // for (let letra of texto) {
    //     if (llaves[letra]) {
    //         txt += llaves[letra];
    //     } else {
    //         txt += letra;
    //     }
    // }
    // return txt;
};

function descencriptar(texto) {
    // El patrón para desencriptar el texto 
    const llaves = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let txt = texto;
    for (let llave in llaves) {
        txt = txt.split(llave).join(llaves[llave]);
    }
    return txt;
};

// Esconde el elemento 
const mostrarOcultar = (ocultarId, mostrarId) => {
    document.getElementById(ocultarId).style.display='block'; // muestra
    document.getElementById(mostrarId).style.display='none'; // esconde
};

// Restricción de solo caracteres en minúscula
const validarTexto = (texto) => /^[a-z\s]*$/.test(texto);


// Funciones DOM con los botones

const encriptarTxt = () => {
    const inputTexto = document.getElementById('inputTexto').value;
    const resultado = document.getElementById('resultado');

    if (validarTexto(inputTexto)) { 
        mostrarOcultar('contenido__mostrar', 'contenido__ocultar');
        resultado.value = encriptar(inputTexto);
    } else {
        alert('Por favor, ingrese solo letras minúsculas y sin acentos.');
    }
};

const desencriptarTxt = () => {
    const inputTexto = document.getElementById('inputTexto').value;
    const resultado = document.getElementById('resultado');
    if (validarTexto(inputTexto)) {
        mostrarOcultar('contenido__mostrar', 'contenido__ocultar');
        resultado.value = descencriptar(inputTexto);
    } else {
        alert('Por favor, ingrese solo letras minúsculas y sin acentos.');
    }
};

const copiarTxt = () => {
    const resultado = document.getElementById('resultado');
    resultado.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
};

const limpiarTxt = () => {
    document.getElementById('inputTexto').value = '';
    document.getElementById('resultado').value = '';
    mostrarOcultar('contenido__ocultar', 'contenido__mostrar');
};