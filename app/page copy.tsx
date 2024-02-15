import Image from 'next/image';
// import Button from './Button';
// import styles from './page.module.scss';
// import imageName from '../public/images/imageName.jpg'

export default function Home() {
  return (
    <div>
      <Image src="/logoimage/logo.webp" alt="Logo" width={50} height={50} />
      <h1>SMART GADGETS</h1>
    </div>
  );
}
