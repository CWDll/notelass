export const SET_USER_INPUT = "SET_USER_INPUT";

// 회원가입용 UserInput
export const setUserInput = (key, value) => ({
  type: SET_USER_INPUT,
  payload: { key, value },
});
