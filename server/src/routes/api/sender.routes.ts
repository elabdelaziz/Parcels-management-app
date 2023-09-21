import { Router } from "express";
import * as controllers from "../../controllers/sender.controllers";

const routes = Router();
routes.route("/:id/parcels").get(controllers.getSenderParcels);

export default routes;
