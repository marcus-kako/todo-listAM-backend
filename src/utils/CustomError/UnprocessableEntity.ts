import StatusCode from "../StatusCode";
import { CustomError } from "./CustomError";

export class UnprocessableEntity extends CustomError { 
  constructor(message: string) {
    super(message, StatusCode.UnprocessableEntity);
  }
}