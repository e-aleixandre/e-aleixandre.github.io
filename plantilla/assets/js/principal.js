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
  function hoverlinks(obj, document){
    document.getElementById("current_page").className = "nav-link";
    obj.className = "nav-link active";
  }
  function nothoverlinks(obj, document){  
    obj.className = "nav-link";
    document.getElementById("current_page").className = "nav-link active";
  }