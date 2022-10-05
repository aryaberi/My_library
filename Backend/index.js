import express from "express";
import cors from "cors";
import UserRoute from "./routes/userRoute.js";
import BookRoute from "./routes/bookRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(BookRoute);

app.listen(5000,()=> console.log("server up and runing ...."));