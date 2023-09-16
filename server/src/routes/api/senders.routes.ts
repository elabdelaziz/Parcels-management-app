import { Router } from "express";
import * as controllers from "../../controllers/senders.controllers";

const routes = Router();

routes.route("/getAll").get(controllers.getAll);

export default routes;
