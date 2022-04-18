// Tableau contenant le nom des produits et leur prix
const products = [
  {
    product: "bureau1",
    price: 1000
  },
  {
    product: "bureau2",
    price: 1250
  },
  {
    product: "bureau3",
    price: 1200
  },
  {
    product: "bureau4",
    price: 800
  },
  {
    product: "bureau5",
    price: 700
  },
  {
    product: "bureau6",
    price: 1400
  },
  {
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

// Boucle permettant d'agir sur le prix de chaque id.
for (let i = 0; i < products.length; i++) { // A chaque tour de boucle, on increment i de 1.
  let product = document.getElementById(products[i].product)  // A chaque incrementation, on obtient l'identifiant de notre tableau par la veleur de i.
  
  let newPromoPrice = getPromoPrice(products[i].price, 10) // On effectue le calcul de la fonction getPromoPrice, avec comme paramètres le prix de chaque bureau, et sa promotion.
  let roundedPrice = roundDecimal(newPromoPrice) // Avec le prix obtenu de la promotion au dessus, on arrondi le chiffre à l'entier le plus proche.
  
  product.innerText = formatPrice(roundedPrice) // innerText permet d'ecrire du code, dans notre cas ce sera a l'id selectionné.
  // Le prix sera interprété avec le resultat du prix arrondi et les points sont remplacés par des virgules. 
  }