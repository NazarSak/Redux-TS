import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
// import { useActions } from "../hooks/useActions";
import { fetchUsers } from "../store/action-creator/user";
import { ThunkDispatch } from "redux-thunk";
import { UserAction } from "../types/user";
import { RootReducer } from "../store/reducers";

export const UserList: React.FC = () => {
  const { loading, error, user } = useTypedSelector((state) => state.user);

  const dispatch: ThunkDispatch<RootReducer, void, UserAction> = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

console.log(user);

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error...</h2>}
        {user.map((a) => (
      <div>
          <h2>{a.name}</h2>
      </div>
        ))}
      <h2>awdasdazzzzzzzzzzz</h2>
      <h3>asadas</h3>
    </>
  );
};
