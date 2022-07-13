import { celebrate, Joi } from "celebrate";

export const CreateProductValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    internalCode: Joi.string().required(),
    barCode: Joi.string().required(),
    productCategoryId: Joi.string().guid().required(),
  }),
});


export const GetProductValidation = celebrate({
  query: Joi.object().keys({
    id: Joi.string().required(),
  }),
});


export const UpdateProductValidation = celebrate({
  body: Joi.object().keys({
    id: Joi.string().required(),
    name: Joi.string(),
    internalCode: Joi.string(),
    barCode: Joi.string(),
    productCategoryId: Joi.string().guid(),
  }),
});


export const DeleteProductValidation = celebrate({
  query: Joi.object().keys({
    id: Joi.string().required(),
  }),
});
