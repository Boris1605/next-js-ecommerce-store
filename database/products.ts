import { cache } from 'react';
import { sql } from './connect';
import { Product } from '../migrations/00000-createTableProducts';

// const products = [
//   {
//     id: 1,
//     name: 'Magsafe Powerbank',
//     type: 'Battery',
//     price: 9.99,
//     currency: 'EUR',
//   },
//   {
//     id: 2,
//     name: 'Smart Ring',
//     type: 'Ring',
//     price: 4.99,
//     currency: 'EUR',
//   },
//   {
//     id: 3,
//     name: 'Smart Thermostat',
//     type: 'Thermostat',
//     price: 1.99,
//     currency: 'EUR',
//   },
//   {
//     id: 4,
//     name: 'Lamp with Speaker',
//     type: 'Lamp',
//     price: 7.99,
//     currency: 'EUR',
//   },
// ];

// export const getProductsInsecure = cache(async () => {
//   const [products] = await sql<Product[]>`
//     SELECT
//       *
//     FROM
//       products
//   `;

//   return products;
// });

export const getProductsInsecure = cache(async () => {
  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      products
  `;

  return products;
});

export const getProductInsecure = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;

  return product;
});
