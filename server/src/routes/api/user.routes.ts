import { Router } from "express";
import * as controllers from "../../controllers/user.controllers";

const routes = Router();

routes.route("/auth").post(controllers.auth);
routes.route("/:id/").get(controllers.getUserData);
export default routes;
