window.onload = function(){
  if (localStorage.getItem('couleur')) {
    document.getElementById('couleur').value = localStorage.getItem('couleur');
    changerBackground();
  }
}

// Autre méthode possible, alternative au onclick dans le HTML
// let bouton = document.getElementById('bouton');
// bouton.addEventListener('clic', changerCouleur);


function changerBackground() {
  let couleur = document.getElementById('couleur').value;
  let body = document.body;

  body.style.backgroundColor = couleur;
  localStorage.setItem('couleur', couleur);
}

function afficherMessage(couleurPreferee) {
  let message = "<p>Très bon choix ! Cette couleur est magnifique ! ☻";
  let encartMessage = document.getElementById('encartMessage');

  let couleur = document.getElementById('couleur').value;

  if (couleur == couleurPreferee) {
    encartMessage.textContent = message;
    encartMessage.classList.replace('invisible', 'visible');

    setTimeout(effacerMessage, 3000);
  } else {
    effacerMessage();
  }
}

function ChangerCouleurEtAfficherMessage() {
  changerBackground();
  afficherMessage("#800040");
}

function effacerMessage() {
    encartMessage.textContent = "";
    encartMessage.classList.replace('visible', 'invisible');
}
