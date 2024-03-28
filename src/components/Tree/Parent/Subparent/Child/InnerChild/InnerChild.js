import { useContext } from "react";
import { UserContext } from "../../../../../../contexts/userContext";

const InnerChild = (props) => {
  const {user: {firstName, lastName, email, avatar}, logOut} = useContext(UserContext)
        return (
          <>
            <button onClick={logOut}>LogOut</button>
            <p>{firstName} {lastName} {email}</p>
          </>
          )
};

export default InnerChild;
