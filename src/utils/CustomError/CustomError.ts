import StatusCode from "../StatusCode";

export class CustomError extends Error {
  private _code: StatusCode;
  constructor(message: string, code: StatusCode) {
    super(message);
    this._code = code;
  }

  public get code(): StatusCode {
    return this._code;
  }
}
