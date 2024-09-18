import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const soupsAdded = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!soupsAdded) return null;

  return (
    <div className="flex justify-between bg-emphasis-color px-5 py-3 text-light-text-color extra-small:text-lg">
      <p className="space-x-3 font-semibold">
        <span>{soupsAdded} soups</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
