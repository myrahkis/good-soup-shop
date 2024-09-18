import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { useNavigate } from "react-router-dom";

function Home() {
  const user = useSelector((state) => state.user.userName);
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col justify-center extra-small:text-base">
      <h1 className="mb-4 text-center text-4xl font-semibold uppercase text-emphasis-color extra-small:text-xl small:text-2xl">
        The best soups.
        <br />
        <span className="text-main-color">Good soup, good for you.</span>
      </h1>

      {user ? (
        <button
          className="w-fit self-center rounded-lg bg-emphasis-color px-4 py-2 text-light-text-color duration-150 hover:scale-[0.96] hover:bg-main-color"
          onClick={() => navigate("/menu")}
        >
          Continue ordering
        </button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
