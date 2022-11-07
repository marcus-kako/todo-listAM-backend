import TokenValidation from "./TokenValidation";
import loginValidation from "./LoginValidation";
import createUserValidation from "./CreateUserValidation";
import taskValidation from "./TaskValidation";
import updateUserValidation from "./UpdateUserValidation";


const tokenValidation =  new TokenValidation();

export {
  createUserValidation,
  updateUserValidation,
  loginValidation,
  taskValidation,
  tokenValidation,
};
