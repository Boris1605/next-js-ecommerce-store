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
      name varchar(50) NOT NULL,
      type varchar(50) NOT NULL,
      price numeric(3, 2) NOT NULL,
      currency varchar(3) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE products `;
}
