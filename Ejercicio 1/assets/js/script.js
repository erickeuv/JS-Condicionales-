document.addEventListener("DOMContentLoaded", function() {
    var imagen = document.getElementById("imagenClick");

    imagen.addEventListener("click", function() {

        var tieneBorde = imagen.style.border === "2px solid red";

        if (tieneBorde) {
            imagen.style.border = "none";
        } else {
            imagen.style.border = "2px solid red";
        }
    });
});