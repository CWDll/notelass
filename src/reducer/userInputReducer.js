import { SET_USER_INPUT } from "../action/userInputActions";

const initialState = {
  email: "", // EmailVerificationAndPassword page
  password: "", // EmailVerificationAndPassword page
  grade: "", // selectSchool page
  classNum: "", // selectSchool page
  number: "", // selectSchool page
  name: "", // EmailVerificationAndPassword page
  admissionYear: "", // EmailVerificationAndPassword page
  school: "", // selectSchool page
  role: "", // selectSchool page
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
