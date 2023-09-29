import { userState, UserAction, UserActionTypes } from "../../types/todo";

const initialState: userState = {
  user: [],
  loading: false,
  error: null,
};

export const userReducers = (
  state = initialState,
  action: UserAction
): userState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { loading: true, error: null, user: [] };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, user: [] };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, user: [] };
    default:
      return state;
  }
};
