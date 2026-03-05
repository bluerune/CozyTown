cinemaLink = document.getElementById("cinemaLink");

cinemaLink.addEventListener("mouseover", whiteBlur(this));

function whiteBlur(location) {
    location.classList.remove("whiteBorderImages");
    location.classList.add("whiteBorderImagesHover");
}