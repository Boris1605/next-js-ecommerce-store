import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <div className={styles.main}>
        <h1>Welcome to our Smart gadgets store</h1>
        <p>
          Welcome to your one-stop destination for cutting-edge smart gadgets!
          Explore a world of innovation and convenience right at your
          fingertips. From sleek smartwatches to intelligent home assistants,
          we've curated the latest in technology to enhance every aspect of your
          life. Discover the perfect balance of style and functionality with our
          diverse range of products. Whether you're looking to streamline your
          daily routine or stay connected on the go, our selection caters to all
          your needs. Browse through our collection and experience the future
          today. With secure transactions and fast shipping, your satisfaction
          is our top priority. Elevate your lifestyle with the power of smart
          gadgets – shop now and embrace the possibilities!
        </p>
      </div>
    </main>
  );
}
