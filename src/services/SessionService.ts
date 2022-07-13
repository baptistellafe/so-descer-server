import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UserRepository } from "../repositories";
import 'dotenv/config'

type UserRequest = {
  email: string;
  password: string;
};

export class SessionService {
  async execute({ email, password }: UserRequest) {
    const repo = UserRepository();

    const user = await repo.findOneBy({ email });

    if (!user) {
      return new Error("User does not exists!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return new Error("User or Password incorrect");
    }

    const token = sign({}, 'L^Z#UrL[b]#>&^zq:jE34x,)G](<^', {
      subject: user.id,
    });

    return { token };
  }
}
