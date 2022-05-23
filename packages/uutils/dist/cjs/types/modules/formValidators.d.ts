import { UserRegister } from './types';
export declare const isRegisterDataValid: (userData: UserRegister) => Promise<boolean>;
export declare const isForgotPassDataValid: (data: string) => boolean;
