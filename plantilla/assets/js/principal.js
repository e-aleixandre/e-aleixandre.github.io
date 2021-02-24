/**
 * @author Jordi Orquin
 * @author Enrique Aleixandre
 * 
 * 
 */

(function(){
    var umbral_SCROLL = 200;
    window.onscroll = function() {myFunction()};
    
    function myFunction() {
      if (document.body.scrollTop > umbral_SCROLL || document.documentElement.scrollTop > umbral_SCROLL) {
        document.getElementById("header").style.backgroundColor = "#1c1c1c";
      }
      else if(document.body.scrollTop <= umbral_SCROLL || document.documentElement.scrollTop <= umbral_SCROLL){
        document.getElementById("header").style.backgroundColor = "";
      }
    }
})();