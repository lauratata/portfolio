let dayNight = document.querySelector('.dayNight');
let menuToggle = document.querySelector('.menuToggle');
let body = document.querySelector('body');
let navigation = document.querySelector('.navigation');

let apropos = document.querySelector('.apropos');
let projets = document.querySelector('.projets');

let mouse = document.querySelector('.mouse');

dayNight.onclick = function () {
    body.classList.toggle('dark')
    dayNight.classList.toggle('active')
}

menuToggle.onclick = function () {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

apropos.addEventListener("mouseover", function () {
    projets.classList.toggle('active')
    apropos.classList.toggle('active')
});

projets.addEventListener("mouseover", function () {
    projets.classList.toggle('active')
    apropos.classList.toggle('active')
});

mouse.onclick = function () {
    window.scrollTo({
        top: 690,
        behavior: 'smooth'
    });
}