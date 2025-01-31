"use client";

import ListGroup from 'react-bootstrap/ListGroup';
import { findOrderById } from '../../lib/db';
import { usePathname } from 'next/navigation';

function PackingListItem() {
  const pathname = usePathname();
  const orderId = pathname.split('/').pop() as string

  const orderDetailData = findOrderById(orderId)

  if(!orderDetailData) {
    return <div>Order not found</div>
  } else {
    return (
      <ListGroup>
        <ListGroup.Item>Order ID: {orderDetailData.id}</ListGroup.Item>
        <ListGroup.Item>Order Date: {orderDetailData.orderDate}</ListGroup.Item>
        <ListGroup.Item>Order Total: {orderDetailData.total}</ListGroup.Item>
        <ListGroup.Item><strong>Line Items:</strong></ListGroup.Item>
        {Object.entries(orderDetailData.lineItems).map(([lineItemId, lineItems]) => (
          <ListGroup.Item key={lineItemId}>
            <ListGroup>
              <ListGroup.Item><strong>{lineItemId}</strong></ListGroup.Item>
              <ListGroup.Item>
                <ListGroup>
                  {lineItems.map((lineItem, index) => (
                    <ListGroup.Item key={index}>{lineItem.name} {lineItem.price}</ListGroup.Item>
                  ))}
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
  
        ))}
        <ListGroup.Item><strong>Ships To:</strong></ListGroup.Item>
        <ListGroup.Item>
          <ListGroup>
            <ListGroup.Item>Customer Name: {orderDetailData.customerName}</ListGroup.Item>
            <ListGroup.Item>Customer Address: {orderDetailData.shippingAddress}</ListGroup.Item>
            <ListGroup.Item>Customer Email: {orderDetailData.customerEmail}</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    );
  }
}

export default PackingListItem;
