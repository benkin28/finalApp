export default function NameCard(props: { name: string }) {
  return (
    <div className="flex justify-center items-center font-serif font-bold text-gray-700 text-[1.6rem] h-20 w-[60rem] min-h-20 bg-cyan-400 rounded-3xl mt-4 mb-4">
      <p>{props.name}</p>
    </div>
  );
}
