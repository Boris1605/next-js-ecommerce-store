'use client';

import { useRouter } from 'next/navigation';
import styles from './Button.module.scss';
// import { useState } from 'react';

export default function Button() {
  const router = useRouter();
  return (
    <button className={styles.button} onClick={router.refresh()}>
      Add to cart
    </button>
  );
}
