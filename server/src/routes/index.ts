import { Router } from "express";
import bikersRoutes from "./api/bikers.routes";
import sendersRoutes from "./api/senders.routes";

const routes = Router();

routes.use("/bikers", bikersRoutes);
routes.use("/senders", sendersRoutes);

export default routes;
