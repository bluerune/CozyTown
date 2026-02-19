navbar = document.getElementById("navbar");

navbar.innerHTML += `
        <a href="index.html"><img src="img/navbar/logo1.png" class="cozytownLogoNavbar" alt="CozyTown.com"></a>
        <div class="cloudsBanner"> 
            <a href="closet.html"><div class="profilepictureNavbar" alt=""></div></a>
            <p>Welcome, <a href="user-profile.html">username</a>!</p>
            <img class="iconsNavbar" src="img/navbar/star.png" alt=""> <a href="world-map.html">
                Explore</a>
            <img class="iconsNavbar" src="img/navbar/star.png" alt=""> <a href="forums.html">
                Forums</a>
            <img class="iconsNavbar" src="img/navbar/star.png" alt=""> <a href="inbox.html">
                Cozymail</a>
        </div>
`;