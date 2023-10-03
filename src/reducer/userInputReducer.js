import { SET_USER_INPUT } from "../actions/userInputActions";

const initialState = {
  email: "",
  password: "",
  name: "",
  admissionYear: "",
  school: "",
  role: "",
};

const userInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INPUT:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      return state;
  }
};

export default userInputReducer;
