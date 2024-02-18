'use client';
import { useRouter } from 'next/navigation';
import { handleRemoveProduct } from './actions';

export default function RemoveFromCartButton({ product }) {
  const router = useRouter();

  const removeProduct = async () => {
    await handleRemoveProduct(product);
    router.refresh();
  };

  return (
    <div>
      <button onClick={removeProduct}>Remove from cart</button>
    </div>
  );
}
