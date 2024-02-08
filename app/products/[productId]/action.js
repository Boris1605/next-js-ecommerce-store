'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createCookie(productId, quantity) {
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
  console.log('ProductQuantitys: ', productQuantitys);
  await cookies().set('productQuantitys', JSON.stringify(productQuantitys));
}
