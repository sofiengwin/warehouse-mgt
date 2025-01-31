export const mockOrders = {
  orders: [
    {
      id: '1',
      orderDate: '2021-01-01',
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      shippingAddress: '123 Main St',
      total: 100,
      lineItems: ['giftBox1']
    }
  ]
}

export const mockProducts = {
  products: [
    { id: 'product1', name: 'Product 1', price: 10 },
    { id: 'product2', name: 'Product 2', price: 20 }
  ]
}

export const mockGiftBoxes = {
  giftBox1: {
    id: 'giftBox1',
    name: 'Gift Box 1',
    products: ['product1', 'product2']
  }
}