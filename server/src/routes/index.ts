import { Router } from "express";
import parcelsRoutes from "./api/parcels.routes";

const routes = Router();

routes.use("/users", parcelsRoutes);

export default routes;
