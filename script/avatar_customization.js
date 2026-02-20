//cambiar src de imagenes

//guardar en local storage y llamar

bodyAvatar = document.getElementById("bodyAvatar");
headAvatar = document.getElementById("headAvatar");
mouthAvatar = document.getElementById("mouthAvatar");
noseAvatar = document.getElementById("noseAvatar");
eyesAvatar = document.getElementById("eyesAvatar");

function loadAvatar(){
    //cargar del localstorage el avatar
}

function changeBody(color) {
    bodyAvatar.src = `/img/character/body/body_${color}.png`;
    headAvatar.src = `/img/character/head/head_${color}.png`;

    //guardar en local storage color
}

function changeMouth() {
    maxMouths = 1;
    //ir cambiando variables con imagenes maximas porque no hay manera facil de ver cuantos archivos hay en la carpeta
    
    mouthAvatar.src = `/img/character/mouth/mouth_1.png`;
}