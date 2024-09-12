import { Link } from "react-router-dom";

function EmptyCart() {
  return (
<div className="flex flex-col px-14 py-6 text-dark-text-color">
      <Link to="/menu" className="text-base text-emphasis-color">
        &larr; Back to manu
      </Link>
      <div className="px-24">
        <h1 className="mt-7 font-medium">Your cart is empty. Start by addind some soups! c:</h1>

      </div>
    </div>
  );
}

export default EmptyCart;
