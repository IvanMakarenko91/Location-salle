// Tableau contenant le nom des produits et leur prix
const products = [
  {
    product:"bureau1",
    price: 1250
  },
  {
    product:"bureau2",
    price: 1250
  },
  {
    product:"bureau3",
    price: 1250
  },
  {
    product:"bureau4",
    price: 1250
  },
  {
    product:"bureau5",
    price: 1250
  },
  {
    product:"bureau6",
    price: 1250
  }
]

// Fonction retournant le prix par une reduction
function getPromoPrice(price, percent) {
  return price - (price * percent / 100)
}

// Fonction donnant l'arrondi d'un nombre
function roundDecimal(number) {
  const tmp = Math.pow(10,2) // Math.pow retourne l'exposant du chiffre de gauche par celui de droite, ici ce sera 10 ** 10 = 100
  return Math.round(number * tmp) / tmp // Math.round arrondi le chiffre a l'entier le plus proche.
}

// Fonction remplaçant une chaine de caractère par un autre modèle.
function formatPrice(price) {
  return price.toString().replace(".",",") + " €"
}