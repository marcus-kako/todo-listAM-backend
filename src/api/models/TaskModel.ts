import { Model, DataTypes } from "sequelize";
import sequelize from "../../db/config";

export class Task extends Model {
  public readonly id!: number;
  public title!: string;
  public description!: string;
  public closed_at!: Date | null;
  public todo_until!: Date;
  public remember!: boolean;
  public done_on_time!: boolean;
  public done!: boolean;
  public user_id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    remember: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    doneOnTime: {
      type: DataTypes.BOOLEAN,
      field: 'done_on_time',
    },

    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    closedAt: {
      type: DataTypes.DATE,
      field: 'closed_at',
    },

    todoUntil: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'todo_until',
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
  },
  {
    sequelize: sequelize,
  }
);

export default Task;
