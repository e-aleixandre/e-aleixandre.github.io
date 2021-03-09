var trabajos = (function(document){

    //Controles Vídeo
    function playVideo(){
        var video = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('video');
        video[0].classList.toggle('video-play');
        video[0].play();
    }

    function pauseVideo(){
        var video = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('video');
        video[0].pause();
        video[0].classList.toggle('video-play');
    }

    function stopVideo(){
        var video = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('video');
        video[0].pause();
        video[0].currentTime = 0;
        video[0].classList.toggle('video-play');
    }

    function backwardVideo(){
        var video = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('video');
        video[0].currentTime = video[0].currentTime - 2;
    }

    function forwardVideo(){
        var video = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('video');
        video[0].currentTime = video[0].currentTime + 2;
    }

    function fullscreenVideo(){
        this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('video')[0].requestFullscreen();
    }

    function updateTimeVideo(event){
        var timeDiv = document.getElementById("tiempo-video");
        timeDiv.innerText = getVideoDurationString(event.target);
    }

    function changeVolumeVideo(event) {
        var video = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector("video");
        video.volume = event.target.value / 100;
    }

    function muteVideo(event) {
      var video = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector("video");
      var volumebar = event.target.parentNode.parentNode.querySelector('.volume');
      var muted = video.getAttribute("muted") === "true";
      video.setAttribute("muted", muted ? false : true);
      volumebar.value = 0;

      event.target.classList.toggle('fa-volume-up');
      event.target.classList.toggle('fa-volume-mute');
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

    // Información del vídeo en un formato adecuado
    function getVideoDurationString(video) {
      var duration = video.duration - video.currentTime,
          mins,
          secs;

      secs = duration % 60;
      mins = (duration - secs) / 60;

      secs = Math.ceil(secs);

      mins = addLeadingZeros(mins);
      secs = addLeadingZeros(secs);

      return mins + ":" + secs;
    }

    function addLeadingZeros(num) {
      num = num.toString();

      while (num.length < 2) {
        num = "0" + num;
      }

      return num;
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

    // Event Listeners de los vídeos
    var video_elements = document.getElementsByTagName('video');
    for(var j = 0; j < controles_video.length; j++)
    {
        video_elements[j].addEventListener('click', switchVideoStatus);
        video_elements[j].addEventListener('loadeddata', setVideoInformation);
        video_elements[j].addEventListener('timeupdate', updateTimeVideo);
    }

    var volumenes = document.querySelectorAll("input.volume");
    var mute = document.querySelector("#control-mute i");

    for (var i = 0; i < volumenes.length; i++) {
      volumenes[i].addEventListener('change', changeVolumeVideo);
    }

    mute.addEventListener("click", muteVideo);


    //Cargar Audio
    function loadAudio(){
        //silenciamos todos los audios, si existen
        var audios_repr = document.getElementsByTagName("audio");
        for(var i = 0; i < audios_repr.length; i++){
            audios_repr[i].pause();
            audios_repr[i].currentTime = 0;
        }
        
        //Desactivamos todos los botones que pudieran estar activos
        // y marcamos el audio actual como activo
        var botones_actv = document.getElementsByClassName('audio-activo');
        for(i = 0; i < botones_actv.length; i++){
            botones_actv[i].classList.remove('audio-activo');
        }
        this.classList.toggle('audio-activo');

        //Cargamos la nueva pista de Audio
        var nombre_audio = "assets/audios/" + this.name + ".mp3";
        var audio = new Audio(nombre_audio);
        audio.addEventListener('loadeddata', loadAudioData);
        
        //Insertamos información
        var divAudio = document.getElementById("div-audio");
        divAudio.appendChild(audio);

        var nodeText = document.getElementById('nombre-audio');
        nodeText.innerText = this.name;

        audio.play();
    }
    function loadAudioData(){

    }

    var audio1 = document.getElementById("audio1");
    var audio2 = document.getElementById("audio2");
    var audio3 = document.getElementById("audio3");
    audio1.addEventListener('click', loadAudio);
    audio2.addEventListener('click', loadAudio);
    audio3.addEventListener('click', loadAudio);


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
    return {
    };
})(document);
