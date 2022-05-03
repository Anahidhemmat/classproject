import { useState } from "react";

function CreateAccountForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   function handleUsernameChange(e) {
  //     setUsername(e.target.value);
  //   }

  //   function handleEmailChange(e) {
  //     setEmail(e.target.value);
  //   }

  //   function handlePasswordChange(e) {
  //     setPassword(e.target.value);
  //   }

  function handleChange(e) {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("sending data to server");

    fetch("https://httpstat.us/200", {
      method: "POStT",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <button>submit</button>
    </form>
  );
}

export default CreateAccountForm;
