import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-dark-text-color">
      <p>Welcome! What is your name?</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Jane Doe"
        className="input text-lg"
      />
      {name !== "" && (
        <div>
          <button
            onClick={() => navigate("/menu")}
            className="mt-1 rounded-lg bg-main-color px-4 py-2 text-lg uppercase text-light-text-color hover:bg-emphasis-color"
          >
            Start ordering
          </button>
        </div>
      )}
    </div>
  );
}

export default CreateUser;
