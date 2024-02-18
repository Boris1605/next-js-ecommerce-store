// import Image from 'next/image';
// import Button from './Button';
import styles from './page.module.scss';
// import imageName from '../public/images/imageName.jpg'

export default function Home() {
  return (
    <main>
      <div className={styles.main}>
        <h1>Welcome to our Smart gadgets store</h1>
        <p>Here is the right place to find cool gadgets and safe money!</p>
      </div>
    </main>
  );
}
