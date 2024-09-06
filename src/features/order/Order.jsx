import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";

function Order() {
  const order = useLoaderData();
  console.log(order);
    return (
      <div>
        <h1>Order ID: {order.name}</h1>
      </div>
    );
  }

  export async function loader({params}) {
    const order = await getOrder(params.orderId);

    return order;
  }
  
  export default Order;