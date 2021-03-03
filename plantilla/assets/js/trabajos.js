var trabajos = (function(document){

    //Controles Vídeo
    function playVideo(){
        var video = document.getElementById("video");
        video.classList.toggle('video-play');
        video.play();
    }
    function pauseVideo(){
        document.getElementById("video").pause();
        video.classList.toggle('video-play');
    }
    function stopVideo(){
        document.getElementById("video").pause();
        document.getElementById("video").currentTime = 0;
        video.classList.toggle('video-play');
    }
    function backwardVideo(){
        var video = document.getElementById("video");
        video.currentTime = video.currentTime - 2;
    }
    function forwardVideo(){
        var video = document.getElementById("video");
        video.currentTime = video.currentTime + 2;
    }
    function fullscreenVideo(){
        document.getElementById("video").requestFullscreen();
    }
    function switchVideoStatus(){
        var video = document.getElementById("video");
        if(video.paused)
            playVideo();
        else
            pauseVideo();
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

    var video_elements = document.getElementsByTagName('video');
    for(var j = 0; j < controles_video.length; j++)
        video_elements[j].addEventListener('click', switchVideoStatus);
    
    

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