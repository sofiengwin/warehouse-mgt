import { packingList } from '../lib/db';;
import PackingListItem from './PackingListItem';

function PackingList() {
    const orderListData = packingList()
  return (
    <>
      {orderListData.map((order, index) => (
        <PackingListItem key={index} order={order} />
      ))}
    </>
  );
}

export default PackingList;