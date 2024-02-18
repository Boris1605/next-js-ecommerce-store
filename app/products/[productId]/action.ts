'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export type Product = {
  id: number;
  quantity: number;
};

// Function to create/update a cookie for product quantities
export async function createCookie(productId: number, quantity: number) {
  // Retrieving the existing product quantities cookie
  const productsQuantityCookie = getCookie('cart');

  // Parsing the product quantities cookie as JSON, or initializing an empty array if the cookie doesn't exist
  const productQuantities = !productsQuantityCookie
    ? []
    : parseJson(productsQuantityCookie);

  const existingProduct = productQuantities.find((product: Product) => {
    return product.id === productId;
  });

  if (!existingProduct) {
    productQuantities.push({ id: productId, quantity: quantity });
  } else {
    // existingProduct.quantity = quantity;
    existingProduct.quantity = existingProduct.quantity + quantity;
  }

  // Setting the updated product quantities as a cookie
  await cookies().set('cart', JSON.stringify(productQuantities));
}
