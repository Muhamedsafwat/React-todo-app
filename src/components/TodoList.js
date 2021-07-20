import Todo from "./Todo";

const TodoList = ({todos, setTodos, filtred}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtred.map(todo => (
          <Todo 
          text={todo.text}
          key={todo.id}
          setTodos={setTodos}
          todo={todo}
          todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
