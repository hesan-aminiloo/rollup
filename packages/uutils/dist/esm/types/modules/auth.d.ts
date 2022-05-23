import { UserRegister } from './types';
declare const RegisterUser: (formData: UserRegister) => Promise<object>;
declare const LoginWithUserPass: () => void;
declare const ForgotPassword: () => void;
declare const UpdatePassword: () => void;
export { LoginWithUserPass, RegisterUser, ForgotPassword, UpdatePassword };
