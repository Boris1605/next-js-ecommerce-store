import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductInsecure } from '../../../database/products';
import ProductQuantityForm from './ProductQuantityForm';
import styles from './page.module.scss';

type Props = {
  params: {
    productId: number;
  };
};

export async function generateMetadata(props: Props) {
  const singleProduct = await getProductInsecure(props.params.productId);
  return {
    title: singleProduct?.name,
  };
}

// Defining the ProductPage component
export default async function ProductPage(props: Props) {
  const singleProduct = await getProductInsecure(
    Number(props.params.productId),
  );

  // Checking if the product exists
  if (!singleProduct) {
    notFound();
  }

  return (
    <main>
      <div>
        <div className={styles.main}>
          <h1 className={styles.title}>Product: {singleProduct.name}</h1>
          <Image
            src={`/images/${singleProduct.name.toLowerCase()}.webp`}
            alt={singleProduct.name}
            width={200}
            height={200}
            data-test-id="product-image"
          />
          <p data-test-id="product-price">{singleProduct.price}</p>
          <ProductQuantityForm
            data-test-id="product-quantity"
            productId={singleProduct.id}
          />
        </div>
      </div>
    </main>
  );
}
