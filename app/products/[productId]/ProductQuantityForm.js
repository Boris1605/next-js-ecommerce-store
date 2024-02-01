'use client';

import { useState } from 'react';
import { createOrUpdateCookie } from './action';

export default function ProductQuantityForm(props) {
  const [quantity, setQuantity] = useState('');
  return (
    <form>
      <input
        value={quantity}
        onChange={(event) => setQuantity(event.currentTarget.value)}
      />
      <button
        formAction={async () =>
          await createOrUpdateCookie(props.productId, quantity)
        }
      >
        Add Quantity
      </button>
    </form>
  );
}
