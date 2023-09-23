import { Router } from "express";
import * as controllers from "../../controllers/biker.controllers";

const routes = Router();
routes
  .route("/parcels")
  .patch(controllers.updateSingleParcel)
  .post(controllers.pickParcel);
routes.route("/:id/parcels").get(controllers.getBikerParcels);

export default routes;
