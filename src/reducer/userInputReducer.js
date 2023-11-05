import { SET_USER_INPUT } from "../action/userInputActions";

const initialState = {
  email: "", // EmailVerificationAndPassword page
  password: "", // EmailVerificationAndPassword page
  grade: 0, // selectSchool page
  classNum: 0, // selectSchool page
  number: 0, // selectSchool page
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
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

export default userInputReducer;
