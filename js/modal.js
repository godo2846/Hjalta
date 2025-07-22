function openPopup() {
    const popup = document.getElementById('videoPopup');
    if (popup) {
        popup.style.display = 'flex';
        console.log("Popup abierto correctamente");
    } else {
        console.error("No se encontró el elemento #videoPopup");
    }
}

// Verifica si el video existe
function checkVideo() {
    const video = document.querySelector('#videoPopup video');
    if (video) {
        console.log("Video cargado:", video.readyState);
        video.muted = true; // Fuerza el muteo para autoplay
    } else {
        console.error("No se encontró el elemento de video");
    }
}

// Ejecuta ambas funciones al cargar la página
window.onload = function() {
    openPopup();
    checkVideo();
};