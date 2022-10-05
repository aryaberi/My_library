import express from "express";
import {getUsers, getUsersby,createUser} from "../controler/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:email", getUsersby);
router.post("/users", createUser);

export default router;