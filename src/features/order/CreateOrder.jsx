import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";

const isValidPhone = (str) =>
  /^\+?\d{1,7}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const navigation = useNavigate();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const name = useSelector((state) => state.user.userName);

  const cart = useSelector(getCart);

  return (
    <div className="flex h-full flex-col items-center justify-center text-dark-text-color">
      <h1 className="mb-6 text-2xl font-semibold text-emphasis-color extra-small:text-lg medium:text-2xl">
        Ready to order? Choose!
      </h1>
      <Form
        method="POST"
        className="flex w-1/3 flex-col items-start gap-3 extra-small:w-2/3 medium:w-[37.5%]"
      >
        <div className="flex w-full flex-col gap-1 medium:flex-col">
          <label className="text-xl extra-small:text-base small:w-32 medium:w-36 medium:text-xl">
            First Name
          </label>
          <input
            className="input w-full small:w-72 extra-small:w-[17.3rem]"
            type="text"
            name="customer"
            defaultValue={name}
            required
          />
        </div>
        <div className="flex w-full flex-col gap-1 medium:flex-col">
          <label className="text-xl extra-small:text-base small:w-32 medium:w-36 medium:text-xl">
            Phone number
          </label>
          <input
            className="input w-full small:w-72 extra-small:w-[17.3rem]"
            type="tel"
            name="phone"
            required
          />
          {formErrors?.phone && (
            <p className="text-base text-main-color">{formErrors.phone}</p>
          )}
        </div>
        <div className="flex w-full flex-col gap-1 medium:flex-col">
          <label className="text-xl extra-small:text-base small:w-32 medium:w-36 medium:text-xl">
            Address
          </label>
          <div>
            <input
              className="input w-full small:w-72 extra-small:w-[17.3rem]"
              type="text"
              name="address"
              required
            />
          </div>
        </div>
        <div className="flex gap-2">
          <input
            className="mt-1 h-4 w-4 appearance-none rounded-lg border border-main-color bg-light-bg-color checked:bg-main-color"
            type="checkbox"
            name="priority"
            id="priority"
          />
          <label
            htmlFor="priority"
            className="text-xl extra-small:text-base medium:text-xl"
          >
            What to make this order a priority?
          </label>
        </div>
        <div className="flex self-end">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitting}
            className="medium-text-base rounded-lg border border-main-color bg-main-color px-3 py-2 uppercase text-light-text-color hover:border-emphasis-color hover:bg-emphasis-color extra-small:text-sm"
          >
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // console.log(data);

  const order = {
    id: data.id,
    data: {
      ...data,
      cart: JSON.parse(data.cart),
      priority: data.priority === "on",
    },
    name: data.customer,
  };

  const errors = {};

  if (!isValidPhone(order.data.phone))
    errors.phone =
      "Please enter a valid phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  // console.log(order);
  // if ok create nwe order and redirect
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
