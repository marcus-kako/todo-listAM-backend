import StatusCode from "../StatusCode";
import { CustomError } from "./CustomError";

export class InternalServerError extends CustomError { 
  constructor(message: string) {
    super(message, StatusCode.InternalServerError);
  }
}