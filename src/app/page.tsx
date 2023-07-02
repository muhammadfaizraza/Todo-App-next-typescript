import AddTodo from "@/Component/AddTodo";
import NavBar from "@/Component/NavBar";
import Todos from "@/Component/Todos";
import React from "react";

const page = () => {
  return (
    <main>
      <h2>Todo + Next</h2>
      <NavBar />
      <AddTodo />
      <Todos />
    </main>
  );
};

export default page;
