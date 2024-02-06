import { Sql } from 'postgres';

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
  for (const product of products) {
    await sql`
      DELETE FROM products
      WHERE
        id = ${product.id}
    `;
  }
}
