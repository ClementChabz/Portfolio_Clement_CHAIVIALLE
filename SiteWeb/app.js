const menu=document.querySelector('#mobile-menu');
const menuLinks=document.querySelector('.navbar__menu');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

});


document.querySelectorAll(".footer__link--items h2").forEach((heading) => {
    const text = heading.textContent;
    heading.innerHTML = text
        .split("")
        .map((char, index) => 
            `<span style="animation-delay: ${index * 0.1}s">${char}</span>`
        )
        .join("");
});