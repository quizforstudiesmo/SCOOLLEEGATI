document.addEventListener("DOMContentLoaded", () => {

    // 1. Gestione effetto 3D sull'immagine (sezione game.html)
    // Seleziona l'immagine specifica nella sezione game-promotion (image-content2)
    const imageDan = document.querySelector(".image-content2 img");

    if (imageDan) {
        imageDan.addEventListener("mouseover", () => {
            imageDan.style.transform = "translateZ(20px) scale(1.1)"; // Sposta leggermente in avanti e ingrandisce
            imageDan.style.transition = "transform 0.3s ease";
            imageDan.style.filter = "drop-shadow(10px 10px 15px rgba(0, 0, 0, 0.5))"; // Aggiunge un'ombra 3D
        });

        imageDan.addEventListener("mouseout", () => {
            imageDan.style.transform = "translateZ(0) scale(1)"; // Torna alla posizione originale
            imageDan.style.filter = "drop-shadow(0 0 0 rgba(0, 0, 0, 0))"; // Rimuove l'ombra
        });
    }

    // 2. Gestione Autoplay/Pausa Video (Intersection Observer)
    const video = document.getElementById("video-element");
    const videoSection = document.querySelector(".spazio-foto");

    if (video && videoSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Avvia il video quando la sezione è visibile
                    video.play();
                } else {
                    // Ferma il video quando la sezione non è visibile
                    video.pause();
                }
            });
        }, {
            // L'opzione threshold: 0.5 significa che l'azione scatta quando
            // almeno il 50% della sezione è visibile
            threshold: 0.5
        });

        // Osserva la sezione contenente il video
        observer.observe(videoSection);
    }
});