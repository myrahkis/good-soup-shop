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
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="px-14 py-6">
      <Link to="/menu" className="text-base text-emphasis-color">
        &larr; Back to manu
      </Link>
      <div className="p-10">
        <h1 className="mt-7">CART</h1>
        <ul className="flex flex-col gap-3 p-5">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
        <div>
          <button>Order soups</button>
          <button>Clear cart</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
