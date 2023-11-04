import NameCard from "../components/NameCard";
import Link from "next/link";
import { allTodos } from "@/index";
export default function Page() {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-[#fbde68] overflow-auto">
      <h1 className="font-serif font-bold text-6xl mt-10 mb-10">My ToDos:</h1>
      {allTodos.map((todo) => (
        <Link href={`./todos/${todo.id}`} key={todo.id}>
          <NameCard name={todo.title === null ? "" : todo.title}></NameCard>
        </Link>
      ))}
    </div>
  );
}
