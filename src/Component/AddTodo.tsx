"use client";
import { useTodo } from "@/Store/todo";
import React, { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState();

  const { handleAddto } = useTodo();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddto(todo);
    setTodo("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Tyoe Here to Add Task"
        id="todo"
        type="text"
        value={todo}
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
function handleAddtodo(todo: undefined) {
  throw new Error("Function not implemented.");
}
