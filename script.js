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

function afficherMessage() {
  let message = "Très bon choix ! Cette couleur est magnifique ! ☻";
  let encartMessage = document.getElementById('encartMessage');
  let couleurPreferee = "#800040";
  let couleur = document.getElementById('couleur').value;
  if (couleur == couleurPreferee) {
    encartMessage.innerHTML = message;
    encartMessage.classList.replace('invisible', 'visible');

    setTimeout(() => {
      encartMessage.classList.replace('visible', 'invisible');
    }, 3000);
  }else {
    encartMessage.classList.replace('visible', 'invisible');
  }

}

function  ChangerCouleurEtAfficherMessage() {
  changerBackground();
  afficherMessage();
}

function test() {
  alert('Bonjour');
  document.getElementById('encartMessage').value = "test";
}
