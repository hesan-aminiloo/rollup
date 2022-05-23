declare type UserRegister = {
    username: string;
    password: string;
    confirm_password: string;
};

declare const RegisterUser: (formData: UserRegister) => Promise<object>;
declare const LoginWithUserPass: () => void;
declare const ForgotPassword: () => void;
declare const UpdatePassword: () => void;

declare const auth_d_LoginWithUserPass: typeof LoginWithUserPass;
declare const auth_d_RegisterUser: typeof RegisterUser;
declare const auth_d_ForgotPassword: typeof ForgotPassword;
declare const auth_d_UpdatePassword: typeof UpdatePassword;
declare namespace auth_d {
  export {
    auth_d_LoginWithUserPass as LoginWithUserPass,
    auth_d_RegisterUser as RegisterUser,
    auth_d_ForgotPassword as ForgotPassword,
    auth_d_UpdatePassword as UpdatePassword,
  };
}

declare const trackEvent: () => Promise<any>;
declare const daysToYears: (days: number) => number;

declare const helpers_d_trackEvent: typeof trackEvent;
declare const helpers_d_daysToYears: typeof daysToYears;
declare namespace helpers_d {
  export {
    helpers_d_trackEvent as trackEvent,
    helpers_d_daysToYears as daysToYears,
  };
}

export { auth_d as Auth, helpers_d as Helpers };
