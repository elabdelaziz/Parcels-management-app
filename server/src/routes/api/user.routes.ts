import { Router } from "express";
import * as controllers from "../../controllers/user.controllers";

const routes = Router();

routes.route("/auth").get(controllers.getTest).post(controllers.auth);
export default routes;
