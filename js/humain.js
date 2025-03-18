
function toggleContent(id) {
var contents = document.querySelectorAll(".content");
contents.forEach(function (content) {
    var img = content.previousElementSibling;
    if (content.id !== id) {
    content.classList.remove("show");
    content.classList.add("hide");
    } else {
    content.classList.remove("hide");
    content.classList.add("show");
    }
});
}

window.addEventListener("scroll", function () {
var sections = document.querySelectorAll(".section");
sections.forEach(function (section, index) {
    var rect = section.getBoundingClientRect();
    var contentId = "content" + (index + 1);
    var content = document.getElementById(contentId);
    var contentHeightRelative =
    (rect.top + rect.height / 2) / window.innerHeight;

    if (contentHeightRelative < 0.15) {
    content.style.opacity = contentHeightRelative / 0.15;
    } else if (contentHeightRelative > 0.85) {
    content.style.opacity = (1 - contentHeightRelative) / 0.15;
    } else {
    content.style.opacity = 1;
    }

    content.style.maxHeight = contentHeightRelative * 1000 + "px";
    var img = content.previousElementSibling;
    var scale = 1 + (1 - content.style.opacity);
    scale = Math.max(1, Math.min(2.5, scale));
    img.style.transform = `scale(${scale})`;

});
});


document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner le contenu de la première section (content1)
    const firstContent = document.getElementById("content1");

    // Ajouter la classe 'show' pour l'afficher dès le chargement
    if (firstContent) {
        firstContent.classList.add("show");

        // Optionnel : Ajuster la hauteur du contenu pour correspondre à la taille réelle du contenu
        firstContent.style.maxHeight = firstContent.scrollHeight + "px";
    }
});