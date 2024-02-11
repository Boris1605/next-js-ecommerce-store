import Image from 'next/image';
import { notFound } from 'next/navigation';
import Button from '../../../app/Button';
import { getProductInsecure } from '../../../database/products';
// import { useReducer } from 'react';

// export async function getServerSideProps({ params }) {
//   const product = await getProductInsecure(params.productId);
//   return {
//     props: {
//       product,
//     },
//   };
// }

export async function generateMetadata(props) {
  const singleProduct = await getProductInsecure(props.params.productId);
  return {
    title: singleProduct?.name,
  };
}

// export default function ProductPage({ singleProduct }) {
//   const [quantity, setQuantity] = useState(1);
//   const router = useRouter();

//   const handleAddToCart = () => {
//     // You may want to utilize the createCookie function here
//   }

//   if (!singleProduct) {
//     notFound();
//   }

//   return (
//     <div>
//       <h1>{singleProduct.name}</h1>
//       <Image src={`/images/${singleProduct.name.toLowerCase()}.webp`} alt={singleProduct.name} width={200} height={200} data-test-id="product-image" />
//       <p data-test-id='product-price'>{singleProduct.price}</p>
//       <input type='number' value={quantity} onChange={(event) => setQuantity(parseInt(event.target.value))} />
//       <Button onClick={handleAddToCart} productId={singleProduct.id} quantity={quantity} />
//     </div>
//   )
// }

// Defining the ProductPage component
export default async function ProductPage(props) {
  const singleProduct = await getProductInsecure(props.params.productId);

  // Checking if the product exists
  if (!singleProduct) {
    notFound();
  }

  return (
    <div>
      <h1>Product: {singleProduct.name}</h1>
      <Image
        src={`/images/${singleProduct.name.toLowerCase()}.webp`}
        alt={singleProduct.name}
        width={200}
        height={200}
        data-test-id="product-image"
      />
      <p data-test-id="product-price">Product Price</p>
      <input type="number" data-test-id="product-quantity" />
      <Button
        data-test-id="product-add-to-cart"
        productId={singleProduct.id}
        quantity={1}
      />
    </div>
  );
}
