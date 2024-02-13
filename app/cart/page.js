import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { getProductsInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export const metadata = {
  default: 'Cart Page',
  description: 'Generated by create next app',
};

export default async function CartPage() {
  const products = await getProductsInsecure();

  const productsQuantityCookie = getCookie('productQuantities');

  const productQuantities = !productsQuantityCookie
    ? []
    : parseJson(productsQuantityCookie);

  const productsWithQuantity = products.map((product) => {
    const matchingWithProductFromCookie = productQuantities.find(
      (productObject) => product.id === productObject.id,
    );
    return { ...product, quantity: matchingWithProductFromCookie?.quantity };
  });

  // const handleCheckout = () => {
  //   // Navigate to the checkout page
  //   useRouter.push('/checkout');
  // };

  return (
    <div>
      <h1>Cart Page</h1>
      {productsWithQuantity.map((product) => {
        return (
          <div key={`product-id-${product.id}`}>
            <Link href={`/products/${product.id}`}>
              <h2>
                {product.icon} {product.name}
              </h2>
            </Link>
            <div>{product.quantity}</div>
            <button>Remove From Cart</button>
          </div>
        );
      })}
      {/* <button>Checkout</button> */}
      <button>Checkout</button>
    </div>
  );
}
