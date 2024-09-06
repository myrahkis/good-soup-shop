import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
    return(
        <header>
            <Link to='/'>GoodSoup</Link>
            <SearchOrder />
            <p>|Username|</p>
        </header>
    )
}

export default Header;