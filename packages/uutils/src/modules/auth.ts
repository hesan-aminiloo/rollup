import axios from 'axios';
import { UserRegister } from './types';
import { isRegisterDataValid } from './formValidators';
import {
  AUTH_REGISTER_API,
  AUTH_LOGIN_WITH_USER_PASS_API,
  AUTH_FORGOT_PASS_API,
  AUTH_CHANGE_PASS_API
} from './constants';
import { trackEvent } from './helpers';

const RegisterUser = async (formData: UserRegister): Promise<object> => {
  try {
    if (!isRegisterDataValid(formData)) return Promise.reject('Invalid arguments');
    const { data } = await axios.post(AUTH_REGISTER_API, formData);
    console.log(data);
    return data;
  } catch (E) {
    console.log(E);
    return {};
  }
};

const LoginWithUserPass = () => {

};

const ForgotPassword = () => {

};

const UpdatePassword = () => {
  
};

export {
  LoginWithUserPass,
  RegisterUser,
  ForgotPassword,
  UpdatePassword
}