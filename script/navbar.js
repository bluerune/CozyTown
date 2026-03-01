navbar = document.getElementById("navbar");
footer = document.getElementsByTagName("footer");

navbar.innerHTML = `
        <a href="index.html"><img src="img/navbar/cozytowndotcom_logo.png" class="cozytownLogoNavbar" alt="CozyTown.com"></a>
        <div class="cloudsBanner"> 
            
            <p class="welcomeNavbar">Welcome, <a href="my-profile.html">username</a>!</p>
            <img class="iconsNavbar" src="img/navbar/star.png"><a href="world-map.html">Explore</a>
            <img class="iconsNavbar" src="img/navbar/star.png"><a href="inbox.html">Cozymail</a>
            <img class="iconsNavbar" src="img/navbar/star.png"><a href="forums.html">Forums</a>
            <img class="iconsNavbar" src="img/navbar/star.png"><a href="closet.html">Closet</a>
        </div>
`;

footer[0].innerHTML = `<p>Thanks for playing CozyTown©.</p><button id="toggleTheme">Night Mode</button><img src="img/navbar/cozytown_logo.png" class="cozytownLogoFooter" alt="CozyTown.com">`;