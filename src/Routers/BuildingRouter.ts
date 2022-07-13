import express from "express";
import { CreateBuildingController, DeleteBuildingController, GetBuildingController, UpdateBuildingController } from "../controllers/BuildingController";
import { ensuredAuthenticated } from "../middleware/ensuredAuthenticated";
import { CreateBuildingValidation, DeleteBuildingValidation, GetBuildingValidation, UpdateBuildingValidation } from "../schemas/BuildingValidation";

const buildingRouter = express.Router();


buildingRouter.post(
    "/building",
    ensuredAuthenticated(),
    CreateBuildingValidation,
    new CreateBuildingController().handle
);

buildingRouter.get(
    "/building",
    ensuredAuthenticated(),
    GetBuildingValidation,
    new GetBuildingController().handle
);

buildingRouter.put(
    "/building",
    ensuredAuthenticated(),
    UpdateBuildingValidation,
    new UpdateBuildingController().handle
);

buildingRouter.delete(
    "/building",
    ensuredAuthenticated(),
    DeleteBuildingValidation,
    new DeleteBuildingController().handle
);


export { buildingRouter };