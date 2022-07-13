import express from "express";
import { CreateUserAccessControlListController } from "../controllers/CreateUserAccessControlListController";
import { CreateUserController } from "../controllers/CreateUserController";
import { SessionController } from "../controllers/SessionController";
import { ensuredAuthenticated } from "../middleware/ensuredAuthenticated";
import { AuthUserValidation, CreateUserValidation, EditUserValidation } from "../schemas/UsersValidation";

const usersRouter = express.Router();


usersRouter.post("/users", CreateUserValidation,  new CreateUserController().handle);
usersRouter.put("/users", EditUserValidation,  new CreateUserController().handle);



usersRouter.post("/login", AuthUserValidation, new SessionController().handle);
usersRouter.post(
  "/users/acl",
  ensuredAuthenticated(),
  new CreateUserAccessControlListController().handle
);

export { usersRouter };