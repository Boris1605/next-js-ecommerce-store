// import 'server-only';

const products = [
  {
    id: 1,
    type: '',
    price: '2.99€',
  },
  {
    id: 2,
    type: '',
    price: '3€',
  },
  {
    id: 3,
    type: '',
    price: '',
  },
  {
    id: 4,
    type: '',
    price: '',
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
