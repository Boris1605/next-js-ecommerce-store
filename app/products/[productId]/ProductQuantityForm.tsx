'use client';

import { useState } from 'react';
import { createCookie } from './action';

// Component for a form to input product quantity
export default function ProductQuantityForm() {
  // State variable to manage the quantity input
  const [quantity, setQuantity] = useState(1);

  return (
    // Form for inputting product quantity
    <form>
      <input
        type="number"
        value={quantity}
        onChange={(event) => setQuantity(parseInt(event.currentTarget.value))}
        min="1"
        data-test-id="product-quantity"
      />
      <button
        formAction={async () => await createCookie(quantity)}
        data-test-id="product-add-cart"
      >
        Add Quantity
      </button>
    </form>
  );
}
