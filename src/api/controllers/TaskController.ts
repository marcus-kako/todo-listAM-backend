import { Request, Response } from 'express';
import TaskService from "../services/TaskService";

class TaskController {
    public taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  public create = async (req: Request, res: Response) => {
    const createdTask = await this.taskService.create(req.body);
    console.log(createdTask)
    return res.status(200).json(createdTask);
  }

  public getAll = async (req: Request, res: Response) => {
    const allTasks = await  this.taskService.getAll();
    return res.status(200).json(allTasks);
  }

  public getById = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const task = await this.taskService.getById(id);
      return res.status(200).json(task);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  public getByUserId = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const task = await this.taskService.getByUserId(id);
      return res.status(200).json(task);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  public delete = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      await this.taskService.delete(id);
      return res.status(200).json('Task Deleted');
    } catch (error: unknown) {
      console.error(error);
    }
  }

  public update = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const task = await this.taskService.update(id, req.body);
      return res.status(200).json(task);
    } catch (error: unknown) {
      console.error(error);
    }
  }
}


export default TaskController;