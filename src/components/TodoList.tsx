import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { Spinner } from "../helpers/loader";

export const TodoList = () => {
  const { fetchTodos, setTodoPage } = useActions();
  const { todos, loading, error, page, limit } = useTypedSelector(
    (state) => state.todo
  );

  const pages = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    fetchTodos(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      {loading && <Spinner />}
      {error && <h2>Something went wrong</h2>}
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
        </div>
      ))}

      {pages.map((p) => (
        <div
          key={p}
          onClick={() => setTodoPage(p)}
          style={{
            border: p === page ? "2px solid green" : "1px solid gray",
            padding: 10,
          }}
        >
          {p}
        </div>
      ))}
    </>
  );
};
