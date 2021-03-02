var trabajos = (function(document){

    function arrowAnimation() {          
        this.querySelector('i').classList.add('animate__fadeInLeft');
    }
    function arrowAnimationOut(){
        this.querySelector('i').classList.remove('animate__fadeInLeft');
    }
    var card_elements = document.getElementsByClassName('card');
    for (var i = 0; i < card_elements.length; i++)
    {
        card_elements[i].addEventListener('mouseover', arrowAnimation);
        card_elements[i].addEventListener('mouseleave', arrowAnimationOut);
    }

    // Se puede devolver un objeto con funciones / atributos
    return {};
})(document);