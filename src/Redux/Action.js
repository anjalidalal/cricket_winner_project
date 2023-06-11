import { SIGNUP_USER } from "./ActionType";

export const signupUser = (user) => {
  return {
    type: SIGNUP_USER,
    payload: user,
  };
};
