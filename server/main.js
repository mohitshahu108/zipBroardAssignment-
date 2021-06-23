import { Meteor } from "meteor/meteor";
import { MessagesCollection } from "../imports/api/MessagesCollection";
import { Accounts } from "meteor/accounts-base";
import '../imports/api/method/messagesMethods'

const insertMessage = (messageText) =>
  MessagesCollection.insert({ text: messageText });

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

Meteor.startup(() => {
  if (MessagesCollection.find().count() === 0) {
    [
      { username: "Mani", text: "First Message", createdAt: Date.now },
      { username: "Mohit", text: "First Message", createdAt: Date.now },
      { username: "kemmo", text: "First Message", createdAt: Date.now },
      { username: "Heraa", text: "First Message", createdAt: Date.now },
    ].forEach(insertMessage);
  }
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});
