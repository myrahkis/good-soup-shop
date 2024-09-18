/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { increaseItemQuantity, reduceItemQuantity } from "./cartSlice";

function UpdateItem({ id, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex space-x-2 items-center extra-small:text-sm">
      <button
        onClick={() => dispatch(reduceItemQuantity(id))}
        className="rounded-lg bg-secondary-color px-2 text-light-text-color"
      >
        -
      </button>
      <p className="text-base">{quantity}</p>
      <button
        onClick={() => dispatch(increaseItemQuantity(id))}
        className="rounded-lg bg-secondary-color px-2 text-light-text-color"
      >
        +
      </button>
    </div>
  );
}

export default UpdateItem;