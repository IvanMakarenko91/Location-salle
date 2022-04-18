// Déclaration du formulaire
(function() { // La fonction peut s'ecrire (paramètre) => {}, celle ci ne possedant pas de nom est anonyme.
  'use strict'
  let form = document.getElementById('lessonForm'); // On recupere l'id du formulaire ppour le manipuler.
  form.addEventListener('submit', function(event) { //On ajoute un evenement, au clic sur le boutton "submit", on effectue une fonction. L'interface Event interface représente un évènement qui se produit dans le DOM.
      
      Array.from(form.elements).forEach((input) => { // On recupere tout les elements dans un tableau. La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
          if (input.type !== "submit") { // Si le type du boutton est different de submit, alors.
              if (!validateFields(input)) { // On rentre tout les input dans un tableau et les valider 1 par 1.
                  
                  event.preventDefault(); // On stop la validation du formulaire. La méthode preventDefault(), rattachée à l'interface Event, indique à l'agent utilisateur que si l'évènement n'est pas explicitement géré, l'action par défaut ne devrait pas être exécutée comme elle l'est normalement.
                  event.stopPropagation(); // Évite que l'évènement courant ne se propage plus loin dans les phases de capture et de déploiement.
                  
                  // On va styliser styliser nos input.
                  input.classList.remove("is-valid"); // L'utilisation de classList est une alternative à la propriété element.className qui renvoie une chaine composée de la liste des classes, séparées par des espaces.
                  input.classList.add("is-invalid"); // On a retirer la classe is-valid pour qu'elle devienne is-invalid.
                  input.nextElementSibling.style.display = 'block'; // on va chercher l'element a côter du input qui est 'invalid-feedback' et on va lui donner le style display block. (car il etait none).
              } 
              // Dans le cas contraire du precedent, tout est fait inversé.
              else {
                  input.nextElementSibling.style.display = 'none'; // l'element 'invalid-feedback' redevient en style none.
                  input.classList.remove("is-invalid"); // On retire la classe is-valid.
                  input.classList.add("is-valid"); // La classe devient à la place 'is-valid'.
              }
          }
      });
  }, false)
})()






// Création des fonctions de verefications

// Validation d'un champ REQUIRED
function validateRequired(input) {
  return !(input.value == null || input.value == "");
}

// Validation des caractères : LATIN & LETTRES
function validateText(input) {
  return input.value.match("^[A-Za-z]+$");
}

// Validation du nombre de caractéres : MIN & MAX
function validateLenght(input, minLength, maxLength) {
    return !(input.value.length < minLength || input.value.length > maxLength);
}

// Validation d'un e-mail
function validateEmail(input) {
  let EMAIL = input.value;
  let POSAT = EMAIL.indexOf("@");
  let POSDOT = EMAIL.lastIndexOf(".");
  return !(POSAT < 1 || (POSDOT - POSAT < 2));
}

// Validation du Numéro de téléphone
function validatePhoneNumber(input) {
  return input.value.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/); // +33 valide (internationale)
}






// Validation des champs de formulaires

function validateFields(input) {
  let fieldName = input.name;
  // Validaton de l'input PRENOM
  if (fieldName == "firstName") {
      if (!validateRequired(input)) {
          return false;
      }
      if (!validateLenght(input, 2, 20)) {
          return false;
      }
      if (!validateText(input)) {
          return false;
      }
      return (true);
  }

  // Validaton de l'input NOM
  if (fieldName == "lastName") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validateLenght(input, 2, 20)) {
        return false;
    }
    if (!validateText(input)) {
        return false;
    }
    return (true);
  }

  // Validaton de l'input EMAIL
  if (fieldName == "email") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validateEmail(input)) {
        return false;
    }
    return (true);
  }

  // Validaton de l'input NUMERO DE TELEPHONE
  if (fieldName == "phoneNumber") {
      if (!validateRequired(input)) {
          return false;
      }
      if (!validatePhoneNumber(input)) {
          return false;
      }
      return (true);
  }

  // Validaton de l'input VILLE
  if (fieldName == "sujet") {
    if (!validateRequired(input)) {
        return false;
    }
    return (true);
  }

  // Validation de l'input COMMENTAIRE
  if (fieldName == "comment") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validateLenght(input, 15, 1500)) {
        return false;
    }
    return (true);
  }
}

const button = document.getElementById('btn');
 
button.addEventListener('click', function(){
   button.style.backgroundColor = "red";
});