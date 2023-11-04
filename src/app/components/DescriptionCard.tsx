"use client"
import { ToDo } from "../../../drizzle/schema";
import { allTodos } from "@/index";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
export default function DescriptionCard(props: { id: number }) {
  const handleDelete = async (e: unknown) => {
    e.preventDefault();

    try {
      // Send a request to your server to add the todo to the database
      const response = await fetch("/api/deleteTodo", {
        method: "POST",
        body: JSON.stringify(props.id),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 404) {
        console.log("API NOT FOUND 404");
      } else {
        console.log("Todo deleted successfully");
      }
    } catch (error) {
      console.error("Failed to add todo");
      console.log(error);
    }
    redirect("/")
  };

  const todo: ToDo | undefined = allTodos.find((item) => item.id === props.id);

  return (
    <div className="flex flex-col justify-start font-serif text-gray-700  h-[85rem] w-[80rem] min-h-20 bg-cyan-400 rounded-3xl mt-4 mb-4 overflow-auto">
      <div className="flex flex-col mb-4">
        <div className="flex self-center">
          <h1 className="font-serif font-bold text-6xl mt-10 mb-10 self-center mr-6">
            {todo.title}
          </h1>
          <input
            type="checkbox"
            className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded-3xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 self-center"
          />
        </div>
        <h2 className="text-4xl font-bold self-start ml-6">Description:</h2>
      </div>
      <div className="ml-8 mr-8 mb-8 overflow-auto">
        <p className="self-start mt-4 text-3xl mb-4">{todo.description}</p>
        <div className="flex flex-row">
          <p>Created: {String(todo.creationdate)}</p>
          <button className="bg-gray-700 h-6 w-20 rounded-xl text-white" onClick={(e)=>handleDelete(e)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
