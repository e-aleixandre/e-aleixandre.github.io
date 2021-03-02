/**
 * @author Jordi Orquin
 * @author Enrique Aleixandre
 * 
 * 
 */

(function(){
    var umbral_SCROLL = 200;
    window.onscroll = function() {scrollBanner()};
    
    function scrollBanner() {
      if (document.body.scrollTop > umbral_SCROLL || document.documentElement.scrollTop > umbral_SCROLL) {
        document.getElementById("header").style.backgroundColor = "#1c1c1c";
      }
      else if(document.body.scrollTop <= umbral_SCROLL || document.documentElement.scrollTop <= umbral_SCROLL){
        document.getElementById("header").style.backgroundColor = "";
      }
    }
    
    
})();
  var elementos = document.getElementsByClassName('nav-link');
  for (var i = 0; i < elementos.length; i++)
  {
      elementos[i].addEventListener('mouseover', hoverlinks);
      elementos[i].addEventListener('mouseleave', hoverlinks);
  }
  function hoverlinks(event){
    document.getElementById("current_page").classList.toggle('active');
    this.classList.toggle('active');
  }