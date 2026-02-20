//cambiar src de imagenes

//guardar en local storage y llamar

bodyAvatar = document.getElementById("bodyAvatar");
headAvatar = document.getElementById("headAvatar");
mouthAvatar = document.getElementById("mouthAvatar");
noseAvatar = document.getElementById("noseAvatar");
eyesAvatar = document.getElementById("eyesAvatar");

skincolor = localStorage.getItem("skincolor");

function loadAvatar(){
    if (skincolor != null){
        changeBody(skincolor);
    } 
}

function changeBody(color) {
    bodyAvatar.src = `img/character/body/body_${color}.png`;
    headAvatar.src = `img/character/head/head_${color}.png`;
    localStorage.setItem("skincolor", color);
}

function changeMouth() {
    maxMouths = 1;
    //ir cambiando variables con imagenes maximas porque no hay manera facil de ver cuantos archivos hay en la carpeta

    mouthAvatar.src = `img/character/mouth/mouth_1.png`;

        //guardar en local storage 
}

function changeNose() {
    maxNoses = 2;
    noseAvatar.src = `img/character/noses/nose_1.png`;

        //guardar en local storage 
}

function changeEyes() {
    maxEyes = 1;
    eyesAvatar.src = `img/character/eyes/eyes_1.png`;

        //guardar en local storage 
}