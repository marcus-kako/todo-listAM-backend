import { Router } from "express";
import { User } from "./api/models/UserModel";
import { Task } from "./api/models/TaskModel";
import  sequelize  from "./db/config";

const router: Router = Router();

router.post("/user", async (req, res) => {
  const user = await User.create({
    name: "teste",
    email: "test",
    password: "test",
  });
  res.status(200).json(user);
});

router.post("/task", async (req, res) => {
  const task = await Task.create({
    title: "teste",
    description: "test",
    remember: true,
    done: false,
    todo_until: new Date(),
    user_id: 1
  });
  res.status(200).json(task);
});

router.get("/users", async (req, res) => {
  const users = await User.findAll()
  res.status(200).json(users);
});

router.get("/tasks", async (req, res) => {
  const tasks = await Task.findAll()
  res.status(200).json(tasks);
});

router.get("/sync_all_tables", async (req, res) => {
  try {
    sequelize.sync({ force: true });
    res.status(200).json(
      "Created the tables, dropping it first if they already existed"
    );
  } catch (error) {
    res.status(400).json(`Unable to connect to the database: ${error}`);
  }
});

export { router };
