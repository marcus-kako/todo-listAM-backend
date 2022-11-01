import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import StatusCode from "../utils/StatusCode";


const createUserShema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(6).email().required(),
  password: Joi.string().alphanum().min(6).required(),
})

const userValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = createUserShema.validate(req.body);
  if (error) {
    return res.status(StatusCode.BadRequest).json({ message: 'All fields must be filled in correctly' })
  }
  next();
}

export default userValidation;
