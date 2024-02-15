import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
// import RemoveFromCartButton from './_RemoveFromCartButton';
// import Image from 'next/image';
import styles from './page.module.scss';

export const metadata = {
  default: 'Cart Page',
  description: 'Your cart page',
};

export default async function CartPage() {
  const products = await getProductsInsecure();

  const productsQuantityCookie = getCookie('productQuantities');
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
    <div>
      <div>
        <h1 className={styles.title}>Cart Total:</h1>
      </div>
      <div>
        {productsCart.map((product) => {
          return (
            <div key={`product-id-${product.id}`}>
              <Link href={`/products/${product.id}`} />
              <div>
                {/* <img
                  src={`/images/${product.name.toLowerCase()}.webp`}
                  alt={product.name}
                  width={80}
                  height={80}
                /> */}
                <h3>{product.name}</h3>
                <button className={styles.removeButton}>
                  Remove from cart
                </button>
              </div>
            </div>
          );
        })}
        <div data-test-id="total-price">Total Price: € {totalPrice}</div>
        <Link href="/checkout" type="button">
          Checkout
        </Link>
      </div>
    </div>
  );
}
