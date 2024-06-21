import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const router = Router();
const JWT_SECRET = "secret";

const prismaClient = new PrismaClient();

// Sign in with wallet
router.post("/signin", async (req, res) => {
  const address = "4Zo37Hb1rGr5W573hjBfGPvsHmwqQqbRZMedBfDj28pP";
  // const user = await prismaClient.user.upsert(address);
  const existingUser = await prismaClient.user.findUnique({
    where: {
      address,
    },
  });
  if (existingUser) {
    const token = jwt.sign({ userId: existingUser.id }, JWT_SECRET);
    res.json({ token });
  } else {
    const user = await prismaClient.user.create({
      data: {
        address,
      },
    });
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    res.json({ token });
  }
});

export default router;
