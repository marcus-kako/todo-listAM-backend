import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import StatusCode from "../utils/StatusCode";

const taskShema = Joi.object({
  title: Joi.string().min(1).required(),
  description: Joi.string().required(),
  closedAt: Joi.date().optional(),
  todoUntil: Joi.date().greater('now').required(),
  remember: Joi.boolean().required(),
  doneOnTime: Joi.boolean().optional(),
  done: Joi.boolean().required(),
  userId: Joi.number().required(),
  data: Joi.object().required(),
});

const taskValidation =  (req: Request, res: Response, next: NextFunction) => {
  const { error } = taskShema.validate(req.body);
  if (error) {
    return res.status(StatusCode.BadRequest)
    .json({ message: error.details[0].message })
  }
  next();
}

export default taskValidation;
