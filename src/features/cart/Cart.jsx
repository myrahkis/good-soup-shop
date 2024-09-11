import { Link } from "react-router-dom";
import CartItem from "../cart/CartItem";

const fakeCart = [
  {
    id: 6,
    name: "Borsch",
    quantity: 1,
    unitPrice: 12,
    totalPrice: 12,
  },
  {
    id: 2,
    name: "Tom Yam",
    quantity: 2,
    unitPrice: 15,
    totalPrice: 30,
  },
  {
    id: 6,
    name: "Borsch",
    quantity: 1,
    unitPrice: 12,
    totalPrice: 12,
  },
  {
    id: 2,
    name: "Tom Yam",
    quantity: 2,
    unitPrice: 15,
    totalPrice: 30,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="flex flex-col px-14 py-6 text-dark-text-color">
      <Link to="/menu" className="text-base text-emphasis-color">
        &larr; Back to manu
      </Link>
      <div className="px-24">
        <h1 className="mt-7">Your cart, UserName</h1>
        <ul className="scrollbar mt-5 flex max-h-96 flex-col gap-3 divide-y divide-dashed divide-emphasis-color overflow-y-auto border-b border-t border-emphasis-color px-5 py-3">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
        <div className="mt-5 flex justify-end space-x-4 text-xl">
          <button className="rounded-lg bg-main-color px-4 py-2 text-light-text-color hover:scale-[0.93] hover:bg-secondary-color hover:text-dark-text-color hover:duration-150">
            Order soups
          </button>
          <button className="rounded-lg border border-secondary-color px-4 py-2 text-main-color transition-all ease-in-out hover:scale-[0.93] hover:border-emphasis-color hover:bg-emphasis-color hover:text-light-text-color hover:duration-150">
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
