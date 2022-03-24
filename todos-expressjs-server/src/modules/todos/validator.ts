import Joi, { isSchema } from 'joi';
import { ITodoPayload } from './model';

export function validateTodoCreatePayload(
  payload: ITodoPayload,
): Joi.ValidationResult<any> {
  const schema = Joi.object({
    text: Joi.string().required(),
    completed: Joi.boolean().default(false),
  });

  return schema.validate(payload);
}
//TODO: implement edit payload validation
export function validateTodoEditPayload(
  payload: ITodoPayload,
): Joi.ValidationResult<any> {
  const schema = Joi.object({
    text: Joi.string().required(),
    completed: Joi.boolean().required(),
  });
  return schema.validate(payload)
}
