import { useState } from "react";

function CreateUser() {
  const [name, setName] = useState("");
  return (
    <div className="text-center">
      <p>Welcome! What is your name?</p>
      <input
        type="text"
        value={name}
        onChange={(e) => e.target.value}
        placeholder="Jane Doe"
      />
    </div>
  );
}

export default CreateUser;
