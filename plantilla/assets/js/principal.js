/**
 * @author Jordi Orquin
 * @author Enrique Aleixandre
 *
 *
 */

var portfolio = (function(document){
    var umbral_SCROLL = 200;

    // Scroll
    window.onscroll = function() {scrollBanner()};

    function scrollBanner() {
      if (document.body.scrollTop > umbral_SCROLL || document.documentElement.scrollTop > umbral_SCROLL) {
        document.getElementById("header").style.backgroundColor = "#1c1c1c";
      }
      else if(document.body.scrollTop <= umbral_SCROLL || document.documentElement.scrollTop <= umbral_SCROLL){
        document.getElementById("header").style.backgroundColor = "";
      }
    }

    function hoverlinks() {
      document.getElementById('current_page').classList.toggle('active');
      this.classList.toggle('active');
    }
    // Menu hover/mouseleave
    var elementos = document.getElementsByClassName('nav-link');
    for (var i = 0; i < elementos.length; i++)
    {
        elementos[i].addEventListener('mouseover', hoverlinks);
        elementos[i].addEventListener('mouseleave', hoverlinks);
    }

    // Se puede devolver un objeto con funciones / atributos
    return {};
})(document);
