import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import ReduceQuantityButton from './ReduceQuantityButton';
import RemoveFromCartButton from './RemoveFromCartButton';
import styles from './page.module.scss';

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
          <h1>In your cart:</h1>
        </div>
        <div>
          {productsCart.map((product) => {
            return (
              <div
                key={`product-id-${Number(product.id)}`}
                data-test-id={`cart-product-${Number(product.id)}`}
              >
                <Link href={`/products/${Number(product.id)}`} />
                <div>
                  {/* <img
                  src={`/images/${product.name.toLowerCase()}.webp`}
                  alt={product.name}
                  width={80}
                  height={80}
                /> */}
                  <div className={styles.text}>
                    Sub Total: €
                    <span
                      data-test-id={`cart-product-quantity-${Number(product.id)}`}
                    >
                      {product.quantity}
                    </span>
                    x {product.name}
                  </div>
                  <p>{product.quantity * product.price}</p>
                  <ReduceQuantityButton product={product} />
                  <RemoveFromCartButton product={product} />
                  <br />
                </div>
              </div>
            );
          })}
          <div>
            Total Price: €
            <span data-test-id="cart-total">{totalPrice.toFixed(2)}</span>
          </div>
          <Link href="/checkout" type="button" data-test-id="cart-checkout">
            Checkout
          </Link>
        </div>
      </div>
    </main>
  );
}
