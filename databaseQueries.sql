CREATE TABLE products (
  id integer PRIMARY key generated always AS identity,
  name varchar(50) NOT NULL,
  type varchar(50) NOT NULL,
  price numeric(3, 2) NOT NULL,
  currency varchar(3) NOT NULL
);

INSERT INTO
  products (name, type, price, currency)
VALUES
  (
    'Magsafe Powerbank',
    'Battery',
    '9.99',
    'EUR'
  ),
  (
    'Smart Ring',
    'Ring',
    '4.99',
    'EUR'
  ),
  (
    'Smart Thermostat',
    'Thermostat',
    '1.99',
    'EUR'
  ),
  (
    'Lamp with Speaker',
    'Lamp',
    '7.99',
    'EUR'
  );

SELECT
  *
FROM
  products;

CREATE DATABASE ecommerce_migration;

CREATE USER ecommerce_migration
WITH
  encrypted password 'ecommerce_migration';

GRANT ALL privileges ON database ecommerce_migration TO ecommerce_migration;

-- \connect ecommerce_migration
CREATE SCHEMA ecommerce_migration AUTHORIZATION ecommerce_migration;
