import { mockGiftBoxes, mockOrders, mockProducts } from '../mocks';
import { pickingList, packingList, findOrderById, formatDate } from '../app/lib/db';


jest.mock('../app/db/orders.json', () => mockOrders);

jest.mock('../app/db/products.json', () => mockProducts);

jest.mock('../app/db/giftBoxes.json', () => mockGiftBoxes);

describe('pickingList', () => {
  it('should return the correct picking list', () => {
    const result = pickingList();
    expect(result).toEqual({
      'Product 1': 1,
      'Product 2': 1
    });
  });
});

describe('packingList', () => {
  it('should return the correct packing list', () => {
    const result = packingList();
    expect(result).toEqual([
      {
        id: '1',
        orderDate: formatDate(new Date()),
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        shippingAddress: '123 Main St',
        total: 100,
        lineItems: {
          'Gift Box 1': [
            { lineItemId: 'giftBox1', id: 'product1', name: 'Product 1', price: 10 },
            { lineItemId: 'giftBox1', id: 'product2', name: 'Product 2', price: 20 }
          ]
        }
      }
    ]);
  });
});

describe('findOrderById', () => {
  it('should return the correct order when found', () => {
    const result = findOrderById('1');
    expect(result).toEqual({
      id: '1',
      orderDate: formatDate(new Date()),
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      shippingAddress: '123 Main St',
      total: 100,
      lineItems: {
        'Gift Box 1': [
          { lineItemId: 'giftBox1', id: 'product1', name: 'Product 1', price: 10 },
          { lineItemId: 'giftBox1', id: 'product2', name: 'Product 2', price: 20 }
        ]
      }
    });
  });

  it('should return undefined when order is not found', () => {
    const result = findOrderById('2');
    expect(result).toBeUndefined();
  });
});