import { Request, Response } from "express";
import { CreateUserService } from "../services/User/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, name, password, nickname, birthDate } = request.body;

    const createUserService = new CreateUserService();
    const result = await createUserService.execute({ email, name, password, nickname, birthDate });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
