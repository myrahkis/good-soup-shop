import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Oh no!</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>GO BACK</button>
    </div>
  );
}

export default Error;
