import { Request, Response } from "express";
import { CreateBuildingService } from "../services/Building/CreateBuildingService";
import { DeleteBuildingService } from "../services/Building/DeleteBuildingService";
import { GetBuildingService } from "../services/Building/GetBuildingService";
import { UpdateBuildingService } from "../services/Building/UpdateBuildingService";



export class CreateBuildingController {
  async handle(request: Request, response: Response) {
    const { referenceName, fantasyName, companyName, cnpj, address } = request.body;

    const createBuildingService = new CreateBuildingService();

    const result = await createBuildingService.execute({ referenceName, fantasyName, companyName, cnpj, address  });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}

export class GetBuildingController {
  async handle(request: Request, response: Response) {
    const { id } = request.query;

    const getBuildingService = new GetBuildingService();

    const result = await getBuildingService.execute( id );

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}


export class UpdateBuildingController {
  async handle(request: Request, response: Response) {
    const { id, referenceName, fantasyName, companyName, cnpj, address } = request.body;

    const updateBuildingService = new UpdateBuildingService();

    const result = await updateBuildingService.execute({ id, referenceName, fantasyName, companyName, cnpj, address  });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}

export class DeleteBuildingController {
  async handle(request: Request, response: Response) {
    const { id } = request.query;

    const deleteBuildingService = new DeleteBuildingService();

    const result = await deleteBuildingService.execute( id );

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}




