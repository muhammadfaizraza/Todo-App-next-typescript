"use client";
import { ReactNode, createContext, useContext, useState } from "react";

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todo: Todo[];
  handleAddto: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleTodoDelete: (id: string) => void;
};

export const todosContext = createContext<TodosContext | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todo, setTodo] = useState<Todo[]>(() => {
    const newTodos = localStorage.getItem("todos" || []);
    return JSON.parse(newTodos) as Todo;
  });

  const handleAddto = (task: string) => {
    setTodo((prev) => {
      var newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };
  //completed handler
  const toggleTodoAsCompleted = (id: string) => {
    setTodo((prev) => {
      const newTodos = prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });

      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const handleTodoDelete = (id: string) => {
    setTodo((prev) => {
      const newTodos = prev.filter((task) => task.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));

      return newTodos;
    });
  };
  return (
    <todosContext.Provider
      value={{ todo, handleAddto, handleTodoDelete, toggleTodoAsCompleted }}
    >
      {children}
    </todosContext.Provider>
  );
};

export function useTodo() {
  const todosContextValue = useContext(todosContext);
  if (!todosContextValue) {
    throw new Error("UseTodos used Outside the provieder");
  }
  return todosContextValue;
}
