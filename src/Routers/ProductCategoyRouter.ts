import express from "express";
import { CreateProductCategoryController, DeleteProductCategoryController, GetProductCategoryController, UpdateProductCategoryController } from "../controllers/ProductCategoryController";
import { ensuredAuthenticated } from "../middleware/ensuredAuthenticated";
import { CreateProductCategoryValidation, DeleteProductCategoryValidation, GetProductCategoryValidation, UpdateProductCategoryValidation } from "../schemas/ProductCategoryValidation";

const productCategoryRouter = express.Router();


productCategoryRouter.post(
    "/product/category",
    ensuredAuthenticated(),
    CreateProductCategoryValidation,
    new CreateProductCategoryController().handle
);

productCategoryRouter.get(
    "/product/category",
    ensuredAuthenticated(),
    GetProductCategoryValidation,
    new GetProductCategoryController().handle
);

productCategoryRouter.put(
    "/product/category",
    ensuredAuthenticated(),
    UpdateProductCategoryValidation,
    new UpdateProductCategoryController().handle
);

productCategoryRouter.delete(
    "/product/category",
    ensuredAuthenticated(),
    DeleteProductCategoryValidation,
    new DeleteProductCategoryController().handle
);


export { productCategoryRouter };