'use client';

import { useRouter } from 'next/navigation';
import styles from './Button.module.scss';
import { createCookie } from './products/[productId]/action';
// import { useState } from 'react';

type Props = {
  productId: number;
  quantity: number;
};

export default function Button(props: Props) {
  const router = useRouter();

  return (
    <button
      className={styles.button}
      onClick={async () => {
        await createCookie(props.productId, props.quantity);
        router.refresh();
      }}
    >
      Add to cart
    </button>
  );
}
