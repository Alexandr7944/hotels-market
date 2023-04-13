import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';

describe('Home page test', () => {
  test('Home page render test positive', () => {
    renderWithRouter();
    const home = screen.getByTestId('home-page');
    expect(home).toBeInTheDocument();
  });

  test('Home page test negative', () => {
    renderWithRouter();
    const home = screen.queryByText(/главна1/i);
    expect(home).toBeNull();
  });

  test('Home page test admin link', async() => {
    renderWithRouter();
    const adminLink = screen.getByTestId('admin-link');
    await userEvent.click(adminLink);
    expect(screen.getByTestId('admin-page')).toBeInTheDocument();
  });

  test('Home page test catalog link', async() => {
    renderWithRouter();
    const catalogLink = screen.getByTestId('catalog-link');
    await userEvent.click(catalogLink);
    expect(screen.getByTestId('catalog-page')).toBeInTheDocument();
  });

  test('Home page test basket link', async() => {
    renderWithRouter();
    const basketLink = screen.getByTestId('basket-link');
    await fireEvent.click(basketLink);
    expect(screen.getByTestId('basket-page')).toBeInTheDocument();
  });
})