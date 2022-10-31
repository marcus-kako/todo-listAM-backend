import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import StatusCode from "../utils/StatusCode";


const loginShema = Joi.object({
  email: Joi.string().min(6).email().required(),
  password: Joi.string().alphanum().min(6).required(),
})

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginShema.validate(req.body);
  if (error) {
    return res.status(StatusCode.BadRequest).json({ message: 'All fields must be filled in correctly' })
  }
  next();
}

export default loginValidation;
