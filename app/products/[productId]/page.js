import Image from 'next/image';
import { notFound } from 'next/navigation';
// import Button from '../../../app/Button';
import { getProductInsecure } from '../../../database/products';
import ProductQuantityForm from './ProductQuantityForm';
import styles from './page.module.scss';
// import { parseJson } from '../../../util/json';

export async function generateMetadata(props) {
  const singleProduct = await getProductInsecure(props.params.productId);
  return {
    title: singleProduct?.name,
  };
}

// Defining the ProductPage component
export default async function ProductPage(props) {
  const singleProduct = await getProductInsecure(
    Number(props.params.productId),
  );

  // Checking if the product exists
  if (!singleProduct) {
    notFound();
  }

  // const productQuantities = !productsQuantitiyCookie
  //   ? []
  //   : parseJson(productsQuantityCookie);

  // const quantitiesDisplay = producQuantities.find((product) => {
  //   return product.id === singleProduct.id
  // })

  return (
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
          type="number"
          data-test-id="product-quantity"
          productId={singleProduct.id}
        />
        {/* <Button
          data-test-id="product-add-to-cart"
          productId={singleProduct.id}
          // fixing:
          quantity={quantity}
        /> */}
      </div>
    </div>
  );
}
