import { useState } from "react";

function CreateAccountForm() {
  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  //   function handleUsernameChange(e) {
  //     setUsername(e.target.value);
  //   }

  //   function handleEmailChange(e) {
  //     setEmail(e.target.value);
  //   }

  //   function handlePasswordChange(e) {
  //     setPassword(e.target.value);
  //   }

  //   function handleChange(e) {
  //     if (e.target.name === "username") {
  //       setUsername(e.target.value);
  //     } else if (e.target.name === "email") {
  //       setEmail(e.target.value);
  //     } else if (e.target.name === "password") {
  //       setPassword(e.target.value);
  //     }
  //   }

  function handleChange(e) {
    const updateUserData = {
      ...userData,
      [e.target.name]: e.target.value,
    };

    setUserData(updateUserData);
  }
  //   function handleSubmit(e) {
  //     e.preventDefault();

  //     console.log("sending data to server");

  //     fetch("https://httpstat.us/200", {
  //       method: "POStT",
  //       body: JSON.stringify({
  //         username: username,
  //         email: email,
  //         password: password,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   }

  function submit(e) {
    e.preventDefault();
    console.log("Do something with the form values...");
    console.log(`Username = ${userData.username}`);
    console.log(`Email = ${userData.email}`);
    console.log(`Password = ${userData.password}`);
  }
  return (
    <form>
      <div>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <button type="submit" onClick={submit}>
        submit
      </button>
    </form>
  );
}

export default CreateAccountForm;
