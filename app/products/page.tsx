import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import { Product } from '../../migrations/00000-createTableProducts';
import styles from './page.module.scss';

export const metadata = {
  title: 'Products page',
  description: 'Our products page',
};

// Defining the ProductsPage component
export default async function ProductsPage() {
  // Fetching products from the database
  const products = await getProductsInsecure();

  return (
    <main>
      <div>
        <h1 data-test-id="products-page-title">Products you can buy:</h1>
        <div className={styles.gridOfProducts}>
          {products.map((product: Product) => {
            return (
              // Mapping through each product to render its details
              <div
                className={styles.singleProduct}
                key={`products-${product.id}`}
                data-test-id={`product-type-${product.type}`}
              >
                <Link href={`/products/${product.id}`}>
                  <div>{product.name}</div>
                  <Image
                    src={`/images/${product.name.toLowerCase()}.webp`}
                    width={200}
                    height={200}
                    alt={product.name}
                    data-test-id={`product-image-${product.id}`}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
