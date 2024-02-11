import { Sql } from 'postgres';

// Array containing product data to be inserted
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

export async function up(sql: Sql) {
  // Iterating through each product and inserting it into the products
  for (const product of products) {
    await sql`
      INSERT INTO
        products (name, type, price, currency)
      VALUES
        (
          ${product.name},
          ${product.type},
          ${product.price},
          ${product.currency}
        )
    `;
  }
}

export async function down(sql: Sql) {
  // Iterating through each product and deleting it from the products table
  for (const product of products) {
    await sql`
      DELETE FROM products
      WHERE
        id = ${product.id}
    `;
  }
}
