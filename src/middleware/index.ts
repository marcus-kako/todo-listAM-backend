import TokenValidation from "./TokenValidation";
import loginValidation from "./LoginValidation";
import userValidation from "./UserValidation";

const tokenValidation =  new TokenValidation();

export {
  userValidation,
  loginValidation,
  tokenValidation,
};
