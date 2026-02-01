// script.js FINAL - Slider solo para música

// 1. Cargamos la música
var music = new Audio('careless_whispers.mp3');
music.loop = true;
music.volume = 1.0; // Volumen inicial al 100%

// 2. Lógica del Slider (SOLO controla la música)
var volumeSlider = document.getElementById('volume-slider');
if (volumeSlider) {
    volumeSlider.addEventListener('input', function () {
        music.volume = this.value; // Ajusta el volumen de la canción
    });
}

// 3. Pre-carga del Grinch
var grinchPreload = document.createElement('video');
grinchPreload.preload = 'auto';
grinchPreload.src = 'grinchme.mp4';

let noClickCount = 0;

window.onload = function () {
    displayHorse();
};

function selectOption(option) {
    if (option === 'yes') {
        // --- SONIDO Y UI ---
        music.play().catch(function (error) { console.log(error); });

        // MOSTRAR EL CONTROL DE VOLUMEN (Solo música)
        var sliderContainer = document.getElementById('music-control-container');
        if (sliderContainer) {
            sliderContainer.style.display = 'flex';
        }

        // Confeti
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });

        // Animación y cambio al Grinch
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none';
            displayGrinch();
        });

    } else if (option === 'no') {
        noClickCount++;
        var noButton = document.getElementById('no-button');
        var yesButton = document.getElementById('si-button');
        var phrases = [
            "¿Estás segura?", "¡Piénsalo bien!", "¿De verdad me vas a hacer esto?",
            "¡Mira que lloro!", "El otro botón es más bonito...", "¡Me vas a romper el corazón! 💔",
            "¿Y si te invito a comer?", "¡Qué fría! 🥶", "No seas así...", "¡Por favorcito!",
            "¡Andaaaa!", "Voy a decirle a tu mamá...", "Se murió una hada por ese click 🧚‍♀️",
            "Ni Judas se atrevió a tanto...", "Error: Esa opción no es válida 🤖",
            "¡Ya di que sí!", "Ok, última oportunidad...", "¡Mentira, tienes infinitas!",
            "¡No acepto un NO!", "Vale, ya entendí... ¡Broma! Di que SÍ"
        ];
        noButton.innerText = phrases[noClickCount % phrases.length];
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        yesButton.style.fontSize = (parseFloat(currentFontSize) * 1.4) + 'px';

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
    }, 0);
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) callback();
    }, 0);
}

function displayHorse() {
    var imageContainer = document.getElementById('image-container');
    var horseImage = new Image();
    horseImage.src = 'horses.gif';
    horseImage.alt = 'Horses';
    horseImage.onload = function () { imageContainer.appendChild(horseImage); };
}

function displayGrinch() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');

    // CREAR VIDEO DEL GRINCH
    var grinchVideo = document.createElement('video');
    grinchVideo.src = 'grinchme.mp4';
    grinchVideo.autoplay = true;
    grinchVideo.loop = true;

    // --- CONFIGURACIÓN DE AUDIO DEL VIDEO ---
    grinchVideo.muted = false;     // TIENE SONIDO
    grinchVideo.controls = false;  // NO TIENE BOTONES (Se ve limpio)
    grinchVideo.playsInline = true;

    // Estilos
    grinchVideo.style.width = "100%";
    grinchVideo.style.maxWidth = "480px";
    grinchVideo.style.borderRadius = "16px";
    grinchVideo.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";

    imageContainer.appendChild(grinchVideo);
    document.getElementById('options').style.display = 'none';
}