import express from "express";
import {getBooks, getBooksby,createBook} from "../controler/BookController.js";

const router = express.Router();

router.get("/users", getBooks);
router.get("/users/:id", getBooksby);
router.post("/users", createBook);

export default router;