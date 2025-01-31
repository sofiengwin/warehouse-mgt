import Table from 'react-bootstrap/Table';
import { pickingList } from './lib/db';

function PickingList() {
  const pickListData = pickingList()
  return (
    <>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(pickListData).map(([name, quantity], index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{quantity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
}

export default PickingList;