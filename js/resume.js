let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;

// Récupérer l'index sauvegardé dans localStorage si disponible (pour réafficher la bonne carte)
window.onload = function() {
    let savedIndex = localStorage.getItem('activeSliderIndex');
    if (savedIndex !== null) {
        active = parseInt(savedIndex); //converti en int le str
        localStorage.removeItem('activeSliderIndex'); //on clear le local storage 
    }
    loadShow(); // Afficher l'élément actif au chargement
};

function loadShow() {
    let stt = 0;

    // Réinitialiser les styles pour tous les éléments
    items.forEach((item, index) => {
        item.style.transform = 'none';
        item.style.zIndex = 0;
        item.style.filter = 'blur(5px)';
        item.style.opacity = 0.6;
    });

    // Afficher l'élément actif
    items[active].style.transform = 'none';
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Appliquer des styles pour les éléments suivants
    let sttRight = 0;
    for (let i = active + 1; i < items.length; i++) {
        sttRight++;
        items[i].style.transform = `translateX(${120 * sttRight}px) scale(${1 - 0.2 * sttRight}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -sttRight;
        items[i].style.opacity = sttRight > 2 ? 0 : 0.6;
    }

    // Appliquer des styles pour les éléments précédents
    let sttLeft = 0;
    for (let i = active - 1; i >= 0; i--) {
        sttLeft++;
        items[i].style.transform = `translateX(${-120 * sttLeft}px) scale(${1 - 0.2 * sttLeft}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -sttLeft;
        items[i].style.opacity = sttLeft > 2 ? 0 : 0.6;
    }
}

// Fonction pour changer l'élément actif en cliquant sur "next"
next.onclick = function() {
    active = (active + 1 < items.length) ? active + 1 : active; // éviter de dépasser la fin
    localStorage.setItem('activeSliderIndex', active); // save active index
    loadShow(); // Maj affichage 
};

// Fonction pour changer l'élément actif en cliquant sur "prev"
prev.onclick = function() {
    active = (active - 1 >= 0) ? active - 1 : active; // idem pour le début
    localStorage.setItem('activeSliderIndex', active); // save active index 
    loadShow(); // Maj affichage 
};


// 1. Enregistrer l'index actif lors du clic sur un lien
document.querySelectorAll('.slider .item a').forEach((link) => {
    link.addEventListener('click', function () {
        const index = this.closest('.item').getAttribute('data-index');  // on prend l'index du parent du lien 
        localStorage.setItem('activeSliderIndex', index); // Sauvegarder l'index
    });
});
