import express from "express";
import { CreateRoleController } from "../controllers/CreateRoleController";
import { CreateRolePermissionController } from "../controllers/CreateRolePermissionController";
import { ensuredAuthenticated } from "../middleware/ensuredAuthenticated";

const rolesRouter = express.Router();

rolesRouter.post(
    "/roles",
    ensuredAuthenticated(),
    //is(["admin"]),
    new CreateRoleController().handle
  );
  
  rolesRouter.post("/roles/:roleId", new CreateRolePermissionController().handle);

export { rolesRouter };