import { Request, Response } from "express";
import { CreateProductService } from "../services/Product/CreateProductService";
import { DeleteProductService } from "../services/Product/DeleteProductService";
import { GetProductService } from "../services/Product/GetProductService";
import { UpdateProductService } from "../services/Product/UpdateProductService";



export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, internalCode, barCode, productCategoryId } = request.body;

    const createProductService = new CreateProductService();

    const result = await createProductService.execute({ name, internalCode, barCode, productCategoryId });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}

export class GetProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.query;

    const getProductService = new GetProductService();

    const result = await getProductService.execute( id );

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}


export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id, name, internalCode, barCode, productCategoryId } = request.body;

    const updateProductService = new UpdateProductService();

    const result = await updateProductService.execute({ id, name, internalCode, barCode, productCategoryId  });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.query;

    const deleteProductService = new DeleteProductService();

    const result = await deleteProductService.execute( id );

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}




