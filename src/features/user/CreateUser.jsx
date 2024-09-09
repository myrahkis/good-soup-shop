import { useState } from "react";

function CreateUser() {
  const [name, setName] = useState("");
  return (
    <div className="flex justify-center gap-3 text-dark-text-color">
      <p>Welcome! What is your name?</p>
      <input
        type="text"
        value={name}
        onChange={(e) => e.target.value}
        placeholder="Jane Doe"
        className="bg-light-bg-color rounded-lg border border-main-color px-2 cursor-text"
      />
    </div>
  );
}

export default CreateUser;
