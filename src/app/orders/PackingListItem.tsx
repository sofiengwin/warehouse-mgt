"use client";

import ListGroup from 'react-bootstrap/ListGroup';
import { ITransformedOrder } from '../lib/db';

function PackingListItem({order}: {order: ITransformedOrder }) {
  return (
    <ListGroup style={{marginTop: '20px', marginBottom: '20px'}}>
      <ListGroup.Item data-testid='orderId'>Order ID: {order.id}</ListGroup.Item>
      <ListGroup.Item>Order Date: {order.orderDate}</ListGroup.Item>
      <ListGroup.Item data-testid='lineItems'><strong>Line Items:</strong></ListGroup.Item>
      {Object.entries(order.lineItems).map(([lineItemId, lineItems]) => (
        <ListGroup.Item key={lineItemId}>
          <ListGroup>
            <ListGroup.Item><strong>{lineItemId}</strong></ListGroup.Item>
            <ListGroup.Item>
              <ListGroup>
                {lineItems.map((lineItem, index) => (
                  <ListGroup.Item data-testid={lineItem.id} key={index}>{lineItem.name}</ListGroup.Item>
                ))}
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

      ))}
      <ListGroup.Item><strong>Ships To:</strong></ListGroup.Item>
      <ListGroup.Item>
        <ListGroup>
          <ListGroup.Item data-testid='customerName'>{order.customerName}</ListGroup.Item>
          <ListGroup.Item data-testid='shippingAddress'>{order.shippingAddress}</ListGroup.Item>
        </ListGroup>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default PackingListItem;