function comprarStickers() {
    var cantidadSticker1 = (document.getElementById("sticker1").value) || 0;
    var cantidadSticker2 = (document.getElementById("sticker2").value) || 0;
    var cantidadSticker3 = (document.getElementById("sticker3").value) || 0;

    var totalStickers = cantidadSticker1 + cantidadSticker2 + cantidadSticker3;

    var resultadoParrafo = document.getElementById("resultado");

    if (totalStickers <= 10) {
        resultadoParrafo.textContent = "Llevas " + totalStickers + " stickers.";
    } else {
        resultadoParrafo.textContent = "Llevas demasiados stickers.";
    }
}
