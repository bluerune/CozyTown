userProfileList = [{ "username": "jo_star", "description": "Hi! I'm a conceited bitch who's always trying to humiliate others to get attention. My passions are seducing idiots into giving me premium items and crushing my competition in online fashion shows, because I'd never win a single award in real life" },
{ "username": "fairylady_003", "description": "" }
];

pictureProfilePageContainer = document.getElementById("pictureProfilePageContainer");
usernameProfilePage = document.getElementById("usernameProfilePage");
descriptionProfilePage = document.getElementById("descriptionProfilePage");
petProfilePage = document.getElementById("petProfilePage");

function directUserProfile(username) {
    localStorage.setItem("usernameProfilePage", username);
    window.location.href = "./user-profile.html";
}

function loadUserData() {
    username = localStorage.getItem("usernameProfilePage");
    indexUsername = userProfileList.indexOf("username" === username);
    usernameProfilePage.innerHTML = `${username}`

    switch (username) {
        case "jo_star":
            usernameProfilePage.innerHTML += `<div class="onlineDot"></div>`
            descriptionProfilePage.innerHTML = `<p>Hi! I'm a conceited bitch who's always trying to humiliate others to get attention. My passions are seducing idiots into giving me premium items and crushing my competition in online fashion shows, because I'd never win a single award in real life</p>`;
            break;
        case "Me":
            window.location.href = "./my-profile.html";
            break;
            case "CozyTownRoyalty":
                descriptionProfilePage.innerHTML = `<p></p>`;
            break;
        default:
            descriptionProfilePage.innerHTML = `<p>No description</p>`;
            break;
    }


    // console.log(indexUsername);
    // if (indexUsername > -1) {
    //     descriptionProfilePage.innerHTML = `<p>${username[indexUsername].description}</p>`;
    // } else {
    //     descriptionProfilePage.innerHTML = `<p>I like turtles</p>`;
    // }
}