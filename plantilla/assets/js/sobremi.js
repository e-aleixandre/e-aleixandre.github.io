/**
 * @author Jordi Orquin
 * @author Enrique Aleixandre
 *
 *
 */
var principal = (function(document){
    var umbral_SCROLL = 200;

    // Scroll
    window.onscroll = function() {scrollBanner()};

    function scrollBanner() {
    if (document.body.scrollTop > umbral_SCROLL || document.documentElement.scrollTop > umbral_SCROLL) {
        document.getElementById("header").style.backgroundColor = "#1c1c1c";
        document.getElementById("scroll-indicator").style.display = "none";
    }
    else if(document.body.scrollTop <= umbral_SCROLL || document.documentElement.scrollTop <= umbral_SCROLL){
        document.getElementById("header").style.backgroundColor = "";
        document.getElementById("scroll-indicator").style.display = "block";
    }
    }
    // Se puede devolver un objeto con funciones / atributos
    return {};
})(document);