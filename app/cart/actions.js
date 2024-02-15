'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default async function RemoveProduct(product) {
  const productsQuantityCookie = getCookie('cart');
  const productQuantities = !productsQuantityCookie
    ? []
    : parseJson(productsQuantityCookie);

  const removeProduct = productQuantities.filter((productQuantity) => {
    return product.id !== productQuantity.id;
  });

  await cookies().set('cart', JSON.stringify(removeProduct));
}
