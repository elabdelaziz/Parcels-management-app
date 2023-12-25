import { Router } from "express";
import * as controllers from "../../controllers/sender.controllers";

const routes = Router();
routes.route("/parcels").post(controllers.createNewRequest);
routes.route("/parcels/:id").delete(controllers.deleteItem);

export default routes;
