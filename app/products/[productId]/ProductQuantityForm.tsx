'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createCookie } from './action';

type Props = {
  productId: number;
  // quantity: number;
};
// Component for a form to input product quantity
export default function ProductQuantityForm(props: Props) {
  // State variable to manage the quantity input
  const [amount, setAmount] = useState(1);
  const router = useRouter();

  return (
    // Form for inputting product quantity
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await createCookie(props.productId, Number(amount));
          router.refresh();
        }}
      >
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(parseInt(event.currentTarget.value))}
          min="1"
          data-test-id="product-quantity"
        />
        <button
          onSubmit={(e) => {
            e.preventDefault();
          }}
          // onClick={async () => {
          //   await createCookie(props.productId, amount);
          //   router.refresh();
          // }}

          // formAction={async () => {
          //   let updatedAmount = amount;
          //   if (props.quantity !== undefined) {
          //     updatedAmount += props.quantity;
          //     await createCookie(props.productId, updatedAmount);
          //   }
          // }}
          // type="submit"
          data-test-id="product-add-to-cart"
        >
          Add to cart
        </button>
      </form>
    </div>
  );
}
