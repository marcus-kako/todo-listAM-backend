import { Router } from "express";
import sequelize from "./db/config";
import UserController from "./api/controllers/UserController";
import TaskController from "./api/controllers/TaskController";

const router: Router = Router();

const userController = new UserController();
const taskController = new TaskController();

// User
router.post("/user", userController.create);
router.get("/users", userController.getAll);
router.get("/user/:id", userController.getById);
router.delete("/user/:id", userController.delete);
router.put("/user/:id", userController.update);


// Task
router.post("/task", taskController.create);
router.get("/tasks", taskController.getAll);
router.get("/task/:id", taskController.getById);
router.get("/task/user/:id", taskController.getByUserId);
router.delete("/task/:id", taskController.delete);
router.put("/task/:id", taskController.update);




// Drop All Tables
router.get("/sync_all_tables", async (req, res) => {
  try {
    sequelize.sync({ force: true });
    res
      .status(200)
      .json("Created the tables, dropping it first if they already existed");
  } catch (error) {
    res.status(400).json(`Unable to connect to the database: ${error}`);
  }
});

export default router;
