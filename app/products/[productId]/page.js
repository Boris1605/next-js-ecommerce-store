import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../../database/products';
import Button from '../../../app/Button';

export function generateMetadata(props) {
  const singleProduct = getProduct(Number(props.params.productId));
  return {
    title: singleProduct?.name,
  };
}

export default function ProductPage(props) {
  const singleProduct = getProduct(Number(props.params.productId));

  if (!singleProduct) {
    notFound();
  }

  return (
    <div>
      <h1>Product: {singleProduct.name}</h1>
      <Image
        src={`/images/${singleProduct.name.toLowerCase()}.jpg`}
        alt={singleProduct.name}
        width={300}
        height={200}
        data-test-id="product-image"
      />
      <p data-test-id="product-price">Product Price</p>
      <input data-test-id="product-quantity" />
      <Button data-test-id="product-add-to-cart" />
    </div>
  );
}
