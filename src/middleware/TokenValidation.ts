import { NextFunction, Request, Response } from "express";
import StatusCode from "../utils/StatusCode";
import TokenGenerate from "../utils/TokenGenerate";

class TokenValidation {
  public async validation(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(StatusCode.Forbidden).json({ message: 'Token not found' });
    }

    try {
      const data = await new TokenGenerate().decode(token);
      req.body.data = data;
      next();
    } catch (error) {
      return res.status(StatusCode.Forbidden).json({ message: 'Expired or invalid token' });
    }
  }
}

export default TokenValidation;