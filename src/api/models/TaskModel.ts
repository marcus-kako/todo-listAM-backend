import { Model, DataTypes } from "sequelize";
import sequelize from "../../db/config";

export class Task extends Model {
  public readonly _id!: number;
  public _title!: string;
  public _description!: string;
  public _closed_at!: Date | null;
  public _todo_until!: Date;
  public _remember!: boolean;
  public _done_on_time!: boolean;
  public _done!: boolean;
  public _user_id!: number;
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

    done_on_time: {
      type: DataTypes.BOOLEAN,
    },

    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    closed_at: {
      type: DataTypes.DATE,
    },

    todo_until: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
  }
);

export default Task;
