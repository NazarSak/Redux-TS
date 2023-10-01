import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// import * as userActionCreators from "../store/action-creator/user";
import ActionCreators from '../store/action-creator'

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
