// pages/api/addTodo.js

import { db } from "@/index";
import { todos, ToDo } from "../../../../drizzle/schema";
import { eq } from "drizzle-orm";
import { timestamp } from "drizzle-orm/mysql-core";
import { time } from "drizzle-orm/pg-core";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    try {
      const { id } = await req.json();

      await deleteTodo(id);

      return new Response("Response", { status: 200 });
    } catch (error) {
      // Handle any errors that may occur during database insertion
      console.error("Error adding todo:", error);
      return new Response("Response", { status: 500 });
    }
  } else {
    console.log("Method is not allowed");
    console.log(req.method);
    return new Response("Response", { status: 405 });
  }
}

async function deleteTodo(id: number) {
  return await db.delete(todos).where(eq(todos.id, id));
}
