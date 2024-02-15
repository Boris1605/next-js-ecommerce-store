'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

// Function to create/update a cookie for product quantities
export async function createCookie(productId, quantity) {
  // Retrieving the existing product quantities cookie
  const productsQuantityCookie = getCookie('cart');

  // Parsing the product quantities cookie as JSON, or initializing an empty array if the cookie doesn't exist
  const productQuantities = !productsQuantityCookie
    ? []
    : parseJson(productsQuantityCookie);

  const productToAdd = productQuantities.find((productQuantity) => {
    return productQuantity.id === productId;
  });

  if (!productToAdd) {
    productQuantities.push({ id: productId, quantity: quantity });
  } else {
    productToAdd.quantity = quantity;
  }

  // Finding the index of the existing product in the product quantities array
  // const existingProductId = productQuantities.findIndex(
  //   (productQuantity) => productQuantity.id === productId,
  // );

  // If the product already exists in the product quantities array, update its quantity
  // if (existingProductId !== -1) {
  //   productQuantities[existingProductId].quantity += quantity;
  // } else {
  //   // If the product doesn't exist in the product quantities array, add it with the specified quantity
  //   productQuantities.push({ id: productId, quantity });
  // }

  // if (!productToAdd) {
  //   productQuantities.push({ id: productId, quantity: quantity });
  // } else {
  //   productToAdd.quantity = quantity;
  // }

  // Setting the updated product quantities as a cookie
  await cookies().set('cart', JSON.stringify(productQuantities));
}
