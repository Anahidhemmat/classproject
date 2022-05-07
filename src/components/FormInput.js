import React, { useState } from "react";

const CreateAccountForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <form>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        placeholder="username"
      />
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="text"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="password"
      />
    </form>
  );
};

export default CreateAccountForm;
