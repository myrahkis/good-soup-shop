import { useDispatch, useSelector } from "react-redux";
import { getRandomInt } from "../../utils/helpers";
import { addItem, getCurrentQuantity } from "../cart/cartSlice";
import DeleteBtn from "../cart/DeleteBtn";

/* eslint-disable react/prop-types */
function MenuItem({ soup }) {
  const {
    idMeal: id,
    strMeal: soupName,
    strArea: country,
    strMealThumb: picture,
  } = soup;
  const unitPrice = getRandomInt(10, 40);
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantity(id));
  const isInCart = currentQuantity > 0;

  function addToCartHandle() {
    const newItem = {
      id,
      name: soupName,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex min-w-60 max-w-60 flex-col text-base text-dark-text-color extra-small:min-w-32 extra-small:max-w-32 extra-small:text-sm small:min-w-36 medium:min-w-48 medium:text-base">
      <img
        src={picture}
        alt={`${soup.strMeal} pic`}
        className="mb-3 h-[14rem] w-[14rem] self-center rounded-2xl shadow-xl duration-100 hover:translate-y-0.5 extra-small:h-[7rem] extra-small:w-[7rem] medium:h-[11rem] medium:w-[11rem]"
      />
      <div>
        <h4 className="font-semibold uppercase">{soupName}</h4>
        <p>Cuisine: {country}</p>
      </div>
      <div className="mt-2 flex w-full items-center justify-between">
        <p>${unitPrice}</p>
        <div className="space-x-2">
          {isInCart && <DeleteBtn id={id} />}
          {!isInCart && (
            <button
              onClick={addToCartHandle}
              className="rounded-lg bg-main-color px-3 py-1 text-light-text-color hover:bg-secondary-color hover:text-dark-text-color extra-small:text-xs medium:text-base"
            >
              ADD
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
