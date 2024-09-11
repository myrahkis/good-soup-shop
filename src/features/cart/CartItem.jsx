/* eslint-disable react/prop-types */
// import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;
  return (
    <li className="pt-3 text-xl">
      <h4>
        {quantity}&times; {name}
      </h4>
      <div className="flex justify-between">
        <p>Price: {totalPrice}</p>
        <button className="rounded-lg bg-emphasis-color px-2 py-1 text-lg text-light-text-color hover:scale-[0.93] hover:duration-150">
          Delete
        </button>
      </div>
    </li>
  );
}

export default CartItem;
