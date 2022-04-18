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
