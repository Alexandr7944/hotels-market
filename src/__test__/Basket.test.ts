import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderWithRouter from './renderWithRouter';

describe('Basket page test', () => {
  test('Basket page render test positive', () => {
    renderWithRouter('/hotel-market/basket');
    const basket = screen.getByTestId('basket-page');
    expect(basket).toBeInTheDocument();
  });
})