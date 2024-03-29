import CheckoutInfo from './CheckoutInfo';

export const metadata = {
  title: 'Checkout page',
  description: 'Checkout page and payment info',
};

export default function CheckoutPage() {
  return (
    <main>
      <div>
        <h1>Checkout page</h1>
        <div>
          <CheckoutInfo />
        </div>
      </div>
    </main>
  );
}
