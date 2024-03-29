import * as yup from "yup";

const SIGN_UP_SCHEMA = yup.object({
    firstName: yup.string().required().min(1).max(30),
    lastName: yup.string().required().min(1).max(30),
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,),
  });

  export default SIGN_UP_SCHEMA