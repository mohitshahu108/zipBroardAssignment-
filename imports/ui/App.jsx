import React from "react";
import Messanger from "./Messanger";
import { useTracker } from "meteor/react-meteor-data";
import { LoginForm } from "./LoginForm";

export const App = () => {
  const user = useTracker(() => Meteor.user());
  return <>{user ? <Messanger user={user} /> : <LoginForm />}</>;
};
