import { Router } from "express";
import * as controllers from "../../controllers/biker.controllers";

const routes = Router();
routes.route("/:id/parcels").get(controllers.getBikerParcels);

export default routes;
