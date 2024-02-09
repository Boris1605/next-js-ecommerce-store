'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createCookie(productId, quantity) {
  const productsQuantityCookie = getCookie('productQuantities');

  const productQuantities = !productsQuantityCookie
    ? []
    : parseJson(productsQuantityCookie);

  // const productToAdd = productQuantities.find((productQuantity) => {
  //   return productQuantity.id === productId;
  // });

  // Testing:
  const existingProductId = productQuantities.findIndex(
    (productQuantity) => productQuantity.id === productId,
  );

  if (existingProductId !== -1) {
    productQuantities[existingProductId].quantity += quantity;
  } else {
    productQuantities.push({ id: productId, quantity });
  }

  // if (!productToAdd) {
  //   productQuantities.push({ id: productId, quantity: quantity });
  // } else {
  //   productToAdd.quantity = quantity;
  // }
  await cookies().set('productQuantities', JSON.stringify(productQuantities));
}
