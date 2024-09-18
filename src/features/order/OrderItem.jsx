/* eslint-disable react/prop-types */
function OrderItem({ item }) {
  const { name, quantity, totalPrice } = item;
  console.log(item);
  return (
    <li className="py-2 text-lg flex items-center justify-between extra-small:text-base medium:text-lg">
      <p>
        <span>{quantity}&times;</span> {name}
      </p>
      <p>${totalPrice}</p>
    </li>
  );
}

export default OrderItem;
