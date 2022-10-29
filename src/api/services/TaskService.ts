import Task from "../models/TaskModel";

class TaskService {

  constructor() {}

  public async create(task: any): Promise<Task | null> {
    const createdTask = await Task.create(task);
    return createdTask.toJSON();
  }

  public async getAll(): Promise<Task[] | null> {
    const allTasks = await Task.findAll();
    return allTasks;
  }

  public async getById(id: number): Promise<Task | null> {
    const task = await Task.findByPk(id);
    return task;
  }

  public async getByUserId(id: number): Promise<Task[] | null> {
    const task = await Task.findAll({ where: { user_id: id } });
    return task;
  }

  public async delete(id: number): Promise<void> {
    const task = await Task.findByPk(id);
    await task?.destroy()
  }

  public async update(id: number, task: Task): Promise<Task | null> {
    const foundTask = await Task.findByPk(id);
    foundTask?.update({...task});
    foundTask?.save()
    const foundTaskUpdated = await Task.findByPk(id);
    return foundTaskUpdated;
  }
}

export default TaskService;
