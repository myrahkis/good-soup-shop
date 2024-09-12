import { useDispatch } from "react-redux";
import { getRandomInt } from "../../utils/helpers";
import { addItem } from "../cart/cartSlice";

/* eslint-disable react/prop-types */
function MenuItem({ soup }) {
  const { strMeal: soupName, strArea: country, strMealThumb: picture } = soup;
  const unitPrice = getRandomInt(10, 40);
  const dispatch = useDispatch();

  function addToCartHandle() {
    const newItem = {
      id: soup.idMeal,
      name: soupName,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex min-w-60 max-w-60 flex-col text-base text-dark-text-color">
      <img
        src={picture}
        alt={`${soup.strMeal} pic`}
        className="mb-3 h-[14rem] w-[14rem] self-center rounded-2xl shadow-xl duration-100 hover:translate-y-0.5"
      />
      <div>
        <h4 className="font-semibold uppercase">{soupName}</h4>
        <p>Cuisine: {country}</p>
      </div>
      <div className="mt-2 flex w-full items-center justify-between">
        <p>${unitPrice}</p>
        <button
          onClick={addToCartHandle}
          className="rounded-lg bg-main-color px-3 py-1 text-light-text-color hover:bg-secondary-color hover:text-dark-text-color"
        >
          ADD
        </button>
      </div>
    </li>
  );
}

export default MenuItem;
