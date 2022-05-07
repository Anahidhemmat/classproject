import { useState } from "react";

function CreateAccountForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <form>
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          type="text"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
      </div>
    </form>
  );
}

export default CreateAccountForm;
