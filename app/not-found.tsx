import Link from 'next/link';

export default function RootNotFound() {
  return (
    <div>
      Sorry this Page was not found make sure you visit a Page that exists!
      <Link href="/">Return Home</Link>
    </div>
  );
}
