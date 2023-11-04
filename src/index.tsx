import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { todos } from "../drizzle/schema";
import { ToDo } from "../drizzle/schema";

const connectionString = process.env.NODE_DATABASE_URL;
const client = postgres(connectionString);
export const db = drizzle(client);

export const allTodos=await db.select().from(todos)

