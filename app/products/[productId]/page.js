import Image from 'next/image';
import { notFound } from 'next/navigation';
import Button from '../../../app/Button';
import { getProductInsecure } from '../../../database/products';

export async function generateMetadata(props) {
  const singleProduct = await getProductInsecure(props.params.productId);
  return {
    title: singleProduct?.name,
  };
}

export default async function ProductPage(props) {
  const singleProduct = await getProductInsecure(props.params.productId);

  if (!singleProduct) {
    notFound();
  }

  return (
    <div>
      <h1>Product: {singleProduct.name}</h1>
      <Image
        src={`/images/${singleProduct.name.toLowerCase()}.webp`}
        alt={singleProduct.name}
        width={200}
        height={200}
        data-test-id="product-image"
      />
      <p data-test-id="product-price">Product Price</p>
      <input type="number" data-test-id="product-quantity" />
      <Button
        data-test-id="product-add-to-cart"
        productId={singleProduct.id}
        quantity={1}
      />
    </div>
  );
}
