'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { removeCookie } from './action';
import styles from './page.module.scss';

export default function CheckoutInfo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expDate, setExpDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const router = useRouter();
  return (
    <form className={styles.info}>
      <label>
        First name
        <input
          data-test-id="checkout-first-name"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        Last name
        <input
          data-test-id="checkout-last-name"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        Email
        <input
          data-test-id="checkout-email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        Address
        <input
          data-test-id="checkout-address"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        City
        <input
          data-test-id="checkout-city"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        Postal code
        <input
          data-test-id="checkout-postal-code"
          placeholder="Postal code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        Country
        <input
          data-test-id="checkout-country"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        Credit card
        <input
          data-test-id="checkout-credit-card"
          placeholder="Credit card"
          value={creditCard}
          onChange={(e) => setCreditCard(e.currentTarget.value)}
          required
        />
        <label>
          Expiration date
          <input
            data-test-id="checkout-expiration-date"
            placeholder="Expiration date"
            value={expDate}
            onChange={(e) => setExpDate(e.currentTarget.value)}
            required
          />
        </label>
        <label>
          Security code
          <input
            data-test-id="checkout-security-code"
            placeholder="Security code"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.currentTarget.value)}
            required
          />
        </label>
      </label>
      <button
        data-test-id="checkout-confirm-order"
        type="button"
        onClick={async () => {
          await removeCookie();
          router.push('/checkout/thankyou');
        }}
      >
        Confirm Order
      </button>
    </form>
  );
}
