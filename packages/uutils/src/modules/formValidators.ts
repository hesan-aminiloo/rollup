import { UserRegister } from './types';

const Joi = require('joi');

const registerUserSchema = Joi.object({
  username: Joi
    .string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi
    .string()
    .alphanum()
    .min(6)
    .required(),
  confirm_password: Joi
    .ref('password')
});

export const isRegisterDataValid = async (userData: UserRegister): Promise<boolean> => {
  try {
    const isValid = await registerUserSchema.validateAsync(userData);
    return isValid;
  } catch (E) {
    return false;
  }
};

export const isForgotPassDataValid = (data: string): boolean => {
  return true;
};



