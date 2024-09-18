/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function DeleteBtn({ id }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(deleteItem(id))}
      className="rounded-lg bg-emphasis-color px-2 py-1 text-base uppercase text-light-text-color hover:scale-[0.93] hover:duration-150 extra-small:text-xs"
    >
      Delete
    </button>
  );
}

export default DeleteBtn;
