import styles from './page.module.scss';


// Metadata for the About page
export const metadata = {
  title: 'About', // Title of the page
  description: 'About our smart gadget store',
};

// Defining the AboutPage component
export default function AboutPage() {
  return (
    <main>
      <div>
        <h1 className={styles.header}>About us</h1>
        <div>
          <p className={styles.text}>
            Welcome to our online store, where innovation meets convenience!
            Discover the latest smart gadgets designed to enhance your life.
            From smartwatches to home automation devices, we've got you covered.
            Join our tech-savvy community and enjoy exceptional customer service
            every step of the way. Shop now and stay ahead in the world of
            technology!
          </p>
        </div>
      </div>
    </main>
  );
}
