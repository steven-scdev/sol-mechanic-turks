import { Router } from "express";

const router = Router()

router.post("signin", (req, res) => {
  res.send("login")
}  )

export default router