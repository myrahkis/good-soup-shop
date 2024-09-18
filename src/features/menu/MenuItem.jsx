import { useDispatch, useSelector } from "react-redux";
import { getRandomInt } from "../../utils/helpers";
import {
  addItem,
  getCurrentQuantity,
  getTotalItemPrice,
} from "../cart/cartSlice";
import DeleteBtn from "../cart/DeleteBtn";
import UpdateItem from "../cart/UpdateItem";

/* eslint-disable react/prop-types */
function MenuItem({ soup }) {
  const {
    idMeal: id,
    strMeal: soupName,
    strArea: country,
    strMealThumb: picture,
    totalPrice,
  } = soup;
  const unitPrice = getRandomInt(10, 40);
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantity(id));
  const totalItemPrice = useSelector(getTotalItemPrice(id));
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
    <li className="flex min-w-60 max-w-60 flex-col text-base text-dark-text-color extra-small:min-w-32 extra-small:max-w-32 extra-small:text-sm small:min-w-36 medium:min-w-48 medium:max-w-48 medium:text-base large:min-w-44 large:max-w-44">
      <img
        src={picture}
        alt={`${soup.strMeal} pic`}
        className="mb-3 h-[14rem] w-[14rem] self-center rounded-2xl shadow-xl duration-100 hover:translate-y-0.5 extra-small:h-[7rem] extra-small:w-[7rem] medium:h-[11rem] medium:w-[11rem] large:h-[9rem] large:w-[9rem]"
      />
      <div>
        <h4 className="font-semibold uppercase">{soupName}</h4>
        <p>Cuisine: {country}</p>
      </div>
      <div className="mt-2 flex w-full items-center justify-between">
        {!isInCart ? <p>${unitPrice}</p> : <p>${totalItemPrice}</p>}
        <div className="space-x-2">
          {isInCart && (
            <div className="flex gap-x-2 extra-small:flex-col-reverse extra-small:gap-y-1">
              <UpdateItem id={id} quantity={currentQuantity} />
              <DeleteBtn id={id} />
            </div>
          )}
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
