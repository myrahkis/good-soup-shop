import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex flex-col items-end bg-emphasis-color px-5 py-3 text-light-text-color">
      <p className="space-x-3 font-semibold">
        <span>N soups</span>
        <span>$N.N</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
