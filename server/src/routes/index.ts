import { Router } from "express";
import userRoutes from "./api/user.routes";
import bikerRoutes from "./api/biker.routes";
import senderRoutes from "./api/sender.routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/biker", bikerRoutes);
routes.use("/sender", senderRoutes);

routes.get("api/hello", (req, res) => {
  res.json({ message: "hello" });
});

export default routes;
