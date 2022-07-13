import { Request, Response } from "express";
import { CreateBuildingService } from "../services/Building/CreateBuildingService";
import { CreateProductCategoryService } from "../services/ProductCategory/CreateProductCategoryService";
import { DeleteProductCategoryService } from "../services/ProductCategory/DeleteProductCategoryService";
import { GetProductCategoryService } from "../services/ProductCategory/GetProductCategoryService";
import { UpdateProductCategoryService } from "../services/ProductCategory/UpdateProductCategoryService";



export class CreateProductCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createProductCategoryService = new CreateProductCategoryService();

    const result = await createProductCategoryService.execute({ name });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}

export class GetProductCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.query;

    const getProductCategoryService = new GetProductCategoryService();

    const result = await getProductCategoryService.execute( id );

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}


export class UpdateProductCategoryController {
  async handle(request: Request, response: Response) {
    const { id, name } = request.body;

    const updateProductCategoryService = new UpdateProductCategoryService();

    const result = await updateProductCategoryService.execute({ id, name  });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}

export class DeleteProductCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.query;

    const deleteProductCategoryService = new DeleteProductCategoryService();

    const result = await deleteProductCategoryService.execute( id );

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}




