import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import StatusCode from "../utils/StatusCode";


const createUpdateUserShema = Joi.object({
  name: Joi.string().min(3).optional(),
  email: Joi.string().min(6).email().optional(),
  password: Joi.string().alphanum().min(6).optional(),
})

const updateUserValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = createUpdateUserShema.validate(req.body);
  if (error) {
    return res.status(StatusCode.BadRequest).json({ message: 'All fields must be filled in correctly' })
  }
  next();
}

export default updateUserValidation;
