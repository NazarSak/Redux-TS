import React, { useEffect } from "react";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creator/user";
import { useDispatch } from "react-redux";

export const UserList: React.FC = () => {
  const { loading, error, user } = useTypedSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchUsers());
  }, []);

  // if (loading) {
  //   return <h2>Loading...</h2>
  // }

  return (
    <>
      {loading && <h2>Loading...</h2>}
      <h2>awdasda</h2>
      <h3>asadas</h3>
    </>
  );
};
