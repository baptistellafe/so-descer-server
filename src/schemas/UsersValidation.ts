import { celebrate, Joi } from "celebrate";

export const AuthUserValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required()
  }),
});

export const CreateUserValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(8),
    nickname: Joi.string().required().min(4),
    birthDate: Joi.date().required(),
  }),
});

export const EditUserValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email(),
    password: Joi.string().min(8),
    name: Joi.string().min(8),
    nickname: Joi.string().min(8),
    birthDate: Joi.date(),
  }),
});
