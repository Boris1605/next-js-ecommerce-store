import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  type: string;
  price: number;
  currency: string;
};

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

export async function down(sql: Sql) {
  await sql` DROP TABLE products `;
}
