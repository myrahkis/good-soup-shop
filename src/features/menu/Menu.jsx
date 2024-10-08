import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  // console.log(menu);
  return (
    <div className="flex justify-center">
      <ul className="grid grid-cols-4 gap-x-11 gap-y-12 px-36 py-12 extra-small:grid-cols-2 extra-small:gap-x-7 extra-small:px-6 extra-small:py-9 small:grid-cols-3 small:px-14 medium:grid-cols-3 medium:gap-x-8 medium:px-16 large:px-10">
        {menu.map((soup) => (
          <MenuItem key={soup.idMeal} soup={soup} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;
