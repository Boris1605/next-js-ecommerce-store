'use client';
import { useRouter } from 'next/navigation';
import { reduceQuantity } from './actions';

export default function ReduceQuantityButton({ product }) {
  const router = useRouter();

  const reduceProduct = async () => {
    await reduceQuantity(product);
    router.refresh();
  };

  return (
    <div>
      <button onClick={reduceProduct}>-</button>
    </div>
  );
}
