import Table from 'react-bootstrap/Table';
import { packingList } from '../lib/db';
import Link from 'next/link';

function PackingList() {
    const orderListData = packingList()
  return (
    <>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Order Date</th>
          <th>Order ID</th>
          <th>Customer Name</th>
        </tr>
      </thead>
      <tbody>
        {orderListData.map((order, index) => (
          <tr key={index}>
            <td>{order.orderDate}</td>
            <td><Link href={`/orders/${order.id}`}>{order.id}</Link></td>
            <td>{order.customerName}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
}

export default PackingList;