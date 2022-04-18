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
function getPropoPrice(price, percent) {
  return price - (price * percent / 100)
}