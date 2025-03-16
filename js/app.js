const menu=document.querySelector('#mobile-menu');
const menuLinks=document.querySelector('.navbar__menu');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

});


document.querySelectorAll(".footer__link--items h2 a").forEach((link) => {
    const text = link.textContent;
    link.innerHTML = text
        .split("")
        .map((char, index) =>
            `<span style="animation-delay: ${index * 0.1}s">${char}</span>`
        )
        .join("");
});

let card1 = document.getElementById("carte1");
card1.addEventListener("click", () => {
    window.location.href = './html/resume.html';
});

let card2 = document.getElementById("carte2");
card2.addEventListener("click", () => {
    window.location.href = './html/etudiant.html';
});

let card3 = document.getElementById("carte3");
card3.addEventListener("click", () => {
    window.location.href = './html/projects.html';
});