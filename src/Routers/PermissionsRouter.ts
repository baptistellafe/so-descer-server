import express from "express";
import { CreatePermissionController } from "../controllers/CreatePermissionController";
import { ensuredAuthenticated } from "../middleware/ensuredAuthenticated";

const permisionsRouter = express.Router();


permisionsRouter.post(
    "/permissions",
    ensuredAuthenticated(),
    new CreatePermissionController().handle
  );


export { permisionsRouter };