'use client';
import { useRouter } from 'next/navigation';
import RemoveProduct from './actions';

export default function RemoveFromCartButton({ product }) {
  const router = useRouter();

  const handleRemoveProduct = async () => {
    await RemoveProduct(product);
    router.refresh();
  };

  return (
    <div>
      <button onClick={handleRemoveProduct}>Remove from cart</button>
    </div>
  );
}
