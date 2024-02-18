import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
// import RemoveFromCartButton from './_RemoveFromCartButton';
// import Image from 'next/image';
import RemoveFromCartButton from './RemoveFromCartButton';
// import { handleRemoveProduct } from './actions';
import styles from './page.module.scss';
import ReduceQuantityButton from './ReduceQuantityButton';

export const metadata = {
  default: 'Cart Page',
  description: 'Your cart page',
};

export default async function CartPage() {
  const products = await getProductsInsecure();

  const productsQuantityCookie = getCookie('cart');
  const productQuantities = !productsQuantityCookie
    ? []
    : parseJson(productsQuantityCookie);

  const productsWithQuantity = products.map((product) => {
    const productWithCookie = productQuantities.find(
      (productObject) => product.id === productObject.id,
    );
    return { ...product, quantity: productWithCookie?.quantity };
  });

  const productsCart = productsWithQuantity.filter(
    (product) => product.quantity,
  );

  const totalPrice = productsCart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  return (
    <main>
      <div className={styles.main}>
        <div>
          <h1>Cart Total:</h1>
        </div>
        <div>
          {productsCart.map((product) => {
            return (
              <div
                key={`product-id-${product.id}`}
                data-test-id={`cart-product-${product.id}`}
              >
                <Link href={`/products/${product.id}`} />
                <div>
                  {/* <img
                  src={`/images/${product.name.toLowerCase()}.webp`}
                  alt={product.name}
                  width={80}
                  height={80}
                /> */}
                  <h3 className={styles.text}>
                    {product.name} ({product.quantity})
                  </h3>
                  <p>Sub total: €{product.quantity * product.price}</p>
                  <RemoveFromCartButton product={product} />
                  <ReduceQuantityButton product={product} />
                </div>
              </div>
            );
          })}
          <div data-test-id="total-price">
            Total Price: €{totalPrice.toFixed(2)}
          </div>
          <Link href="/checkout" type="button">
            Checkout
          </Link>
        </div>
      </div>
    </main>
  );
}
