'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function handleRemoveProduct(product) {
  const productsQuantityCookie = getCookie('cart');
  const productQuantities = !productsQuantityCookie
    ? []
    : parseJson(productsQuantityCookie);

  const removeProduct = productQuantities.filter((productQuantity) => {
    return product.id !== productQuantity.id;
  });

  await cookies().set('cart', JSON.stringify(removeProduct));
}

export async function reduceQuantity(product) {
  const productsQuantityCookie = getCookie('cart');
  const productQuantities = !productsQuantityCookie
    ? []
    : parseJson(productsQuantityCookie);

  const minusAmount = productQuantities?.find((productQuantity) => {
    return product.id === productQuantity.id;
  });

  if (minusAmount.quantity >= 1) {
    minusAmount.quantity -= 1;
  } else {
    minusAmount.quantity = 1;
  }

  await cookies().set('cart', JSON.stringify(productQuantities));
}
