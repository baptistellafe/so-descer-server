import express from "express";
import { CreateInventoryController } from "../controllers/InventoryController";
import { ensuredAuthenticated } from "../middleware/ensuredAuthenticated";
import { CreateInventoryValidation } from "../schemas/InventoryValidation";

const inventoryRouter = express.Router();


inventoryRouter.post(
    "/inventory",
    ensuredAuthenticated(),
    CreateInventoryValidation,
    new CreateInventoryController().handle
);

export { inventoryRouter };