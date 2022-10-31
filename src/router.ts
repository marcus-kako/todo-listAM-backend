import { Router } from "express";
import sequelize from "./db/config";
import UserController from "./api/controllers/UserController";
import TaskController from "./api/controllers/TaskController";
import TokenValidation  from "./middleware/TokenValidation";

const router: Router = Router();

 // Controllers
const userController = new UserController();
const taskController = new TaskController();

// Middlewares
const tokenValidation = new TokenValidation();

// Login
router.post("/user/login", userController.login);

// User
router.post("/user", userController.create);
router.get("/users", userController.getAll);
router.get("/user/:id", userController.getById);
router.delete("/user/:id", userController.delete);
router.put("/user/:id", userController.update);

// Task
router.post("/task", tokenValidation.validation, taskController.create);
router.get("/tasks", tokenValidation.validation, taskController.getAll);
router.get("/task/:id", tokenValidation.validation, taskController.getById);
router.get("/task/user/:id", tokenValidation.validation, taskController.getByUserId);
router.delete("/task/:id", tokenValidation.validation, taskController.delete);
router.put("/task/:id", tokenValidation.validation, taskController.update);




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
