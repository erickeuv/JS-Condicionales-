const img = document.getElementById('imagenClick')

img.addEventListener( 'click', function(){
    let borde= img.style.border === 'none'
    if (borde) {
        img.style.border = '3px solid red'}
        else 
        img.style.border ='none'
    })