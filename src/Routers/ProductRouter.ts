import express from "express";
import { CreateProductController, DeleteProductController, GetProductController, UpdateProductController } from "../controllers/ProductController";
import { ensuredAuthenticated } from "../middleware/ensuredAuthenticated";
import { CreateProductValidation, DeleteProductValidation, GetProductValidation, UpdateProductValidation } from "../schemas/ProductValidation";

const productRouter = express.Router();


productRouter.post(
    "/product",
    ensuredAuthenticated(),
    CreateProductValidation,
    new CreateProductController().handle
);

productRouter.get(
    "/product",
    ensuredAuthenticated(),
    GetProductValidation,
    new GetProductController().handle
);

productRouter.put(
    "/product",
    ensuredAuthenticated(),
    UpdateProductValidation,
    new UpdateProductController().handle
);

productRouter.delete(
    "/product",
    ensuredAuthenticated(),
    DeleteProductValidation,
    new DeleteProductController().handle
);


export { productRouter };