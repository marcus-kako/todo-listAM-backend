import { Request, Response } from 'express';
import CustomError from "../../utils/CustomError";
import StatusCode from "../../utils/StatusCode";
import TaskService from "../services/TaskService";

class TaskController {
  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  public create = async (req: Request, res: Response) => {
    try {
      const createdTask = await this.taskService.create(req.body);
      console.log(createdTask)
      return res.status(200).json(createdTask);

    } catch (error: unknown) {
      if (error instanceof CustomError) {
        return res.status(error.code).json({ message: error.message });
      }
      return res.status(StatusCode.InternalServerError).json({ message: error });
    }
  }

  public getAll = async (req: Request, res: Response) => {
    try {
      const allTasks = await this.taskService.getAll();
      return res.status(200).json(allTasks);

    } catch (error: unknown) {
      if (error instanceof CustomError) {
        return res.status(error.code).json({ message: error.message });
      }
      return res.status(StatusCode.InternalServerError).json({ message: error });
    }
  }

  public getById = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const task = await this.taskService.getById(id);
      return res.status(200).json(task);

    } catch (error: unknown) {
      if (error instanceof CustomError) {
        return res.status(error.code).json({ message: error.message });
      }
      return res.status(StatusCode.InternalServerError).json({ message: error });
    }
  }

  public getByUserId = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const task = await this.taskService.getByUserId(id);
      return res.status(200).json(task);

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
      await this.taskService.delete(id);
      return res.status(200).json('Task Deleted');

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
      const task = await this.taskService.update(id, req.body);
      return res.status(200).json(task);

    } catch (error: unknown) {
      if (error instanceof CustomError) {
        return res.status(error.code).json({ message: error.message });
      }
      return res.status(StatusCode.InternalServerError).json({ message: error });
    }
  }
}


export default TaskController;