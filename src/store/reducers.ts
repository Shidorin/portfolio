import { SET_LANGUAGE } from "./actions";

export interface State {
  language: string;
}

const initialState: State = {
  language: "en",
};

export const languageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
