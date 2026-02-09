"use client";
import { useEffect, useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ text }),
    });
    setText("");
    fetchTodos();
  };

  const toggleTodo = async (id, completed) => {
    await fetch("/api/todos", {
      method: "PUT",
      body: JSON.stringify({ id, completed: !completed }),
    });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch("/api/todos", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    fetchTodos();
  };

  return (
    <div className="p-6">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={addTodo}>Add</button>

      <ul className="mt-4">
        {todos.map(todo => (
          <li key={todo._id} className="flex gap-2">
            <span
              onClick={() => toggleTodo(todo._id, todo.completed)}
              className={todo.completed ? "line-through" : ""}
            >
              {todo.text}
            </span>
            <p>{todo._id}</p>
            <button onClick={() => deleteTodo(todo._id)}> ❌ </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
