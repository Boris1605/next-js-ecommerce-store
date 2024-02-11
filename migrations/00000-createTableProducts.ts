import { Sql } from 'postgres';

// Defining the Product type
export type Product = {
  id: number;
  name: string;
  type: string;
  price: number;
  currency: string;
};

// Function to migrate the database table up (creating the products table)
export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY key generated always AS identity,
      name varchar(50),
      type varchar(50),
      price numeric(3, 2),
      currency varchar(3)
    )
  `;
}

// Function to delete the database table (dropping the products table)
export async function down(sql: Sql) {
  await sql` DROP TABLE products `;
}
