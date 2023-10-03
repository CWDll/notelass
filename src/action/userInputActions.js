export const SET_USER_INPUT = "SET_USER_INPUT";

export const setUserInput = (key, value) => ({
  type: SET_USER_INPUT,
  payload: { key, value },
});
