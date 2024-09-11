import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "./OrderItem";

function Order() {
  const order = useLoaderData();
  const { priority, phone, customer, cart, address } = order.data;
  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const PRIORITY_PRICE = 29.99;
  return (
    <div className="px-28 py-14 text-dark-text-color">
      <div className="mb-9 flex justify-between">
        <h2 className="font-semibold">Order #{order.id} Status</h2>
        <div className="space-x-5">
          {priority && (
            <span className="rounded-lg bg-main-color px-2 py-1 text-light-text-color">
              Priority
            </span>
          )}
          <span className="rounded-lg bg-emphasis-color px-2 py-1 text-light-text-color">
            {"status"} order
          </span>
        </div>
      </div>
      <div className="bg-dark-bg-color mb-9 space-y-2 p-6 text-xl">
        <p>Estimated delivery time</p>
      </div>
      <ul className="mb-9 divide-y divide-dashed divide-emphasis-color border-b border-t border-dashed border-emphasis-color mx-8">
        {cart.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="bg-dark-bg-color space-y-2 p-6 text-xl">
        <p>Price: ${totalPrice}</p>
        <p>Price for priority: ${PRIORITY_PRICE}</p>
        <p className="font-medium">
          To pay on delivery: ${PRIORITY_PRICE + totalPrice}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);

  return order;
}

export default Order;
