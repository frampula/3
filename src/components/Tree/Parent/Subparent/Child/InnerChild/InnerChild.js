import React from "react";
import { UserContext } from "../../../../../../contexts/userContext";

const InnerChild = (props) => {
  return (
    <UserContext.Consumer>
      {({user: {firstName, lastName, email, avatar}, logOut}) => {
        return (
          <>
            <button onClick={logOut}>LogOut</button>
            <p>{firstName} {lastName} {email}</p>
          </>
        );
      }}
    </UserContext.Consumer>
  );
};

export default InnerChild;
