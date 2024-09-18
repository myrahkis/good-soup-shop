/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { increaseItemQuantity, reduceItemQuantity } from "./cartSlice";

function UpdateItem({ id, quantity, soup }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center space-x-2 extra-small:text-sm medium:text-base">
      <button
        onClick={() => {
          dispatch(reduceItemQuantity(id));
          console.log(soup);
        }}
        className="rounded-lg bg-secondary-color px-2 text-light-text-color"
      >
        -
      </button>
      <p className="text-base extra-small:text-xs">{quantity}</p>
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
