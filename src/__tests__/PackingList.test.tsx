import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { mockGiftBoxes, mockOrders, mockProducts } from '../mocks';
import Page from '../app/orders/page'

jest.mock('../app/db/orders.json', () => mockOrders);

jest.mock('../app/db/products.json', () => mockProducts);

jest.mock('../app/db/giftBoxes.json', () => mockGiftBoxes);
 
describe('PackingList', () => {
  it('renders contents of page correctly', () => {
    render(<Page />)
    
    expect(screen.getByTestId('orderId')).toHaveTextContent('1')
    expect(screen.getByTestId('product1')).toHaveTextContent('Product 1')
    expect(screen.getByTestId('product2')).toHaveTextContent('Product 2')
    expect(screen.getByTestId('customerName')).toHaveTextContent('John Doe')
    expect(screen.getByTestId('shippingAddress')).toHaveTextContent('123 Main St')

  })
})