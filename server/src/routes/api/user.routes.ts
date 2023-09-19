import { Router } from "express";
import * as controllers from "../../controllers/user.controllers";

const routes = Router();

routes.route("/pendingParcels").get(controllers.getPendingParcels);
routes.route("/:id/parcels").get(controllers.getParcels);
routes.route("/auth").post(controllers.auth);
export default routes;
