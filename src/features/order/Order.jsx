import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";

function Order() {
  const order = useLoaderData();
  const { priority, phone, customer, cart, address } = order.data;
  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const PRIORITY_PRICE = 29.99;
  return (
    <div>
      <h2>Customer: {customer}</h2>
      <div>
        <h2>Status</h2>
        <div>
          {priority && <span>Priority</span>}
          <span>{"status"} order</span>
        </div>
      </div>
      <p>Price: ${totalPrice}</p>
      <p>Price for priority: ${PRIORITY_PRICE}</p>
      <p>To pay on delivery: ${PRIORITY_PRICE + totalPrice}</p>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);

  return order;
}

export default Order;
