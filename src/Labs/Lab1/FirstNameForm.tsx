/**
 * Lab 1 – First Name Form
 * Input field to collect user's first name.
 */

import { useState } from "react";

const FirstNameForm = () => {
  const [firstName, setFirstName] = useState("");

  return (
    <div>
      <h3>Enter Your First Name</h3>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <p>Hello, {firstName || "friend"}!</p>
    </div>
  );
};

export default FirstNameForm;
