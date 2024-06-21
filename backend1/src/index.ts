import express from "express";
import userRouter from "./routers/user";
import workerRouter from "./routers/worker";
const app = express();
app.use("/user", userRouter);
app.use("/worker", workerRouter);

app.listen(3000);
