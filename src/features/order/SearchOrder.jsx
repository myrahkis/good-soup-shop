import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

    function submitHandle(e) {
        e.preventDefault();

        if (!query) return;

        navigate(`/order/${query}`);
        setQuery('');
    }

  return (
    <form onSubmit={submitHandle}>
      <input
        placeholder="Search order ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input text-dark-text-color extra-small:w-40 extra-small:text-sm"
      />
    </form>
  );
}

export default SearchOrder;
