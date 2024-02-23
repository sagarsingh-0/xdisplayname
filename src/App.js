import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      alert("Please fill out both fields.");
      return;
    }

    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <p>
          First Name:
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        </p>
        <p>
          Last Name:
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        </p>
        <button type="submit">Submit</button>
      </form>

      {fullName && <div>Full Name: {fullName}</div>}
    </div>
  );
}

export default App;
