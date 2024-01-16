window.onload = function(){
  document.getElementById('couleur').value = localStorage.getItem('couleur');
  changerBackground();
}

function changerBackground() {
  let couleur = document.getElementById('couleur').value;
  let body = document.body;

  body.style.backgroundColor = couleur;

  localStorage.setItem('couleur', couleur);
}
