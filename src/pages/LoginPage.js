import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../store/auth/thunks";

export default function LoginPage() {
  // Use local React state here (and not global Redux state) because this info is related to the UI
  // The form inputs for email and password are local to this component, other components don't need to care about it
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // This handleSubmit is the "submit" event callback
  // When the "submit" event is triggered (by clicking the submit button), this function is called
  function handleSubmit(event) {
    event.preventDefault();

    // Dispatch the parameterized login thunk with email and password from local React state! 
    dispatch(loginThunk(email, password))
  }

  return (
    <div>
      <Link to={'/'}>Home</Link>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Email:{" "}
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>
    </div>
  );
}