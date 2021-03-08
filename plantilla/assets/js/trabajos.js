var trabajos = (function(document){

    //Controles Vídeo
    function playVideo(){
        var video = this.parentNode.parentNode.getElementsByTagName('video');
        video[0].classList.toggle('video-play');
        video[0].play();
    }
    function pauseVideo(){
        var video = this.parentNode.parentNode.getElementsByTagName('video');
        video[0].pause();
        video[0].classList.toggle('video-play');
    }
    function stopVideo(){
        var video = this.parentNode.parentNode.getElementsByTagName('video');
        video[0].pause();
        video[0].currentTime = 0;
        video[0].classList.toggle('video-play');
    }
    function backwardVideo(){
        var video = this.parentNode.parentNode.getElementsByTagName('video');
        video[0].currentTime = video[0].currentTime - 2;
    }
    function forwardVideo(){
        var video = this.parentNode.parentNode.getElementsByTagName('video');
        video[0].currentTime = video[0].currentTime + 2;
    }
    function fullscreenVideo(){
        this.parentNode.parentNode.getElementsByTagName('video')[0].requestFullscreen();
    }
    
    function switchVideoStatus(){
        if(this.paused){
            this.play();
            this.classList.toggle('video-play');
        }
        else{
            this.pause();
            this.classList.toggle('video-play');
        }
    }
    function setVideoInformation(){
        //this.duration;
    }

    var controles_video = document.getElementsByClassName("controles-video");
    for(var i = 0; i < controles_video.length; i++)
    {
        controles_video[i].querySelector('i.fa-play').addEventListener('click', playVideo);
        controles_video[i].querySelector('i.fa-pause').addEventListener('click', pauseVideo);
        controles_video[i].querySelector('i.fa-stop').addEventListener('click', stopVideo);
        controles_video[i].querySelector('i.fa-backward').addEventListener('click', backwardVideo);
        controles_video[i].querySelector('i.fa-forward').addEventListener('click', forwardVideo);
        controles_video[i].querySelector('i.fa-expand-arrows-alt').addEventListener('click', fullscreenVideo);
    }

    //Selección de todos los objetos tipo vídeo
    var video_elements = document.getElementsByTagName('video');
    for(var j = 0; j < controles_video.length; j++)
    {
        video_elements[j].addEventListener('click', switchVideoStatus);
        video_elements[j].addEventListener('loadeddata', setVideoInformation);
    }
    
    

    //Animación Hover cards
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