import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import styles from './page.module.scss';
// import { useEffect, useState } from 'react';

export const metadata = {
  title: 'Products page',
  description: 'Our products page',
};

// Defining the ProductsPage component
export default async function ProductsPage() {
  // Fetching products from the database
  const products = await getProductsInsecure();

  return (
    <div className={styles.main}>
      <h1 data-test-id="products-page-title">Products you can buy:</h1>
      {products.map((product) => {
        return (
          // Mapping through each product to render its details
          <div
            key={`products-${product.id}`}
            data-test-id={`product-type-${product.type}`}
          >
            {/* <a data-test-id={`/products${product.id}`}></a> */}
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
  );
}

// export default async function ProductsPage() {
//   try {
//     const products = await getProductsInsecure();

//     if (!Array.isArray(products)) {
//       console.error('Products is not an array:', products);
//       return <div>No products available.</div>;
//     }

//     return (
//       <div>
//         <h1>Products you can buy:</h1>
//         {products.map((product) => (
//           <div key={`products-${product.id}`}>
//             <a data-test-id="product-1">{product.name}</a>
//             <Link href={`/products/${product.id}`}>
//               <div>{product.name}</div>
//               <Image
//                 src={`/images/${product.name.toLowerCase()}.webp`}
//                 width={300}
//                 height={200}
//                 alt={product.name}
//               />
//             </Link>
//           </div>
//         ))}
//       </div>
//     );
//   } catch (error) {
//     console.log('Error in ProductsPage:', error);
//     return <div>Error loading products.</div>;
//   }
// }

// export default function ProductsPage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       const products = await getProductsInsecure();
//       setProducts(products);
//     }
//     fetchProducts();
//   }, []);
//   return (
//     <div>
//       <h1 data-test-id="products-page-title">Products you can buy:</h1>
//       {products.map((product) => (
//         <div key={`product-${product.id}`}>
//           <Link href={`/products/${product.id}`}>
//             <a data-test-id={`product-${product.id}`}>
//               <div>{product.name}</div>
//               <Image
//                 src={`/images/${product.name.toLowerCase()}.webp`}
//                 width={300}
//                 height={200}
//                 alt={product.name}
//                 data-test-id={`product-image-${product.id}`}
//               />
//             </a>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }
