import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.scss';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home | Store',
    template: '%s | Store',
  },
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/products">Products</Link>
              {/* <Link href="/cart">Cart</Link> */}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        {/* <footer>Footer</footer> */}
      </body>
    </html>
  );
}