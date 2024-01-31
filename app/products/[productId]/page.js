import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../../database/products';

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
      Single Product Page
      <h1>{singleProduct.name}</h1>
      <Image
        src={`/images/${singleProduct.name.toLowerCase()}.jpg`}
        alt={singleProduct.name}
        width={300}
        height={200}
      />
      this is a {singleProduct.name}....{singleProduct.type}
    </div>
  );
}
