import { hash } from "bcryptjs";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories";

type UserRequest = {
  email: string;
  password: string;
  name: string;
  nickname: string,
  birthDate: Date,
};

export class CreateUserService {
  async execute({ email, password, name, nickname, birthDate }: UserRequest): Promise<Error | User> {
    const existUser = await UserRepository().findOneBy({ email });

    if (existUser) {
      return new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = UserRepository().create({ email, password: passwordHash, name, nickname, birthDate });

    await UserRepository().save(user);

    return user;
  }
}
