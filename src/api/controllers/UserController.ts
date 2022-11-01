import { Request, Response } from "express";
import CustomError from "../../utils/CustomError";
import StatusCode from "../../utils/StatusCode";
import UserService from "../services/UserService";

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public create = async (req: Request, res: Response) => {
    try {
      const createdUser = await this.userService.create(req.body);
      return res.status(201).json(createdUser);

    } catch (error: unknown) {
      if (error instanceof CustomError) {
        return res.status(error.code).json({ message: error.message });
      }
      return res.status(StatusCode.InternalServerError).json({ message: error });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const login = await this.userService.login(req.body);
      return res.status(200).json(login);

    } catch (error: unknown) {
      if (error instanceof CustomError) {
        return res.status(error.code).json({ message: error.message });
      }
      return res.status(StatusCode.InternalServerError).json({ message: error });
    }

  }

  public getAll = async (_req: Request, res: Response) => {
    try {
      const allUsers = await this.userService.getAll();
      return res.status(200).json(allUsers);

    } catch (error: unknown) {
      if (error instanceof CustomError) {
        return res.status(error.code).json({ message: error.message });
      }
      return res.status(StatusCode.InternalServerError).json({ message: error });
    }
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const user = await this.userService.getById(id);
      return res.status(200).json(user);

    } catch (error: unknown) {
      if (error instanceof CustomError) {
        return res.status(error.code).json({ message: error.message });
      }
      return res.status(StatusCode.InternalServerError).json({ message: error });
    }

  }

  public delete = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      await this.userService.delete(id);
      return res.status(200).json('User Deleted');

    } catch (error: unknown) {
      if (error instanceof CustomError) {
        return res.status(error.code).json({ message: error.message });
      }
      return res.status(StatusCode.InternalServerError).json({ message: error });
    }

  }

  public update = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const user = await this.userService.update(id, req.body);
      return res.status(200).json(user);

    } catch (error: unknown) {
      if (error instanceof CustomError) {
        return res.status(error.code).json({ message: error.message });
      }
      return res.status(StatusCode.InternalServerError).json({ message: error });
    }

  }
}

export default UserController;
