import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible();

  await page.getByRole('link', { name: 'Products' }).click();
  await page.waitForURL('/products');
  await expect(page.getByText('Products you can buy:')).toBeVisible();

  const products = [
    {
      id: 1,
      name: 'Magsafe Powerbank',
      type: 'Battery',
      price: 9.99,
      currency: 'EUR',
    },
    { id: 2, name: 'Smart Ring', type: 'Ring', price: 4.99, currency: 'EUR' },
    {
      id: 3,
      name: 'Smart Thermostat',
      type: 'Thermostat',
      price: 1.99,
      currency: 'EUR',
    },
    {
      id: 4,
      name: 'Lamp with Speaker',
      type: 'Lamp',
      price: 7.99,
      currency: 'EUR',
    },
  ];

  for (const product of products) {
    await expect(page.getByTestId(`product-type-${product.type}`)).toHaveText(
      product.name,
    );
    await expect(page.getByRole('img', { name: product.name })).toBeVisible();
    await expect(page.getByRole('link', { name: product.name })).toBeVisible();
  }
});
