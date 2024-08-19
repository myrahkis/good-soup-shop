import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <Link to='/'>GoodSoup</Link>
            <p>|Username|</p>
        </header>
    )
}

export default Header;