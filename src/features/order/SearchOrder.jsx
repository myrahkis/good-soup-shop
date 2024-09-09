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
        className="bg-light-bg-color rounded-lg border border-main-color px-2"
      />
    </form>
  );
}

export default SearchOrder;
