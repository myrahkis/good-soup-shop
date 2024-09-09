import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  // console.log(menu);

  return (
    <ul className="flex justify-evenly gap-9 py-12 px-5 flex-wrap">
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
