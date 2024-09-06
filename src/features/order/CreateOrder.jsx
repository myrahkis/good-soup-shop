import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

const isValidPhone = (str) =>
  /^\+?\d{1,7}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
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
    <div>
      <h1>Ready to order? Choose!</h1>
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>
        <div>
          <label>Phone number</label>
          <input type="tel" name="phone" required />
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>
        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>
        <div>
          <input type="checkbox" name="priority" id="priority" />
          <label htmlFor="priority">What to make this order a priority?</label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={isSubmitting}>
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
