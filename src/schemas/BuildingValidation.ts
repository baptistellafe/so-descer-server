import { celebrate, Joi } from "celebrate";

export const CreateBuildingValidation = celebrate({
  body: Joi.object().keys({
    referenceName: Joi.string().required(),
    fantasyName: Joi.string().required().min(8),
    companyName: Joi.string().required().min(8),
    cnpj: Joi.string().required().length(14),
    address: Joi.object().required().keys({
        zipCode: Joi.string().required().length(8),
        state: Joi.string().required(),
        city: Joi.string().required(),
        neighborhood: Joi.string().required(),
        street: Joi.string().required(),
        number: Joi.number().required(),
        complement: Joi.string().required()
    }),
  }),
});

export const GetBuildingValidation = celebrate({
  query: Joi.object().keys({
    id: Joi.string().required(),
  }),
});


export const UpdateBuildingValidation = celebrate({
  body: Joi.object().keys({
    id: Joi.string().required(),
    referenceName: Joi.string(),
    fantasyName: Joi.string().min(8),
    companyName: Joi.string().min(8),
    cnpj: Joi.string().length(14),
    address: Joi.object().keys({
        zipCode: Joi.string().length(8),
        state: Joi.string(),
        city: Joi.string(),
        neighborhood: Joi.string(),
        street: Joi.string(),
        number: Joi.number(),
        complement: Joi.string()
    }),
  }),
});

export const DeleteBuildingValidation = celebrate({
  query: Joi.object().keys({
    id: Joi.string().required(),
  }),
});
