import { Request, Response } from "express";
import { CreateInventoryService } from "../services/Inventory/CreateInventoryService";
import { UpdateInventoryService } from "../services/Inventory/UpdateInventoryService";



export class CreateInventoryController {
  async handle(request: Request, response: Response) {
    const { building_id, product_id, amount_total, sale_price, inventory_detail } = request.body;

    const createInventoryService = new CreateInventoryService();

    const result = await createInventoryService.execute({ building_id, product_id, amount_total, sale_price, inventory_detail  });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}

export class UpdateInventoryController {
  async handle(request: Request, response: Response) {
    const { building_id, product_id, amount_total, sale_price, inventory_detail } = request.body;

    const updateInventoryService = new UpdateInventoryService();

    const result = await updateInventoryService.execute({ building_id, product_id, amount_total, sale_price, inventory_detail  });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}




