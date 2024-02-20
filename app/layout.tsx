import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { getProductsInsecure } from '../database/products';
import { Product } from '../migrations/00000-createTableProducts';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';
import CookieBanner from './CookieBanner';
import './globals.scss';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home | Store',
    template: '%s | Store',
  },
  description: 'Here you can find smart gadgets',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const products = await getProductsInsecure();

  const productsQuantityCookie = getCookie('cart');
  const productQuantities = !productsQuantityCookie
    ? []
    : parseJson(productsQuantityCookie);

  const productsWithQuantity = products.map((product: Product) => {
    const productWithCookie = productQuantities.find(
      (productObject: Product) => product.id === productObject.id,
    );
    // const quantity = productWithCookie?.quantity || 0;
    return { ...product, quantity: productWithCookie?.quantity };
  });

  const productsCart = productsWithQuantity
    .filter((product: Product) => product.quantity)
    .reduce((total: number, product: Product) => total + product.quantity, 0);
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div>
            <CookieBanner />
            <nav className={styles.navbar}>
              <Link href="/">
                <Image
                  className={styles.logo}
                  src="/logo_image/logo.webp"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </Link>
              {/* <Link href="/">Home</Link> */}
              <Link href="/products" data-test-id="products-link">
                Products
              </Link>
              <Link href="/about">About</Link>
              <Link
                href="/cart"
                // data-test-id="cart-count"
                data-test-id="cart-link"
              >
                Cart({productsCart})
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <hr />
          <div>
            <div>
              <p>Address: 803 N. Willow Avenue Brooklyn, NY 11236</p>
              <p>Phone: +1 845-621-5572</p>
              <p>Email: info@smartgadgets.com</p>
            </div>

            <div>
              Copyright © 2024 Smart gadgets store. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
