import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="flex flex-row items-center justify-between bg-main-color px-5 py-3 text-light-text-color shadow-lg extra-small:text-sm">
      <Link to="/" className="tracking-[0.3rem]">
        GoodSoup
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
