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
  function hoverlinks(obj){
    //document.getElementsById("current_page").style.textDecoration = "none";
    obj.style.textDecoration = "underline";
  }
  function nothoverlinks(obj){
    obj.style.textDecoration = "none";
  //document.getElementsById("current_page").style.textDecoration = "underline";
  }