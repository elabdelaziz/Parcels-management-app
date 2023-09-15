import { Router } from "express";
import * as controllers from "../../controllers/parcels.controllers";

const routes = Router();

routes.route("/").get(controllers.create);

export default routes;
