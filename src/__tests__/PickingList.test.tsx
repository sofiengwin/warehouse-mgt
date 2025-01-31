import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { mockGiftBoxes, mockOrders, mockProducts } from '../mocks';
import Page from '../app/page'


jest.mock('../app/db/orders.json', () => mockOrders);

jest.mock('../app/db/products.json', () => mockProducts);

jest.mock('../app/db/giftBoxes.json', () => mockGiftBoxes);
 
describe('PickingList', () => {
  it('renders contents of page correctly', () => {
    render(<Page />)
    
    //  Product 1
    expect(screen.getAllByTestId('name')[0]).toHaveTextContent('Product 1')
    expect(screen.getAllByTestId('quantity')[0]).toHaveTextContent('1')

    //  Product 2
    expect(screen.getAllByTestId('name')[1]).toHaveTextContent('Product 2')
    expect(screen.getAllByTestId('quantity')[1]).toHaveTextContent('1')
  })
})