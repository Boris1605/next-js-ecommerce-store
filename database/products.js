import 'server-only';

const products = [
  {
    id: 1,
    name: 'test1',
    type: 'test1',
    price: '2.99€',
  },
  {
    id: 2,
    name: 'test2',
    type: 'test2',
    price: '3€',
  },
  {
    id: 3,
    name: 'test3',
    type: 'test3',
    price: '1€',
  },
  {
    id: 4,
    name: 'test4',
    type: 'test4',
    price: '2€',
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
