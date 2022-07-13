import { celebrate, Joi } from "celebrate";

export const CreateInventoryValidation = celebrate({
  body: Joi.object().keys({
    building_id: Joi.string().guid().required(),
    product_id: Joi.string().guid().required(),
    amount_total: Joi.number().required(),
    sale_price: Joi.number().required(),
    inventory_detail: Joi.array().required().items(
        Joi.object().required().keys({
            amount: Joi.number().required(),
            expiration_date: Joi.string().required(),
            cost_price: Joi.number().required(),
        })
    ),
  }),
});