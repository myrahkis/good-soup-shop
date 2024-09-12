/* eslint-disable react/prop-types */
// import { formatCurrency } from "../../utils/helpers";

import { deleteItem } from "./cartSlice";
import DeleteBtn from "./DeleteBtn";
import UpdateItem from "./UpdateItem";

function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;

  return (
    <li className="pt-3 text-xl">
      <h4>
        {quantity}&times; {name}
      </h4>
      <div className="flex justify-between">
        <p>Price: {totalPrice}</p>
        <div className="flex space-x-3">
          <UpdateItem id={id} quantity={quantity} />
          <DeleteBtn id={id} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
