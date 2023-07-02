"use client";
import { useTodo } from "@/Store/todo";
import { useSearchParams } from "next/navigation";
import React from "react";

const Todos = () => {
  const { todo, toggleTodoAsCompleted, handleTodoDelete } = useTodo();
  const searchParams = useSearchParams();
  const todofilter = searchParams.get("todos");

  let filterData = todo;

  if (todofilter === "active") {
    filterData = filterData.filter((todo) => !todo.completed);
  } else if (todofilter === "completed") {
    filterData = filterData.filter((todo) => todo.completed);
  }
  console.log(filterData, "data");
  return (
    <ul>
      {filterData?.map((elem) => {
        return (
          <li key={elem.id}>
            <input
              type="checkbox"
              name=""
              id={`todo-${elem.id} `}
              checked={elem.completed}
              onChange={() => toggleTodoAsCompleted(elem.id)}
            />
            <label htmlFor={`todo-${elem.id} `}>{elem.task}</label>

            {elem.completed && (
              <button type="button" onClick={() => handleTodoDelete(elem.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
