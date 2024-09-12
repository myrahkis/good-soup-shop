import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateName } from "./userSlice";

function CreateUser() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function submitHandle(e) {
    e.preventDefault();

    if (!name) return;

    dispatch(updateName(name));
    navigate("/menu");
  }

  return (
    <form onSubmit={submitHandle}>
      <div className="flex flex-col items-center justify-center gap-3 text-dark-text-color">
        <p>Welcome! What is your name?</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className={`input text-lg ${name === "" && "mb-[3.75rem]"}`}
        />
        {name !== "" && (
          <div>
            <button
              type="submit"
              className="rounded-lg bg-main-color px-4 py-2 text-lg uppercase text-light-text-color hover:bg-emphasis-color"
            >
              Start ordering
            </button>
          </div>
        )}
      </div>
    </form>
  );
}

export default CreateUser;
