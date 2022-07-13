import { celebrate, Joi } from "celebrate";

export const CreateProductCategoryValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
});

export const GetProductCategoryValidation = celebrate({
  query: Joi.object().keys({
    id: Joi.string().required(),
  }),
});


export const UpdateProductCategoryValidation = celebrate({
  body: Joi.object().keys({
    id: Joi.string().required(),
    name: Joi.string().required(),
  }),
});

export const DeleteProductCategoryValidation = celebrate({
  query: Joi.object().keys({
    id: Joi.string().required(),
  }),
});
