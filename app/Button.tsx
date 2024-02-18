'use client';

import { useRouter } from 'next/navigation';
import styles from './Button.module.scss';
import { createCookie } from './products/[productId]/action';
// import { useState } from 'react';

// Defining the Props type for the Button component
type Props = {
  // 'data-test-id': string;
  productId: number;
  quantity: number;
};

// Defining the Button component with Props
export default function Button(props: Props) {
  const router = useRouter();

  return (
    // Button component with onClick event
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
