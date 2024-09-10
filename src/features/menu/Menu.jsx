import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  // console.log(menu);
  return (
    <ul className="grid grid-cols-4 gap-y-12 gap-x-11 px-20 py-10 mt-[60rem] mb-4">
      {menu.map((soup) => (
        <MenuItem key={soup.idMeal} soup={soup} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;
