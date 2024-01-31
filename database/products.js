import 'server-only';

const products = [
  {
    id: 1,
    name: 'test',
    type: 'test',
    price: '2.99€',
  },
  {
    id: 2,
    name: 'test',
    type: 'test',
    price: '3€',
  },
  {
    id: 3,
    name: 'test',
    type: 'test',
    price: '1€',
  },
  {
    id: 4,
    name: 'test',
    type: 'test',
    price: '2€',
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
