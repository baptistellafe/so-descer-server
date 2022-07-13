import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";

export const ensuredAuthenticated = () => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const authHeaders = request.headers.authorization;

    if (!authHeaders) {
      return response.status(401).json({ error: "Token is missing" });
    }

    const [, token] = authHeaders.split(" ");

    try {
      verify(token, 'L^Z#UrL[b]#>&^zq:jE34x,)G](<^');

      // const { sub } = decode(token) ;
      // request.userId = sub.toString();

      const decodeToken: any = decode(token) ;
      request.userId = decodeToken.sub.toString();

      return next();
    } catch (err) {
      return response.status(401).end();
    }
  };
};
