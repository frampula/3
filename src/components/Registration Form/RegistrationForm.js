import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CLICK_INCREMENT": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  count: 0,
};

const Clicker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
    
  const clickHandler = () => {
    dispatch({
        type: 'CLICK_INCREMENT'
    });
  }
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={clickHandler}>Increment</button>
    </>
  );
};

export default Clicker;

// const RegistrationForm = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const universalChangeHandler = ({ target: { value, name } }) => {
//     switch (name) {
//       case "firstName": {
//         setFirstName(value);
//         break;
//       }
//       case "lastName": {
//         setLastName(value);
//         break;
//       }
//       case "email": {
//         setEmail(value);
//         break;
//       }
//       case "password": {
//         setPassword(value);
//         break;
//       }
//       default: {
//         bre
//       }
//     }
//   };

//   return (
//     <form>
//       <input
//         name="firstName"
//         placeholder="Type your first name"
//         value={firstName}
//         onChange={universalChangeHandler}
//       />
//       <input
//         name="lastName"
//         placeholder="Type your last name"
//         value={lastName}
//         onChange={universalChangeHandler}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Type your first email"
//         value={email}
//         onChange={universalChangeHandler}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Type your password"
//         value={password}
//         onChange={universalChangeHandler}
//       />
//     </form>
//   );
// };

// export default RegistrationForm;
