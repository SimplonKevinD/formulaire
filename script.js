var email = document.getElementById("email");

email.value= "robert est une pétasse";


var id = ["joe@gmail.com", "roger@gmail.com", "toto@gmail.com"];

var motDePasse = "12345";
var questionId = "Veuillez entrer votre identifiant.";
var questionMotDePasse = "Veuillez entrer votre mot de passe.";
var identification = true; // l identification et vraie
// Début de la de la boucle
while (identification) {
var idUser = prompt(questionId); // permet d'afficher la question avec prompt
if (idUser.length > 4) { //length permet de compter les caractere
if (idUser.indexOf("@") != -1) { // index of va vérifier si il y a un arombaz
  if (id.indexOf(idUser) != -1) { // si iduser et a joe@gmail.com
    var motDePasseUser = prompt(questionMotDePasse);// le mot de passe et la question mot de passe sont lié
    if (motDePasseUser == motDePasse) {// si le mot de passe user et bon alors l alert bienvenue s affiche
      alert("Bienvenue !");
      identification = false; // //identification fausse
    } else {
      alert("Mot de passe incorrect. Veuillez réessayer.");
    }
  }  else {
    alert("Identifiant incorrect. Veuillez  réessayer.");
  }
}   else {
  alert("Erreur. Votre identifiant ne comporte pas d'arobase (@).");
}
}    else {
alert("Erreur. Votre identifiant comporte moins de 5 caractères.");
}
}


function boutonvalider(){
  input(email)

}
