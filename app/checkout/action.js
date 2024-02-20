'use server';

import { cookies } from 'next/headers';

export async function removeCookie() {
  // const newOrder = [];
  // await cookies().set('cart', JSON.stringify(newOrder));
  await cookies().set('cart', '');
}
