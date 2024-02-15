import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
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

export default function RootLayout({ children }: { children: ReactNode }) {
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
                  src="/logoimage/logo.webp"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </Link>
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/about">About</Link>
              <Link href="/cart">Cart</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        {/* <footer>Footer</footer> */}
      </body>
    </html>
  );
}
