[![codecov](https://codecov.io/gh/sofiengwin/warehouse-mgt/graph/badge.svg?token=NXNS6HTZ3C)](https://codecov.io/gh/sofiengwin/warehouse-mgt)
![test](https://github.com/github/docs/actions/workflows/test.yml/badge.svg)

## Getting Started
### NodeJS version
```
  20.8.1
```

### How to start server

First, run the development server:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

### How to run tests:
```bash
npm run test
```

### Approach
I tried to keep things as simple as possible, while trying to find the most efficient solution that meets all the requirements. I used json file for all the data needed, ideally using a SQL database like postgres would have been perfect because of the data model

```
Order
  orderId
  orderDate
  orderTotal
  shippingAddress
  customerName
  customerEmail
  lineItems
    giftBox

GiftBox
  id
  name
  products: [
    example-product
  ]

Product
  id
  name
  price
```
#### Packing List
```
 PATH: /orders

PackingList
  orderId
  orderDate
  orderTotal
  shippingAddress
  customerName
  customerEmail
  lineItems
    giftBox
      productInGiftBox
```
#### Picking List
```
PATH: /

PickingList:
  productName: quantity
```

### Limitations
- Because of the requirement to use a mock `orders.json` file for orders. I decided to use mock file for the others, instead of using a database like postgres
- Test for all views
- UI could be better
- Include status field to orders


