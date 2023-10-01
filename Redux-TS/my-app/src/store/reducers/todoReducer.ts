import { TodoState, TodoActionTypes, TodoAction } from "../../types/todo";

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
};

export const TodoReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true };
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, todos: action.payload };
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, error: action.payload };
    case TodoActionTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
