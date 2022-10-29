import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  public userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public create = async (req: Request, res: Response) => {
    const createdUser = await this.userService.create(req.body);
    return res.status(200).json(createdUser);
  };

  public getAll = async (req: Request, res: Response) => {
    const allUsers = await this.userService.getAll();
    return res.status(200).json(allUsers);
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const user = await this.userService.getById(id);
      return res.status(200).json(user);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  public delete = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      await this.userService.delete(id);
      return res.status(200).json('User Deleted');
    } catch (error: unknown) {
      console.error(error);
    }
  }

  public update = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const user = await this.userService.update(id, req.body);
      return res.status(200).json(user);
    } catch (error: unknown) {
      console.error(error);
    }
  }
}

export default UserController;
