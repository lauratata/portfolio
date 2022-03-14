const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    deleteSpeed: 20
})
    .changeDelay(50)
    .typeString('Je suis <spam class="jaune">Laura Taormina</spam>')
    .pauseFor(50)
    .deleteChars(15)
    .typeString('<spam class="jaune"> UX/UI Designer Junior</spam>')
    .pauseFor(1000)
    .deleteChars(21)
    .typeString('<spam class="jaune"> Développeuse Front Junior</spam>')
    .pauseFor(1000)
    .deleteChars(26)
    .typeString('<spam class="jaune"> Laura Taormina</spam>')
    .typeString('. Bienvenue dans mon système.')
    .start();