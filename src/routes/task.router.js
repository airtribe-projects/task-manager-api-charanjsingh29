import { Router } from "express";
import { getAllTasks, getSingleTask, newTask, updateTask, deleteTask } from "../controllers/task.controller.js";

const router = Router();
router.get("/", getAllTasks);
router.get("/:id", getSingleTask);
router.post('/', newTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
export default router;