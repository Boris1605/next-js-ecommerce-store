CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(50) NOT NULL,
  type varchar(50) NOT NULL,
  price numeric(3, 2) NOT NULL,
  currency varchar(3) NOT NULL
);

INSERT INTO products
  (name, type, price, currency)
VALUES
  ('Magsafe Powerbank', 'Battery', '9.99', 'EUR');
  ('Smart Ring', 'Ring', '4.99', 'EUR');
  ('Smart Thermostat', 'Thermostat', '1.99', 'EUR');
  ('Lamp with Speaker', 'Lamp', '7.99', 'EUR');

  SELECT * FROM products;

CREATE DATABASE ecommerce;
CREATE USER ecommerce WITH ENCRYPTED PASSWORD 'ecommerce';
GRANT ALL PRIVILEGES ON DATABASE ecommerce TO ecommerce;
\connect ecommerce;
CREATE SCHEMA ecommerce AUTHORIZATION ecommerce;
