import express from "express";
import { CreateInventoryController, UpdateInventoryController } from "../controllers/InventoryController";
import { ensuredAuthenticated } from "../middleware/ensuredAuthenticated";
import { CreateInventoryValidation, UpdateInventoryValidation } from "../schemas/InventoryValidation";

const inventoryRouter = express.Router();


inventoryRouter.post(
    "/inventory",
    ensuredAuthenticated(),
    CreateInventoryValidation,
    new CreateInventoryController().handle
);

inventoryRouter.put(
    "/inventory",
    ensuredAuthenticated(),
    UpdateInventoryValidation,
    new UpdateInventoryController().handle
);

export { inventoryRouter };