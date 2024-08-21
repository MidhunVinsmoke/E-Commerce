
import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:9000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        setAlertMessage("User created successfully");
        // Reset form fields after successful submission
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setAlertMessage("Failed to create user");
      }
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage("Failed to create user");
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>LOGIN PAGE</h1>
        {alertMessage && <p className="alert">{alertMessage}</p>}
        <div className="loginsignup-fields">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSubmit}>Continue</button>
        </div>

        <div className="agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

