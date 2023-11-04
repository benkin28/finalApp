
import DescriptionCard from "@/app/components/DescriptionCard";
import { notFound } from "next/navigation";
export default function Page({ params }: { params: { id: string } }) {
  if (params === null) {
    notFound();
  } else {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#fbde68]">
        <DescriptionCard id={Number(params.id)} />
      </div>
    );
  }
}
