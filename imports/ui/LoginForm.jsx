import { Meteor } from "meteor/meteor";
import React, { useState } from "react";
import { Accounts } from "meteor/accounts-base";

import { Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { Input, InputLabel } from "@material-ui/core";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password);
  };

  const register = (e) => {
    e.preventDefault();
    Accounts.createUser({ username: username, password: password });
  };

  return (
    <>
      <h3>Accounts</h3>
      <form className="LoginForm__form">
        <FormControl>
          <InputLabel htmlFor="my-input">Enter user name</InputLabel>
          <Input
            id="my-username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter password</InputLabel>
          <Input
            id="my-password"
            type="text"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <div className="Buttons">
          <p>Already user login Now..👉</p>
          <Button
            disabled={!username}
            disabled={!password}
            variant="contained"
            color="primary"
            type="submit"
            onClick={login}
          >
            Log In
          </Button>
          <p>New to Messanger?</p>
          <p>Register Now...👉</p>
          <Button
            disabled={!username}
            disabled={!password}
            variant="contained"
            color="primary"
            type="submit"
            onClick={register}
          >
            Register
          </Button>
        </div>
      </form>
    </>
  );
};
