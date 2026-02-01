// script.js FINAL

// 1. Cargamos la música (nombre exacto del archivo que subiste)
var music = new Audio('careless_whispers.mp3');
music.loop = true; // Para que se repita si se acaba
music.volume = 1.0; // Volumen al máximo

// 2. Pre-carga del Grinch
var grinchPreload = new Image();
grinchPreload.src = 'grinchme.gif';

let noClickCount = 0;

window.onload = function () {
    displayHorse();
};

function selectOption(option) {
    // Si dice que SÍ
    if (option === 'yes') {
        // --- AQUÍ SUENA LA CANCIÓN ---
        music.play().catch(function (error) {
            console.log("Error al reproducir audio:", error);
        });


        // 2. Confeti (Esto es lo que agregamos)
        confetti({
            particleCount: 150, // Cantidad de papelitos
            spread: 70,         // Qué tanto se esparcen
            origin: { y: 0.6 }  // Desde dónde salen (0.6 es un poco más abajo de la mitad)
        });

        // Animación de colores instantánea
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none';
            displayGrinch();
        });

        // Si dice que NO
    } else if (option === 'no') {
        noClickCount++;

        var noButton = document.getElementById('no-button');
        var yesButton = document.getElementById('si-button');

        var phrases = [
            "¿Estás segura?",
            "¡Piénsalo bien!",
            "¿De verdad me vas a hacer esto?",
            "¡Mira que lloro!",
            "El otro botón es más bonito...",
            "¡Me vas a romper el corazón! 💔",
            "¿Y si te invito a comer?",
            "¡Qué fría! 🥶",
            "No seas así...",
            "¡Por favorcito!",
            "¡Andaaaa!",
            "Voy a decirle a tu mamá...",
            "Se murió una hada por ese click 🧚‍♀️",
            "Ni Judas se atrevió a tanto...",
            "Error: Esa opción no es válida 🤖",
            "¡Ya di que sí!",
            "Ok, última oportunidad...",
            "¡Mentira, tienes infinitas!",
            "¡No acepto un NO!",
            "Vale, ya entendí... ¡Broma! Di que SÍ"
        ];

        noButton.innerText = phrases[noClickCount % phrases.length];

        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.4;
        yesButton.style.fontSize = newSize + 'px';

    } else {
        alert('Opción invalida!');
    }
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 0); // Cambio instantáneo

    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 0); // Sin espera
}

function displayHorse() {
    var imageContainer = document.getElementById('image-container');
    var horseImage = new Image();
    horseImage.src = 'horses.gif';
    horseImage.alt = 'Horses';
    horseImage.onload = function () {
        imageContainer.appendChild(horseImage);
    };
}

function displayGrinch() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var grinchImage = new Image();
    grinchImage.src = 'grinchme.gif';
    grinchImage.alt = 'Grinch Meme';
    grinchImage.onload = function () {
        imageContainer.appendChild(grinchImage);
        document.getElementById('options').style.display = 'none';
    };
}