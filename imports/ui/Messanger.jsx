import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { Input, InputLabel } from "@material-ui/core";

import { Message } from "./Message";
import { MessagesCollection } from "../api/MessagesCollection";

export default function Messanger() {
  const user = useTracker(() => Meteor.user());
  const messages = useTracker(() =>
    MessagesCollection.find(
      {},
      {
        sort: { createdAt: -1 },
      }
    ).fetch()
  );
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    // all logic to send messager goes here
    e.preventDefault();
    MessagesCollection.insert({
      username: user.username,
      text: input.trim(),
      createdAt: new Date(),
    });
    setInput("");
  };

  const logout = () => Meteor.logout();

  return (
    <div>
      <div className="Messanger__logout" onClick={logout}>
        <Button variant="contained" color="primary">
          {user.username} :Logout
        </Button>
      </div>
      <h1>MessangerDashbord</h1>
      <form className='messanger__form'>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter Message</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={sendMessage}
          variant="contained"
          color="primary"
        >
          Send Message
        </Button>
      </form>
      {messages.map((message) => {
        return <Message key={message._id} message={message} />;
      })}
    </div>
  );
}
