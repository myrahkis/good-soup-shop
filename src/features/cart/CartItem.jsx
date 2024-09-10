/* eslint-disable react/prop-types */
function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;
  return (
    <li className="border-b">
      <h4>{name}</h4>
      <p>Quantity: {quantity}</p>
      <p>Price: {totalPrice}</p>
    </li>
  );
}

export default CartItem;
