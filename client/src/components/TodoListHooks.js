import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

const TodoListHooks = () => {
  const { deleteTodos, getTodos, todos } = useContext(GlobalContext);

  useEffect(() => {
    getTodos();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="todo collection">
      {todos.length ? (
        todos.map((todo) => {
          return (
            <div className="collection-item" key={todo._id}>
              {todo.job}
              <span
                style={{ color: "red", marginLeft: "20px", fontSize: "20px" }}
                onMouseOver={(e) => {
                  e.target.style.cursor = "pointer";
                }}
                onClick={() => deleteTodos(todo._id)}
              >
                <b>X</b>
              </span>
            </div>
          );
        })
      ) : (
        <p className="center"> Nothing To Do </p>
      )}
    </div>
  );
};

export default TodoListHooks;
