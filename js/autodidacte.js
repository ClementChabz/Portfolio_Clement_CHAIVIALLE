window.addEventListener("scroll", function () {
    var sections = document.querySelectorAll(".section");

    sections.forEach(function (section, index) {
        var rect = section.getBoundingClientRect();
        var contentId = "content" + (index + 1);
        var content = document.getElementById(contentId);
        var img = section.querySelector(".img");

        if (!content) return;

        // Calcul de la position du bas de la section par rapport à l'écran
        var bottomRelative = rect.bottom / window.innerHeight;

        // Si la section devient visible, on affiche son contenu
        if (rect.top < window.innerHeight * 0.75) {
            content.classList.add("show");
        }

        // Si le bas de la section dépasse la moitié de l'écran: effet de disparition 
        if (bottomRelative < 0.5) {

            var speedFactor = 1.5; // pour ajuster la vitesse de la montée


            content.style.opacity = Math.max(0, bottomRelative * 2); 
            content.style.transform = `translateY(${(1 - bottomRelative) * -window.innerHeight * speedFactor}px)`; // pour que ca monte plus rapidement que ce que l'on scroll
        } else {
            content.style.opacity = 1; // s'assure qu'on peut le voir complement avant qu'il disp
            content.style.transform = "translateY(0)"; // reset dela pos
        }

        // Animation img
        var scale = 1 + (1 - Math.max(0.5, bottomRelative)); 
        img.style.transform = `scale(${scale})`;
    });
});
