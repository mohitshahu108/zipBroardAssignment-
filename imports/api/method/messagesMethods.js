import { check } from "meteor/check";
import { MessagesCollection } from "../MessagesCollection";

Meteor.methods({
  "messages.insert"(messageObj) {
    check(messageObj, Object);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    MessagesCollection.insert({
      ...messageObj,
      createdAt: new Date(),
      userId: this.userId,
    });
  },

});
