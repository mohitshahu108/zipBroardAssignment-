import { Meteor } from "meteor/meteor";
import React, { useState } from "react";
import { Accounts } from "meteor/accounts-base";

import { Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { Input, InputLabel } from "@material-ui/core";

export const UserAuth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password, (err) => {
      if (err !== undefined) {
        alert(err);
      }
    });
  };

  const register = (e) => {
    e.preventDefault();
    Accounts.createUser({ username: username, password: password }, (err) => {
      if (err !== undefined) {
        alert(err);
      }
    });
  };

  return (
    <>
      <h3 className="UserAuth__h3">Accounts</h3>
      <form className="UserAuth__form">
        <FormControl>
          <InputLabel htmlFor="my-input">Enter user name</InputLabel>
          <Input
            id="my-username"
            type="text"
            autoComplete="off"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter password</InputLabel>
          <Input
            id="my-password"
            type="password"
            autoComplete="off"
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
          <p>New to Messenger?</p>
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
