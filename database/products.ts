import { cache } from 'react';
import { Product } from '../migrations/00000-createTableProducts';
import { sql } from './connect';

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

// Function to get products from the database (insecure version)
export const getProductsInsecure = cache(async () => {
  // Executing SQL query to select all products from the database
  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      products
  `;

  return products; // Returning the list of products
});

// export const createProductInsecure = cache(
//   async (newProduct: Omit<Product, 'id'>) => {
//     const [product] = await sql<Product[]>`
//        INSERT INTO
//         products (
//           name,
//           type,
//           price,
//           currency
//         )
//       VALUES
//         (
//           ${newProduct.name} ${newProduct.type} ${newProduct.price} ${newProduct.currency}
//         )
//       RETURNING
//         products.*
//     `;
//     return product;
//   },
// );

// Function to get a single product from the database by its ID (insecure version)
export const getProductInsecure = cache(async (id: number) => {
  // Executing SQL query to select a single product by its ID from the database
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;

  return product; // Returning the selected product
});

// Function to update a product in the database (insecure version)
export const updateProductInsecure = cache(async (updatedProduct: Product) => {
  // Executing SQL query to update a product in the database
  const [product] = await sql<Product[]>`
    UPDATE products
    SET
      name = ${updatedProduct.name},
      type = ${updatedProduct.type},
      price = ${updatedProduct.price},
      currency = ${updatedProduct.currency}
    WHERE
      id = ${updatedProduct.id}
    RETURNING
      products.*
  `;

  return product; // Returning the updated product
});

// Function to delete a product from the database (insecure version)
export const deleteProductInsecure = cache(async (id: number) => {
  // Executing SQL query to delete a product from the database
  const [product] = await sql<Product[]>`
    DELETE FROM products
    WHERE
      id = ${id}
    RETURNING
      products.*
  `;

  return product; // Returning the deleted product
});
