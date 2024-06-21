import express from "express";
import userRouter from "./routers/user";
import workerRouter from "./routers/worker";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app.use("/v1/users", userRouter);
// app.use("/v1/worker", workerRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
