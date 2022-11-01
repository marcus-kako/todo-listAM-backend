import { NotFoundError } from "../../utils/CustomError";
import { ITask, ITaskDto } from "../interfaces/ITask";
import Task from "../models/TaskModel";
import User from "../models/UserModel";

class TaskService {

  constructor() {}

  public async create(task: ITaskDto): Promise<ITask | null> {
    const user = await User.findByPk(task.userId);
    if (!user) {
      throw new NotFoundError("User not found");
    }
    const createdTask = await Task.create({ ...task });
    return createdTask.toJSON();
  }

  public async getAll(): Promise<Task[] | null> {
    const allTasks = await Task.findAll();
    return allTasks;
  }

  public async getById(id: number): Promise<Task | null> {
    const task = await Task.findByPk(id);
    if (!task) {
      throw new NotFoundError("Task not found");
    }
    return task;
  }

  public async getByUserId(userId: number): Promise<Task[] | null> {
    const task = await Task.findAll({ where: { userId } });
    if (!task) {
      throw new NotFoundError("User not found");
    }
    return task;
  }

  public async delete(id: number): Promise<void> {
    const task = await Task.findByPk(id);
    if (!task) {
      throw new NotFoundError("Task not found");
    }
    await task.destroy()
  }

  public async update(id: number, task: ITaskDto): Promise<Task | null> {
    const foundTask = await Task.findByPk(id);
    if (!foundTask) {
      throw new NotFoundError("Task not found");
    }
    foundTask.update({...task});
    foundTask.save()
    const foundTaskUpdated = await Task.findByPk(id);
    return foundTaskUpdated;
  }
}

export default TaskService;
