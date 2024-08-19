import { Link } from "react-router-dom";

function CartOverview() {
    return (
      <div>
        <p>
          <span>N soups</span>
          <span>$N.N</span>
        </p>
        <Link to='/cart'>Open cart &rarr;</Link>
      </div>
    );
  }
  
  export default CartOverview;