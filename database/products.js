import 'server-only';

const products = [
  {
    id: 1,
    name: 'Magsafe Powerbank',
    type: 'Battery',
    price: 9.99,
    currency: 'EUR',
  },
  {
    id: 2,
    name: 'Smart Ring',
    type: 'Ring',
    price: 4.99,
    currency: 'EUR',
  },
  {
    id: 3,
    name: 'Smart Thermostat',
    type: 'Thermostat',
    price: 1.99,
    currency: 'EUR',
  },
  {
    id: 4,
    name: 'Lamp with Speaker',
    type: 'Lamp',
    price: 7.99,
    currency: 'EUR',
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
