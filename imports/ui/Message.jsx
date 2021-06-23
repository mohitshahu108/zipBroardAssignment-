// import React from "react";

// export const Message = ({ message }, props) => {
// console.log(props);
//   const isUser = message.username === user.username;
//   return (
//     <div className={`message ${isUser && "message__user"}`}>
//       <Card className={isUser ? "message__userCard" : "message__guestCard"}>
//         <CardContent>
//           <Typography color="textPrimary" varient="h5" component="h2">
//             <strong>{message.username} </strong>: {message.text}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

import React from "react";
import { useTracker } from "meteor/react-meteor-data";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
export const Message = ({ message }) => {
  const user = useTracker(() => Meteor.user());
  const isUser = message.username === user.username;
  console.log(message);
  return (
    <>
      <div className={`message ${isUser && "message__user"}`}>
        <Card className={isUser ? "message__userCard" : "message__guestCard"}>
          <CardContent>
            <Typography color="textPrimary" varient="h5" component="h2">
              <strong>{message.username} </strong>: {message.text}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
