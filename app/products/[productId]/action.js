'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateCookie(productId, quantity) {
  const productsQuantityCookie = getCookie('productQuantitys');

  const productQuantitys = !productsQuantityCookie
    ? []
    : parseJson(productsQuantityCookie);

  const productToAdd = productQuantitys.find((productQuantity) => {
    return productQuantity.id === productId;
  });

  if (!productToAdd) {
    productQuantitys.push({ id: productId, quantity: quantity });
  } else {
    productToAdd.quantity = quantity;
  }
  await cookies().set('productQuantitys', JSON.stringify(productQuantitys));
}
