import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [todos, setTodos] = useState([
    { id: Math.random(), label: "TODO1" },
    { id: Math.random(), label: "TODO2" },
    { id: Math.random(), label: "TODO3" },
  ]);

  return (
    <div className="w-96 mx-auto p-20">
      <h1 className="text-xl font-bold">Todo</h1>
      <div className="flex gap-x-2">
        <input
          type="text"
          // value={text}
          // onChange={input}
          className="border border-black"
        />
        <button
          // onClick={add}
          className="border border-black flex-shrink-0 px-2"
        >
          追加
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li key={todo.id}>
            <label className="flex items-center gap-x-2">
              <input type="checkbox" />
              <span>{todo.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;