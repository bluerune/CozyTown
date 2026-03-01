bodyAvatar = document.getElementById("bodyAvatar");
headAvatar = document.getElementById("headAvatar");
mouthAvatar = document.getElementById("mouthAvatar");
noseAvatar = document.getElementById("noseAvatar");
eyesAvatar = document.getElementById("eyesAvatar");
topAvatar = document.getElementById("topAvatar");
bottomAvatar = document.getElementById("bottomAvatar");
shoesAvatar = document.getElementById("shoesAvatar");
hatAvatar = document.getElementById("hatAvatar");
hairFrontAvatar = document.getElementById("hairFrontAvatar");
hairBackAvatar = document.getElementById("hairBackAvatar");


clothesContainer = document.getElementById("clothesContainer");
featuresContainer = document.getElementById("featuresContainer");

function loadAvatar() {

    skincolor = localStorage.getItem("skincolor");
    topStorage = localStorage.getItem("topStorage");
    bottom = localStorage.getItem("bottom");
    shoe = localStorage.getItem("shoe");
    hat = localStorage.getItem("hat");
    nose = localStorage.getItem("nose");
    mouth = localStorage.getItem("mouth");
    eyes = localStorage.getItem("eyes");
    hairBack = localStorage.getItem("hairBack");
    hairFront = localStorage.getItem("hairFront");

    console.log(topStorage);
    console.log(bottom);

    if (skincolor != null) {
        changeBody(skincolor);
    } else {
        bodyAvatar.src = `img/character/body/body_fair.png`;
        headAvatar.src = `img/character/head/head_fair.png`;
    }

    if (topStorage != null) {
        changeTop(topStorage);
    } else {
        topAvatar.src = `img/character/clothes/tops/top_1.png`;
    }

    if (bottom != null) {
        changeBottom(bottom);
    } else {
        bottomAvatar.src = `img/character/clothes/bottoms/bottom_1.png`;
    }

    if (shoe != null) {
        changeShoe(shoe);
    } else {
        shoesAvatar.src = `img/character/clothes/shoes/shoe_1.png`;
    }

    if (hat != null) {
        changeHat(hat);
    } else {
        hatAvatar.src = "img/empty.png";
    }

    if (nose != null) {
        changeNose(nose);
    } else {
        noseAvatar.src = `img/character/noses/nose_1.png`;
    }

    if (mouth != null) {
        changeMouth(mouth);
    } else {
        mouthAvatar.src = `img/character/mouth/mouth_1.png`;
    }

    if (eyes != null) {
        changeEyes(eyes);
    } else {
        eyesAvatar.src = `img/character/eyes/eyes_1.png`;
    }

    if (hairBack != null) {
        changeHair(hairBack);
    } else {
        hairBackAvatar.src = `img/character/hair/back/hair_back_1.png`;
    }
    if (hairFront != null) {
        changeHair(hairFront);
    } else {
        hairFrontAvatar.src = `img/character/hair/front/hair_front_1.png`;
    }
}

function changeBody(color) {
    bodyAvatar.src = `img/character/body/body_${color}.png`;
    headAvatar.src = `img/character/head/head_${color}.png`;
    localStorage.setItem("skincolor", color);
}

function tabsFeatures(tabName) {
    clearAllTabs()
    switch (tabName) {
        case "eyes":
            maxEyes = 4;
            featuresContainer.innerHTML = ``
            for (let i = 1; i <= maxEyes; i++) {
                featuresContainer.innerHTML += `<img class="clothesButtonPreview" src="img/character/eyes/eyes_${i}.png" onclick="changeEyes('${i}')">`;
            }
            break;
        case "mouth":
            maxMouths = 4;
            featuresContainer.innerHTML = ``
            for (let i = 1; i <= maxMouths; i++) {
                featuresContainer.innerHTML += `<img class="clothesButtonPreview" src="img/character/mouth/mouth_${i}.png" onclick="changeMouth('${i}')">`;
            }
            break;
        case "nose":
            maxNoses = 4;
            featuresContainer.innerHTML = ``
            for (let i = 1; i <= maxNoses; i++) {
                featuresContainer.innerHTML += `<img class="clothesButtonPreview" src="img/character/noses/nose_${i}.png" onclick="changeNose('${i}')">`;
            }
            break;
        case "hair":
            maxHair = 5;
            featuresContainer.innerHTML = ``
            featuresContainer.innerHTML += `<img class="hairButtonPreview" onclick="changeClear('hair')">`;
            for (let i = 1; i <= maxHair; i++) {
                featuresContainer.innerHTML += `<div class="hairButtonPreview" onclick="changeHair('${i}')"><img src="img/character/hair/back/hair_back_${i}.png"><img src="img/character/hair/front/hair_front_${i}.png"></div>`;
            }
            break;
    }
}

function changeMouth(number) {
    mouthAvatar.src = `img/character/mouth/mouth_${number}.png`;
    localStorage.setItem("mouth", number);
}

function changeNose(number) {
    noseAvatar.src = `img/character/noses/nose_${number}.png`;
    localStorage.setItem("nose", number);
}

function changeEyes(number) {
    eyesAvatar.src = `img/character/eyes/eyes_${number}.png`;
    localStorage.setItem("eyes", number);
}



function tabsClothes(tabName) {
    clearAllTabs()
    switch (tabName) {
        case "tops":
            maxTops = 2;
            clothesContainer.innerHTML = ``
            for (let i = 1; i <= maxTops; i++) {
                clothesContainer.innerHTML += `<img class="clothesButtonPreview" src="img/character/clothes/tops/top_${i}.png" onclick="changeTop('${i}')">`;
            }
            break;
        case "bottoms":
            maxBottoms = 2;
            clothesContainer.innerHTML = ``
            for (let i = 1; i <= maxBottoms; i++) {
                clothesContainer.innerHTML += `<img class="clothesButtonPreview" src="img/character/clothes/bottoms/bottom_${i}.png" onclick="changeBottom('${i}')">`;
            }
            break;
        case "shoes":
            maxShoes = 2;
            clothesContainer.innerHTML = ``
            for (let i = 1; i <= maxShoes; i++) {
                clothesContainer.innerHTML += `<img class="clothesButtonPreview" src="img/character/clothes/shoes/shoe_${i}.png" onclick="changeShoe('${i}')">`;
            }
            break;
        case "hats":
            maxHats = 2;
            clothesContainer.innerHTML = ``
            clothesContainer.innerHTML += `<img class="clothesButtonPreview" onclick="changeClear('hat')">`;

            for (let i = 1; i <= maxHats; i++) {
                clothesContainer.innerHTML += `<img class="clothesButtonPreview" src="img/character/clothes/hats/hat_${i}.png" onclick="changeHat('${i}')">`;
            }
            break;
        default:
            console.log("Error: tab no existe");
    }


}

function changeTop(number) {
    topAvatar.src = `img/character/clothes/tops/top_${number}.png`;
    localStorage.setItem("topStorage", number);

}

function changeBottom(number) {
    bottomAvatar.src = `img/character/clothes/bottoms/bottom_${number}.png`;
    localStorage.setItem("bottom", number);
}

function changeShoe(number) {
    shoesAvatar.src = `img/character/clothes/shoes/shoe_${number}.png`;
    localStorage.setItem("shoe", number);
}

function changeHat(number) {
    hatAvatar.src = `img/character/clothes/hats/hat_${number}.png`;
    localStorage.setItem("hat", number);
}

function changeHair(number) {
    hairBackAvatar.src = `img/character/hair/back/hair_back_${number}.png`;
    hairFrontAvatar.src = `img/character/hair/front/hair_front_${number}.png`;

    localStorage.setItem("hairBack", number);
    localStorage.setItem("hairFront", number);
}

function changeClear(name) {
    switch (name) {
        case "hair":
            hairBackAvatar.src = "img/empty.png";
            hairFrontAvatar.src = "img/empty.png";
            localStorage.removeItem("hairBack");
            localStorage.removeItem("hairFront");
            break;
        case "hat":
            hatAvatar.src = "img/empty.png";
            localStorage.removeItem("hat");
            break;
    }
}

function clearAllTabs() {
    clothesContainer.innerHTML = ``
    featuresContainer.innerHTML = ``
}