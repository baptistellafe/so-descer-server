import { Request, Response } from "express";
import { CreateInventoryService } from "../services/Inventory/CreateInventoryService";



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




