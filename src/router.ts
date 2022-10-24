import { Router } from "express";
import { UserModel } from "./api/model/UserModel";

const router: Router = Router();

router.get("/", (req, res) => {
  res.status(200).json(new UserModel("aa1", "Marcus", "vvvv", "ppppp").user);
})

export { router };