import TokenValidation from "./TokenValidation";
import loginValidation from "./LoginValidation";
import userValidation from "./UserValidation";
import taskValidation from "./TaskValidation";

const tokenValidation =  new TokenValidation();

export {
  userValidation,
  loginValidation,
  taskValidation,
  tokenValidation,
};
