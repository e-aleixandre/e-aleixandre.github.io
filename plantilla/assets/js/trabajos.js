var trabajos = (function(document){

    function arrowAnimation() {
        this.classList.add('animate__fadeInLeft');
    }
    
    var elementos = document.getElementsByClassName('fa-long-arrow-alt-right');
    for (var i = 0; i < elementos.length; i++)
    {
        elementos[i].addEventListener('mouseover', arrowAnimation);
    }

    // Se puede devolver un objeto con funciones / atributos
    return {};
})(document);