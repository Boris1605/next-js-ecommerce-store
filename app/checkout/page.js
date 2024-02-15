export default function CheckoutPage() {
  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <label>
          First name
          <input placeholder="John" />
        </label>
        <label>
          Last name
          <input placeholder="Doe" />
        </label>
        <label>
          Email
          <input placeholder="johndoe@gmail.com" />
        </label>
        <label>
          Address
          <input placeholder="Street 123" />
        </label>
        <label>
          Zip code
          <input placeholder="1234" />
        </label>
        <label>
          City
          <input placeholder="Vienna" />
        </label>
        <label>
          Credit card
          <input placeholder="1246-1234-5678-9055" />
        </label>
      </div>
    </div>
  );
}
