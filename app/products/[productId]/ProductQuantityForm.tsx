'use client';

import { useState } from 'react';
import { createCookie } from './action';



export default function ProductQuantityForm() {
  const [quantity, setQuantity] = useState('');

  return (
    <form>
      <input
        value={quantity}
        onChange={(event) => setQuantity(event.currentTarget.value)}
      />
      <button formAction={async () => await createCookie(quantity)}>
        Add Quantity
      </button>
    </form>
  );
}
