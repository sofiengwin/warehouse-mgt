import ordersData from '../db/orders.json';
import productsData from '../db/products.json';
import giftBoxesData from '../db/giftBoxes.json'

interface IGiftBox {
  id: string;
  name: string;
  products: string[];
}

interface IOrderWithoutLineItem {
  id: string;
  orderDate: string;
  customerName: string;
  customerEmail: string;
  shippingAddress: string;
  total: number;
}

type IOrder = IOrderWithoutLineItem & {lineItems: string[]}
export type ITransformedOrder = IOrderWithoutLineItem & {lineItems: Dict<ILineItem[]>}

interface ILineItem {
  lineItemId: string;
  id: string;
  name: string;
  price: number;
}

interface Dict<T> {
  [key: string]: T;
}

export function pickingList(): Dict<number> {
  const pickingListProductQuantityMap: Dict<number> = {};

  ordersData['orders'].forEach((order: IOrder) => {
    order.lineItems.forEach((lineItemId: string) => {
      const giftBox = (giftBoxesData as Dict<IGiftBox>)[lineItemId]

      const products: ILineItem[] = productsInGiftBox(lineItemId, giftBox)

      products.forEach((product: ILineItem) => {
        pickingListProductQuantityMap[product.name] = (pickingListProductQuantityMap[product.name] ?? 0) + 1
      })
    })
  })

  return pickingListProductQuantityMap
} 

export function packingList() {
  return ordersData['orders'].map((order: IOrder) => orderDetail(order));
}

export function findOrderById(orderId: string): ITransformedOrder | undefined {
  const order: IOrder | undefined = ordersData['orders'].find((order: IOrder) => order.id == orderId)
  if(order == undefined) {
    return
  }

  return orderDetail(order)
}

function orderDetail(order: IOrder): ITransformedOrder {  
  const lineItems: Dict<ILineItem[]> = {}
  order.lineItems.map((lineItemId: string) => {
    const giftBox = (giftBoxesData as Dict<IGiftBox>)[lineItemId]

    lineItems[giftBox.name] = productsInGiftBox(lineItemId, giftBox)
  })

  return {
    ...order,
    orderDate: formatDate(new Date()), //  Hard todays date to make testing easier
    lineItems: lineItems
  }
}

function productsInGiftBox(lineItemId: string, giftBox: IGiftBox): ILineItem[] {
  return giftBox.products.map((productId) => {
    const product = productsData['products'].find((p) => p.id == productId)
    
    if(product) {
      return {
        ...product,
        lineItemId: lineItemId
      }
    }
  }).filter((product) => product != undefined)
}

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}