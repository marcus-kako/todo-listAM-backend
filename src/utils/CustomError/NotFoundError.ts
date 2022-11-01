import StatusCode from "../StatusCode";
import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError { 
  constructor(message: string) {
    super(message, StatusCode.NotFound);
  }
}