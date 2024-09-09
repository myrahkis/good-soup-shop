import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

const isValidPhone = (str) =>
  /^\+?\d{1,7}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

function CreateOrder() {
  const navigation = useNavigate();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();

  const cart = fakeCart;

  return (
    <div className="mt-9 flex flex-col items-center text-dark-text-color">
      <h1 className="mb-6 text-xl font-semibold text-emphasis-color">
        Ready to order? Choose!
      </h1>
      <Form method="POST" className="flex w-fit flex-col items-start gap-3">
        <div className="flex gap-2">
          <label>First Name</label>
          <input
            className="bg-light-bg-color rounded-lg border border-main-color"
            type="text"
            name="customer"
            required
          />
        </div>
        <div className="flex gap-2">
          <label>Phone number</label>
          <input
            className="bg-light-bg-color rounded-lg border border-main-color"
            type="tel"
            name="phone"
            required
          />
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>
        <div className="flex gap-2">
          <label>Address</label>
          <div>
            <input
              className="bg-light-bg-color rounded-lg border border-main-color"
              type="text"
              name="address"
              required
            />
          </div>
        </div>
        <div className="flex gap-2">
          <input
            className="bg-light-bg-color h-4 w-4 appearance-none rounded-lg border border-main-color text-emphasis-color checked:bg-main-color"
            type="checkbox"
            name="priority"
            id="priority"
          />
          <label htmlFor="priority">What to make this order a priority?</label>
        </div>
        <div className="flex self-center">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitting}
            className="rounded-lg border border-main-color bg-main-color px-2 py-1 uppercase text-light-text-color hover:border-emphasis-color hover:bg-emphasis-color"
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
