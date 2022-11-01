export interface ITaskDto {
    title: string,
    description: string,
    closedAt?: Date | null,
    todoUntil: Date,
    remember: boolean,
    doneOnTime?: boolean | null,
    done: boolean,
    userId: number,
};

export interface ITask {
  id: number,
  title: string,
  description: string,
  closedAt?: Date | null,
  todoUntil: Date,
  remember: boolean,
  doneOnTime?: boolean | null,
  done: boolean,
  userId: number,
  updatedAt: Date,
	createdAt: Date,
}