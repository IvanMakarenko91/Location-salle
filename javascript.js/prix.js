// Tableau contenant le nom des produits et leur prix
const products = [
  {
    cadre: "card1",
    product: "bureau1",
    price: 800
  },
  {
    cadre: "card2",
    product: "bureau2",
    price: 550
  },
  {
    cadre: "card3",
    product: "bureau3",
    price: 875
  },
  {
    cadre: "card4",
    product: "bureau4",
    price: 1100
  },
  {
    cadre: "card5",
    product: "bureau5",
    price: 1000
  },
  {
    cadre: "card6",
    product: "bureau6",
    price: 400
  },
  {
    cadre: "card7",
    product: "bureau7",
    price: 950
  }
]

// Fonction retournant le prix par une reduction
function getPromoPrice(price, percent) {
  return price - (price * percent / 100)
}

// Fonction donnant l'arrondi d'un nombre
function roundDecimal(number) {
  const tmp = Math.pow(10, 2) // Math.pow retourne l'exposant du chiffre de gauche par celui de droite, ici ce sera 10 ** 10 = 100
  return Math.round( number*tmp )/tmp // Math.round arrondi le chiffre a l'entier le plus proche.
}

// Fonction remplaçant une chaine de caractère par un autre modèle.
function formatPrice(price) {
  return price.toString().replace(".", ",") + " €"
}

for (let i = 0; i < products.length; i++) { // A chaque tour de boucle, on increment i de 1.
  let product = document.getElementById(products[i].product)  // A chaque incrementation, on obtient l'identifiant de notre tableau par la veleur de i.
  
  let newPromoPrice = getPromoPrice(products[i].price, 0) // On effectue le calcul de la fonction getPromoPrice, avec comme paramètres le prix de chaque bureau, et sa promotion.
  let roundedPrice = roundDecimal(newPromoPrice) // Avec le prix obtenu de la promotion au dessus, on arrondi le chiffre à l'entier le plus proche.
  
  product.innerText = formatPrice(roundedPrice) + " TTC" // innerText permet d'ecrire du code, dans notre cas ce sera a l'id selectionné.
  // Le prix sera interprété avec le resultat du prix arrondi et les points sont remplacés par des virgules. 
  }

function codePromo() {
for (let i = 0; i < products.length; i++) {
  let product = document.getElementById(products[i].product) 
  let li = document.createElement('del')
  li.innerText = products[i].price + " €"
  let newPromoPrice = getPromoPrice(products[i].price, 10) 
  let roundedPrice = roundDecimal(newPromoPrice) 
  
  
  product.innerText = formatPrice(roundedPrice) + " avec code promo "
  product.append(li) 
  }
}

function toutesTaxes() {
  for (let i = 0; i < products.length; i++) { 
    let product = document.getElementById(products[i].product)
    
    let newPromoPrice = getPromoPrice(products[i].price, 0) 
    let roundedPrice = roundDecimal(newPromoPrice) 
    
    product.innerText = formatPrice(roundedPrice) + " TTC"
    }
  }

function horsTva() {
  for (let i = 0; i < products.length; i++) { 
    let product = document.getElementById(products[i].product)  
      
    let newPromoPrice = getPromoPrice(products[i].price, 20) 
    let roundedPrice = roundDecimal(newPromoPrice) 
      
    product.innerText = formatPrice(roundedPrice) + " Hors TVA"
    }
  }

  // Declencher les evenements
let choiceOne = document.getElementById('choix1');
let choiceTwo = document.getElementById('choix2');
let choiceThree = document.getElementById('choix3');
choiceOne.addEventListener('click',toutesTaxes);
choiceTwo.addEventListener('click',horsTva);
choiceThree.addEventListener('click',codePromo);


// On selectionne les classes
var bouttons = document.querySelectorAll(".activation .btn")

for (var i = 0; i < bouttons.length; i++) {
  bouttons[i].addEventListener("click", function() { // A chaque tour de boucle, on effectue un evenement au click sur un boutton
    var activer = document.getElementsByClassName("active"); // On selectionne la classe active

      activer[0].className = activer[0].className.replace(" active", ""); // La classe active devient "none" au clic d'un nouveau boutton
    
    this.className += " active";
  })
}



var slider = document.getElementById("myRange");
var output = document.getElementById("value");

output.innerHTML = slider.value + "€";
slider.oninput = function() { // L'événement oninput se produit lorsqu'un élément reçoit une entrée d'utilisateur
  output.innerHTML = this.value + "€"; // le span reçoit alors la valeur actuelle du slider
}

slider.addEventListener("mousemove", function(){
  var x = ((slider.value - slider.min) / (slider.max - slider.min) * 100 ); // ((501-1)/(1500-1)*100) = 33.33%, calcul du %
  var color = 'linear-gradient(90deg,rgb(230,230,26)' + x + '%, rgb(214,214,214)' + x + '%)';
  slider.style.background = color;

  for (j = 0; j < products.length; j++) {
    var cadres = document.getElementsByClassName(products[j].cadre);

    if (slider.value < products[j].price) {
      cadres[0].className = cadres[0].className.replace(products[j].cadre, "display-no");
    }
  }
})
