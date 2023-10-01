import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

export const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong</h2>}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      <h2>asdasdhkhk</h2>
    </div>
  );
};
